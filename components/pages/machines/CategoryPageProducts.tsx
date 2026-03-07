import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import LinkTag from "@/components/LinkTag";
import { Text } from "@/components/typography/Text";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";

type ProductContainerProps = {
    imageSrc: string,
    machineName: string,
    href: string,
    description?: string,
    className?: string,
    reversed?: boolean,
    index: number
}

export const ProductContainer = ({ index, imageSrc, machineName, href, description="", className = "", reversed = false }: ProductContainerProps) => {
    return (
        <Section className={cn(" bg-white", className)}>
            <Container>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className={`flex flex-col items-center gap-16 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                        {/* Image Container with Parallax effect simulation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="group relative aspect-4/5 w-full overflow-hidden bg-gray-50 md:aspect-3/4">
                                <img
                                    src={imageSrc}
                                    alt={machineName}
                                    className="h-full w-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                                />
                                {/* Overlay subtle shadow */}
                                <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:bg-transparent" />
                            </div>
                        </motion.div>

                        {/* Content Container */}
                        <div className="flex w-full flex-col lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Text as="span" size="base" className="mb-4 block font-bold text-brand">
                                    {index}
                                </Text>
                                <h2 className="mb-2 text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                                    {machineName}
                                </h2>


                                <p className="mb-10 text-lg leading-relaxed text-gray-500">
                                    {description}
                                </p>


                                {/* Call to Action to Dedicated Page */}
                                <LinkTag
                                    href={href}
                                    variant="custom"
                                    className="group  tracking-[0.15em] text-gray-900 transition-colors hover:text-brand flex gap-2 items-center"
                                >
                                    <Text as="span" size="base" className="relative overflow-hidden pb-1">
                                        See details
                                        {/* Custom underline animation */}
                                        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                                    </Text>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                                        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                                    </span>
                                </LinkTag>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </Container>
        </Section>
    )
}
