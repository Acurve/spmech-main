import { Metadata } from "next";
import { getAllBlogs } from "@/utils/api/api";
import BlogsMain from "@/components/pages/blogs/BlogsMain";

export const revalidate = false; // Using Next.js cache tags instead

export const metadata: Metadata = {
    title: "Insights & News | SP Mech Group",
    description: "Read the latest insights, news, and technical updates from the industry experts at SP Mech Group.",
    openGraph: {
        title: "Insights & News | SP Mech Group",
        description: "Read the latest insights, news, and technical updates from the industry experts at SP Mech Group.",
        url: `${process.env.NEXT_PUBLIC_MAIN_URL}/blogs`,
        type: 'website',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/blogs`,
    }
};

const Page = async () => {
    const response = await getAllBlogs();
    
    // Default to empty array if fetch fails to allow UI to render empty state
    const blogs = response?.data || [];

    return <BlogsMain blogs={blogs} />;
}

export default Page;
