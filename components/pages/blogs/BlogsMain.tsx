"use client"

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from "@/components/shared/BreadCrumb"
import { Text } from "@/components/typography/Text"
import { IconHome, IconArrowRight, IconCalendarEvent } from "@tabler/icons-react"
import { Blog } from "@/types/blog"
import LinkTag from "@/components/LinkTag"
import { cn } from "@/lib/utils"

type BlogsMainProps = {
    blogs: Blog[]
}

const BlogCard = ({ blog, index }: { blog: Blog, index: number }) => {
    // Format date nicely
    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(blog.publishedAt).toLocaleDateString(undefined, dateOptions);

    return (
        <Fade from="up" delay={index * 0.1}>
            <LinkTag
                href={`/blogs/${blog.slug}`}
                variant="custom"
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50">
                    <img
                        src={blog.image || '/placeholder-blog.jpg'}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Category Tag (Optional, assumes first tag represents category) */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full z-10">
                            <Text as="span" size="xs" className="font-bold text-brand uppercase tracking-wider">
                                {blog.tags[0]}
                            </Text>
                        </div>
                    )}
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-1 p-8 space-y-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <IconCalendarEvent size={16} />
                        <Text as="span" size="xs" className="font-medium tracking-wide">
                            {formattedDate}
                        </Text>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-brand transition-colors duration-300 line-clamp-2">
                        {blog.title}
                    </h3>

                    {/* <p className="text-gray-500 leading-relaxed line-clamp-3">
                        {blog.description}
                    </p> */}

                    <div className="mt-auto pt-6 flex items-center gap-2 text-brand font-semibold">
                        <Text as="span" size="sm" className="uppercase tracking-widest relative">
                            Read Article
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </Text>
                        <IconArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </LinkTag>
        </Fade>
    )
}

const BlogsMain = ({ blogs }: BlogsMainProps) => {
    const breadCrumbs: BreadCrumbType[] = [
        { name: "Home", href: "/", icon: <IconHome /> },
        { name: "Blogs", href: "/blogs" }
    ]

    return (
        <div className="pt-24 pb-32 bg-[#FAFAFA] min-h-screen">
            <Container className="space-y-16">
                <BreadCrumb links={breadCrumbs} isAnimated />

                {/* Editorial Header */}
                <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-6 pt-8 pb-12">
                    <Fade from="down">
                        <Text as="span" size="sm" className="font-bold text-brand uppercase tracking-[0.2em]">
                            Insights & News
                        </Text>
                    </Fade>
                    <Fade from="down" delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900">
                            Our Library
                        </h1>
                    </Fade>
                    <Fade from="down" delay={0.2}>
                        <p className="text-xl leading-relaxed text-gray-500 max-w-2xl">
                            Discover the latest industry trends, product announcements, and technical deep-dives from our engineering team.
                        </p>
                    </Fade>

                    {/* Decorative subtle background element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                        <Text as='span' size='custom' className="text-[15vw] font-bold tracking-tighter text-gray-900 leading-none">
                            JOURNAL
                        </Text>
                    </div>
                </div>

                {/* Blog Grid */}
                {blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <BlogCard key={blog._id} blog={blog} index={index} />
                        ))}
                    </div>
                ) : (
                    <Fade from="up">
                        <div className="flex flex-col items-center justify-center p-24 text-center bg-white rounded-3xl border border-gray-100">
                            <Text as="h3" size="2xl" className="font-medium text-gray-900 mb-2">No articles found</Text>
                            <Text as="p" size="base" className="text-gray-500">Check back later for new insights and updates.</Text>
                        </div>
                    </Fade>
                )}
            </Container>
        </div>
    )
}

export default BlogsMain
