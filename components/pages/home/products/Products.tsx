import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import LinkTag from '@/components/LinkTag'
import { PX18, PX30 } from '@/components/typography/TextSize'
import { cn } from '@/lib/utils'
import { IconArrowRight } from '@tabler/icons-react'


type SingleProductContainerProps = {
    className?: string,
    imageSrc: string,
    text: string,
}
const SingleProductContainer = ({ imageSrc, text, className = "" }: SingleProductContainerProps) => {
    return (
        <div className={cn('relative h-128 sm:h-152 lg:h-128 xl:h-152', className)}>
            <div className=' relative h-108 sm:h-128 lg:h-108 xl:h-128 bg-primary-light md:group-hover/product:h-full flex rounded-xl justify-center overflow-hidden transition-all duration-300'>
                <div className="absolute w-full h-full z-2 bg-linear-to-b from-transparent to-black via-transparent" />
                <img src={imageSrc} alt="Product Image" className='object-cover w-full transition-all duration-300' />
            </div>
            <PX30 className="font-bold absolute mx-4 bottom-28 z-3 text-white">{text}</PX30>
            <div className='absolute bottom-4 right-0 left-0 z-3'>
                <div
                    className='h-13 px-6 rounded-full flex items-center transition-all duration-500 border border-black group-hover/product:mx-4 group-hover/product:border-white group-hover/product:bg-white justify-between'>
                    <PX18 className='font-bold'>View all</PX18>
                    <div className='flex h-full items-center w-6 overflow-hidden'>
                        <IconArrowRight className='flex-none -translate-x-full group-hover/product:translate-x-0 transition-transform duration-500' />
                        <IconArrowRight className='flex-none -translate-x-full group-hover/product:translate-x-0 transition-transform duration-500' />
                    </div>

                </div>
            </div>
        </div>
    )
}

const ProductsContainer = ({ className = "" }: { className?: string }) => {
    return (
        <div className={cn('grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4', className)}>
            <div>
                <LinkTag className='group/product' href='' variant='custom'>
                    <SingleProductContainer imageSrc='images/products/cnc.webp' text='CNC Machines' />
                </LinkTag>
            </div>
            <div>
                <LinkTag className='group/product' href='' variant='custom'>
                    <SingleProductContainer imageSrc='images/products/hinges.webp' text='Hinges Machines' />
                </LinkTag>
            </div>
            <div>
                <LinkTag className='group/product' href='' variant='custom'>
                    <SingleProductContainer imageSrc='images/products/lock.webp' text='Lock Machines' />
                </LinkTag>
            </div>
        </div>
    )
}

const Products = () => {
    return (
        <Section className='min-h-max!'>
            <Container className='px-0! md:px-8!'>
                <div className='bg-primary-lighter rounded-3xl p-6 md:p-19 py-12 lg::pb-35.5 space-y-12'>
                    <div>
                        <PX18 className="font-bold">Products</PX18>
                    </div>
                    <ProductsContainer />
                </div>
            </Container>

        </Section>
    )
}

export default Products
