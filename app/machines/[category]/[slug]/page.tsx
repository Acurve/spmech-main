import Main from "@/components/pages/machines/MachineMain";
import { BACKEND_URL } from "@/constants/backendUrl";
import { Machine } from "@/types/machine";
import { getAllMachines, getMachineBySlug } from "@/utils/api/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
type PageProps = {
    params: Promise<{
        category: string,
        slug: string
    }>
}
export const revalidate = false;
export const dynamicParams = true;

// export async function generateStaticParams() {
//     const response = await getAllMachines()
//     const machines = response.data.data
//     const paths: { category: any; slug: string; }[] = []

//     machines.forEach((mac: Machine) => {
//         paths.push({
//             category: typeof mac.categoryId !== "string" ? mac.categoryId.slug : "",
//             slug: mac.slug
//         })
//     })
//     return paths;
// }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug,category } = await params;

    const response = await getMachineBySlug(slug)
    if (!response) return { title: 'Machine Not Found | SP Mech Group' };
    const machine = response.data

    return {
        title: `${machine.modelName} | SP Mech Group`,
        description: machine.description.substring(0, 155), // Perfect SEO length
        openGraph: {
            title: machine.modelName,
            description: machine.description,
            images: [machine.image1], // Grabs the first S3 image for the link preview
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/machines/${category}/${slug}`, // Prevents duplicate content penalties
        }
    };
}


const Page = async ({ params }: PageProps) => {

    const { category, slug } = await params;

    const response = await getMachineBySlug(slug)
    console.log(response)
    const machine = response.data
    if (!response) notFound()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": machine.modelName,
        "image": machine.images,
        "description": machine.description,
        "brand": {
            "@type": "Brand",
            "name": "SP Mech Group" // Your client's brand
        },
        "category": category,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": `${process.env.NEXT_PUBLIC_MAIN_URL}/machines/${category}/${slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Main machine={machine} />
        </>
    )
}

export default Page;
