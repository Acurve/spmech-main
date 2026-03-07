"use client"
import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import MachinePageLoader from '@/components/loaders/MachinePageLoader'
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { Text } from '@/components/typography/Text'
import { getAllMachines } from '@/utils/api/api'
import { IconHome } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { ProductContainer } from './CategoryPageProducts'
import { usePathname } from 'next/navigation'



type categoryMachines = {
    imageSrc: string,
    href: string,
    machineName: string,
    description?: string,
    categoryName?: string
}

type categoryWhole = {
    categoryName: string,
    categoryHref: string,
    machines: categoryMachines[]
}


type CategoryHeaderProps = {
    categoryName: string,
    categoryDescription: string,
    CategoryType: string
}
const CategoryHeader = ({ categoryName, categoryDescription, CategoryType }: CategoryHeaderProps) => {
    return (
        <div className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] px-6 text-center">
            <Fade
                from='down'
                className="relative z-10 mx-auto max-w-4xl"
            >

                <Text as='h1' size='3xl' className="mb-8 tracking-tighter font-medium">
                    {categoryName}
                </Text>
                <Text as='p' size='base' className="mx-auto max-w-xl  leading-relaxed text-gray-500">
                    {categoryDescription}
                </Text>
            </Fade>

            {/* Decorative subtle background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
                <Text as='span' size='custom' className="text-[20vw] font-bold tracking-tighter text-gray-900">{CategoryType}</Text>
            </div>
        </div>
    );
};

const CategoryMain = ({ categorySlug }: { categorySlug: string }) => {

    const pathName = usePathname()

    const { isPending, error, data } = useQuery({
        queryKey: ['category-machines'],
        queryFn: getAllMachines,
    })

    if (isPending) return <MachinePageLoader />;

    if (error) return 'An error has occurred: ' + error.message


    const response = data.data.data.data

    const finalMachines: categoryMachines[] = response
        .filter((machine: any) => machine.categoryId.slug === categorySlug)
        .map((machine: any) => ({
            imageSrc: machine.images[0],
            href: `${pathName.replace(/\/$/, "")}/${machine.slug}`,
            machineName: machine.modelName,
            categoryName: machine.categoryId.categoryName
        }));


    const finalCategoryMachines: categoryWhole = {
        categoryName: finalMachines[0].categoryName!,
        categoryHref: `/${categorySlug}`,
        machines: finalMachines
    }



    const specificProductCrumbs: BreadCrumbType[] = [
        {
            name: "Home",
            href: "/",
            icon: <IconHome />
        },
        {
            name: "machines",
            href: "#",
            notLink: true
        },
        {
            name: finalCategoryMachines.categoryName,
            href: `/machines/${categorySlug}`,
        },
    ]
    return (
        <div className='pt-16'>
            <Container className='pt-16 space-y-16'>
                <BreadCrumb links={specificProductCrumbs} isAnimated />
                <CategoryHeader
                    categoryName={finalCategoryMachines.categoryName}
                    categoryDescription={`Discover our wide range of ${finalCategoryMachines.categoryName}s designed for accuracy and scale`}
                    CategoryType={finalCategoryMachines.categoryName.split(" ")[0]}
                />
            </Container>
            {
                finalMachines.map((machine, index) => (
                    <ProductContainer
                        key={`${machine.machineName}-${index}`}
                        description={machine.description}
                        href={machine.href}
                        imageSrc={machine.imageSrc}
                        machineName={machine.machineName}
                        index={index + 1}
                        reversed={index % 2 === 0}
                    />
                ))
            }

        </div>
    )
}

export default CategoryMain
