export type Blog = {
    _id: string;
    title: string;
    slug: string;
    data: string;
    image: string;
    order: number,
    author: BlogAuthor,
    isPublished: boolean,
    metaTitle: string,
    metaDescription: string,
    tags: string[],
    publishedAt: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

export type BlogAuthor = {
    _id: string,
    name: string,
    avatar: string,
    slug: string
}