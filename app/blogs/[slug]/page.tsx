import Main from "@/components/pages/blogs/BlogMain";
import { Blog } from "@/types/blog";
import { getAllBlogs, getBlogBySlug } from "@/utils/api/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = false;
export const dynamicParams = true;

type PageProps = {
    params: Promise<{
        slug: string
    }>
}
export async function generateStaticParams() {
    const response = await getAllBlogs()
    const blogs = response.data.data
    const paths: { slug: string; }[] = []

    blogs.forEach((blog: Blog) => {
        paths.push({
            slug: blog.slug
        })
    })
    return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const response = await getBlogBySlug(slug)
    if (!response) return { title: 'Article Not Found | SP Mech Group' };

    // API returns data inside a data object, check api.ts pattern
    const blog: Blog = response.data.blog

    return {
        title: `${blog.title} | SP Mech Group`,
        description: blog.metaDescription,
        openGraph: {
            title: blog.title,
            description: blog.metaDescription,
            images: [blog.image],
            type: 'article',
            publishedTime: blog.publishedAt,
            authors: [blog.author?.name || "Acurve Team"],
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/blogs/${slug}`,
        }
    };
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    const response = await getBlogBySlug(slug)
    if (!response || !response.data) {
        notFound()
    }

    const blog = response.data.blog;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "image": blog.coverImage,
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt,
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "SP Mech Group"
        },
        "description": blog.description
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Main blog={blog} />
        </>
    )
}

export default Page;
