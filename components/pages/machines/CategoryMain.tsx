"use client"

import Fade from '@/components/animations/Fade'
import Container from '@/components/layout/Container'
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from '@/components/shared/BreadCrumb'
import { Text } from '@/components/typography/Text'
import { IconHome } from '@tabler/icons-react'
import { ProductContainer } from './CategoryPageProducts'
import { type Category } from '@/types/category'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { notFound } from 'next/navigation'

type CategoryMachines = {
    imageSrc: string,
    href: string,
    machineName: string,
    description?: string,
}

type CategoryHeaderProps = {
    categoryName: string,
    categoryDescription: string,
    CategoryType: string
}

const CategoryHeader = ({ categoryName, categoryDescription, CategoryType }: CategoryHeaderProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the background text
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <div ref={ref} className="relative flex min-h-[70vh] lg:min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-linear-to-b from-gray-50 to-white px-6 text-center">
            <Fade
                from='down'
                className="relative z-10 mx-auto max-w-4xl"
            >
                <Text as='h1' size='3xl' className="mb-6 tracking-tighter font-medium md:text-6xl lg:text-7xl">
                    {categoryName}
                </Text>
                <Text as='p' size='base' className="mx-auto max-w-xl leading-relaxed text-gray-500 md:text-lg">
                    {categoryDescription}
                </Text>
            </Fade>

            {/* Decorative subtle background element with TRUE parallax */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: textY }} className="opacity-[0.03]">
                    <Text as='span' size='custom' className="text-[20vw] font-bold tracking-tighter text-gray-900 whitespace-nowrap leading-none">
                        {CategoryType}
                    </Text>
                </motion.div>
            </div>
        </div>
    );
};

const CategoryMain = ({ category }: { category: Category }) => {

    if (!category.machines || category.machines.length === 0) notFound()

    const finalMachines: CategoryMachines[] = category.machines.map((mac) => (
        {
            imageSrc: mac.image1,
            href: `${category.slug}/${mac.slug}`,
            machineName: mac.modelName,
            description: mac.description
        }
    ))

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
            name: category.categoryName,
            href: `/machines/${category.slug}`,
        },
    ]
    return (
        <div className='pt-16'>
            <Container className='pt-16 space-y-16'>
                <BreadCrumb links={specificProductCrumbs} isAnimated />
                <CategoryHeader
                    categoryName={category.categoryName}
                    categoryDescription={`Discover our wide range of ${category.categoryName}s designed for accuracy and scale`}
                    CategoryType={category.categoryName.split(" ")[0]}
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
