import Main from "@/components/pages/machines/CategoryMain";
import { BACKEND_URL } from "@/constants/backendUrl";
import { getAllCategories, getCategoryBySlug } from "@/utils/api/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = false;
export const dynamicParams = true;

export async function generateStaticParams() {
    // Use your absolute EC2 URL here
    const response = await getAllCategories();
    const categories = response.data.data

    return categories.map((product: any) => ({
        category: product.slug,
    }));
}


type PageProps = {
    params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category } = await params;

    // 1. Fetch the category details (which usually includes the category name and a description)
    const response = await getCategoryBySlug(category)

    if (!response) return { title: 'Category Not Found | SP Mech Group' };

    const cat = response.data;

    return {
        // 2. Dynamic title based on the category name
        title: `${cat.categoryName} Machines | Premium Industrial Equipment`,
        description: `Explore our high-end range of ${cat.categoryName} machines. Built for precision, durability, and industrial efficiency.`,

        openGraph: {
            title: `${cat.categoryName} | SP Mech Group`,
            description: `Professional-grade ${cat.categoryName} machinery designed for high-performance manufacturing.`,
            url: `${process.env.NEXT_PUBLIC_MAIN_URL}/machines/${category}`,
            type: 'website',
            images: cat.primaryImage,
        },

        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/machines/${category}`,
        }
    };
}

const Page = async ({ params }: PageProps) => {
    // You can fetch data here using params.slug
    // const postData = await fetchPost(params.slug) 

    const { category } = await params

    const response = await getCategoryBySlug(category);
    if (!response) notFound()
    const cat = response.data

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `${cat.categoryName} Machines`,
        "description": `Browse our full range of high-end ${cat.categoryName} equipment.`,
        "itemListElement": cat.machines.map((m: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${process.env.NEXT_PUBLIC_MAIN_URL}/machines/${category}/${m.slug}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Main category={cat} />
        </>
    )
}

export default Page;
