import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import SectionHeader from '@/components/shared/SectionHeader'
import { Text } from '@/components/typography/Text'
import { cn } from '@/lib/utils'
import { IconArrowRight } from '@tabler/icons-react'

type SpecificationsProps = {
    className?: string,
    specifications: Record<string, string>
}

const SpecificationsTable = ({ className = "", specifications }: SpecificationsProps) => {
    return (
        <div className={cn("overflow-hidden", className)}>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-primary/50!">
                        <th className="px-8 py-5">
                            <Text as='span' size='base' className='font-bold text-brand tracking-widest uppercase'>property</Text>
                        </th>
                        <th className="px-8 py-5 text-right">
                            <Text as='span' size='base' className='font-bold text-brand tracking-widest  uppercase w-full '>value</Text>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(specifications).map((spec, index) => (
                        <tr
                            key={index}
                            className="group  transition-colors duration-150 border-b border-primary/50! hover:bg-border/40"
                        >
                            <td className="px-8 py-4">
                                <div className="flex flex-col">
                                    <Text as='span' size='base' className="text-foreground font-bold mb-1 transition-colors capitalize group-hover:text-brand duration-300">
                                        {spec.split("_").join(" ")}
                                    </Text>
                                </div>
                            </td>
                            <td className="px-8 py-4  text-right">
                                <Text as="span" size='base' className=" text-foreground/80 font-medium transition-colors group-hover:text-brand duration-300">
                                    {specifications[spec]}
                                </Text>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Table Footer / Note */}
            <div className="p-8  flex items-center justify-between">

                <a className="h-12 px-6 text-brand border border-brand! hover:bg-brand hover:text-background font-medium rounded-full flex items-center justify-center transition-all duration-500 w-max group/download gap-4 cursor-pointer">
                    <Text as='span' size='sm' className='font-medium'>Download Full PDF Catalog</Text>
                    <div className='flex h-full items-center w-6 overflow-hidden'>
                        <IconArrowRight className='flex-none -translate-x-full group-hover/download:translate-x-0 transition-transform duration-500' />
                        <IconArrowRight className='flex-none -translate-x-full group-hover/download:translate-x-0 transition-transform duration-500' />
                    </div>
                </a>
            </div>
        </div>
    )
}
const Specifications = ({ className = "", specifications }: SpecificationsProps) => {
    return (
        <Section className={cn("", className)}>
            <Container className='overflow-hidden '>
                <div className='space-y-8 bg-border p-16 rounded-2xl'>
                    <SectionHeader heading="Specifications" />
                    <div className='w-full flex gap-8'>
                        <SpecificationsTable specifications={specifications} className='w-full lg:w-1/2' />
                        <img src="https://ik.imagekit.io/rhj171iwh/spmech/locks-outline-transparent.webp?updatedAt=1771797945871" alt="" className='w-1/2 lg:flex hidden object-contain scale-250 xl:scale-100 xl:object-cover opacity-40' />
                    </div>

                </div>
            </Container>

        </Section>
    )
}

export default Specifications
