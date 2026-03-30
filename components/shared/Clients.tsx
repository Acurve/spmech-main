"use client"
import { useClients } from "@/hooks/useClients"
import Link from "next/link"
import Section from "../layout/Section"
import Container from "../layout/Container"
import SectionHeader from "./SectionHeader"
import Fade from "../animations/Fade"

export type Client = {
    _id?: string
    websiteUrl: string
    imageUrl: string
}

const ClientCard = ({ client }: { client: Client }) => {
    const hasUrl = Boolean(client.websiteUrl && client.websiteUrl.trim() !== "")
    const cardClassName = "group relative flex aspect-square! items-center justify-center rounded-2xl bg-card p-6 ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:bg-card hover:shadow-xl hover:shadow-brand/10 hover:ring-brand w-40 sm:w-56 md:w-64 min-[1600px]:w-78 shadow-md"

    const InnerContent = (
        <div className="relative h-full w-full transition-all duration-300 flex items-center">
            <img
                src={client.imageUrl}
                alt={hasUrl ? `Website link for client ${client.websiteUrl}` : "Client Logo"}
                className="object-contain"
            />
        </div>
    )

    if (hasUrl) {
        return (
            <Link
                href={client.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
            >
                {InnerContent}
            </Link>
        )
    }

    return (
        <div className={cardClassName}>
            {InnerContent}
        </div>
    )
}

const Clients = () => {
    const { data, isLoading } = useClients()

    if (isLoading) {
        return (
            <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
                <div className="flex animate-pulse flex-col items-center justify-center space-y-6 md:space-y-8">
                    <div className="h-10 w-3/4 max-w-md rounded-lg bg-muted md:h-12" />
                    <div className="h-5 w-full max-w-2xl rounded-md bg-muted md:h-6" />

                    <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="h-32 rounded-2xl bg-muted/80 ring-1 ring-border/30" />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    const clients = data?.data?.clients || []

    if (clients.length === 0) return null

    return (
        <Section className="md:mt-16 min-h-max pb-0 md:pb-16">
            <Container>

                <Fade from="down" triggerOnce className="mb-16">
                    <SectionHeader

                        className="flex justify-center text-center"
                        eyeBrow="_clients"
                        heading={<>Trusted by{" "}
                            <span className="text-brand">
                                Industry Leaders
                            </span></>}
                    // description="We take pride in delivering exceptional solutions to organizations worldwide.
                    // Here are some of our esteemed clients who trust us with their success."
                    />
                </Fade>

                <div className="flex flex-wrap justify-center gap-4">
                    {clients.map((client: Client, index: number) => (
                        <Fade triggerOnce from="down" key={client._id || index} delay={index * 0.15}>

                            <ClientCard client={client} />
                        </Fade>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default Clients