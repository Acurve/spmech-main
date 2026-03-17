"use client"

import Fade from "@/components/animations/Fade"
import Container from "@/components/layout/Container"
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from "@/components/shared/BreadCrumb"
import { Text } from "@/components/typography/Text"
import { IconHome, IconCalendarEvent, IconUser, IconTag } from "@tabler/icons-react"
import { Blog } from "@/types/blog"
import parse from 'html-react-parser'
import Image from "next/image"

type BlogMainProps = {
    blog: Blog
}

const BlogMain = ({ blog }: BlogMainProps) => {
    const breadCrumbs: BreadCrumbType[] = [
        { name: "Home", href: "/", icon: <IconHome /> },
        { name: "Blogs", href: "/blogs" },
        { name: blog.title, href: `/blogs/${blog.slug}` }
    ]

    const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(blog.publishedAt).toLocaleDateString(undefined, dateOptions);

    return (
        <div className="pt-24 pb-32 bg-[#FAFAFA] min-h-screen">
            <Container className="space-y-16 lg:space-y-24">
                <BreadCrumb links={breadCrumbs} isAnimated />

                <article className="max-w-4xl mx-auto w-full">
                    {/* Editorial Header */}
                    <Fade from="down" className="space-y-8 text-center mb-16">
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                                        <IconTag size={12} stroke={2.5} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.15]">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 pt-4 border-t border-gray-200/60 w-max mx-auto px-8">
                            <div className="flex items-center gap-2">
                                <IconCalendarEvent size={18} />
                                <Text as="span" size="sm" className="font-medium tracking-wide">
                                    {formattedDate}
                                </Text>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <div className="flex items-center gap-2">
                                <IconUser size={18} />
                                <Text as="span" size="sm" className="font-medium tracking-wide">
                                    {blog.author.name}
                                </Text>
                            </div>
                        </div>
                    </Fade>

                    {/* Featured Image */}
                    <Fade from="up" className="relative aspect-[21/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 mb-16 lg:mb-24 bg-gray-100">
                        <img
                            src={blog.image || '/placeholder-blog.jpg'}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </Fade>

                    {/* Parsed HTML Content */}
                    <Fade from="up" delay={0.2} className="relative z-10 w-full max-w-3xl mx-auto">
                        <div className="
                            prose prose-lg prose-gray max-w-none w-full
                            prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-gray-900
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:my-6
                            prose-a:text-brand prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            prose-strong:font-semibold prose-strong:text-gray-900
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
                            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
                            prose-li:text-gray-600 prose-li:my-2
                            prose-blockquote:border-l-4 prose-blockquote:border-brand prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-gray-700 prose-blockquote:italic prose-blockquote:rounded-r-lg
                            prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-12 prose-img:w-full
                            prose-video:rounded-2xl prose-video:shadow-xl prose-video:my-12 prose-video:w-full
                            selection:bg-brand/20 selection:text-brand
                        ">
                            {parse(blog.data || '')}
                        </div>
                    </Fade>
                </article>

            </Container>
        </div>
    )
}

export default BlogMain
