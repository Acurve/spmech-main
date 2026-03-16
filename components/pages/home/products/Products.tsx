import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { Text } from '@/components/typography/Text';
import LinkTag from '@/components/LinkTag';
import { cn } from '@/lib/utils';
import { IconArrowRight } from '@tabler/icons-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { CategoryShaped } from '@/types/category';

type CategoryShapedForProductSection = Pick<CategoryShaped,"image"|"name"|"href">

type SingleProductContainerProps = {
    className?: string,
} & CategoryShapedForProductSection
const SingleProductContainer = ({ image, name, className = "" }: SingleProductContainerProps) => {
    return (
        <div className={cn('relative h-128 sm:h-152 lg:h-128 xl:h-152', className)}>
            <div className=' relative h-108 sm:h-128 lg:h-108 xl:h-128 bg-secondary md:group-hover/product:h-full flex rounded-xl justify-center overflow-hidden transition-all duration-300'>
                <div className="absolute w-full h-full z-2 bg-linear-to-b from-transparent to-black via-transparent" />
                <img src={image.secondary} alt="Product Image" className='object-cover w-full transition-all duration-300 bg-secondary absolute' />
                <img src={image.primary} alt="Product Image" className='object-cover w-full transition-all duration-300 absolute opacity-0 group-hover/product:opacity-100' />
            </div>
            <Text as='span' size='lg' className="font-bold absolute mx-4 bottom-28 z-3 text-background capitalize">{name}</Text>
            <div className='absolute bottom-4 right-0 left-0 z-3'>
                <div
                    className='h-13 px-6 rounded-full flex items-center transition-all duration-500 border border-primary! group-hover/product:mx-4 group-hover/product:border-white group-hover/product:bg-white justify-between'>
                    <Text size='base' className='font-medium'>View all</Text>
                    <div className='flex h-full items-center w-6 overflow-hidden'>
                        <IconArrowRight className='flex-none -translate-x-full group-hover/product:translate-x-0 transition-transform duration-500' />
                        <IconArrowRight className='flex-none -translate-x-full group-hover/product:translate-x-0 transition-transform duration-500' />
                    </div>

                </div>
            </div>
        </div>
    )
}



type ProductsProps = {
    categories:CategoryShapedForProductSection[],
}

const Products = ({categories}:ProductsProps) => {
    return (

        <Section className='py-0'>
            <Container >
                <div className='space-y-8 bg-border p-12 rounded-3xl'>
                    <SectionHeader heading="CNC & SPMs" eyeBrow='_products' />

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4'>
                        {categories.map((category) => (
                            <LinkTag href={category.href} variant='custom' key={`category-${category.name}`} className='group/product'>
                                <SingleProductContainer  {...category} />
                            </LinkTag>
                        ))

                        }
                    </div>

                </div>
            </Container>
        </Section>
    )
}

export default Products



