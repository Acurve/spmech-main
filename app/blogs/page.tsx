import { Metadata } from "next";
import { getAllBlogs } from "@/utils/api/api";
import BlogsMain from "@/components/pages/blogs/BlogsMain";

export const revalidate = false; // Using Next.js cache tags instead

export const metadata: Metadata = {
    title: "Insights & News | SP Mech Group",
    description: "Read the latest insights, news, and technical updates from the industry experts at SP Mech Group.",
    keywords: ["blogs", "news", "insights", "SP Mech Group blogs", "SP Mech Group news", "SP Mech Group insights", "hinges", "locks", "hardware", "architectural", "industrial", "commercial", "SP Mech Group", "hinges manufacturer", "lock manufacturer", "cnc manufacturer", "hinges machine", "lock machine", "cnc machine"],
    authors: [{ name: "SP Mech Group" }],
    creator: "SP Mech Group",
    publisher: "SP Mech Group",
    openGraph: {
        title: "Blogs, Insights & News | SP Mech Group",
        description: "Read the latest blogs, insights, news, and technical updates from the industry experts at SP Mech Group.",
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
    const blogs = response?.data.data || [];

    return <BlogsMain blogs={blogs} />;
}

export default Page;
