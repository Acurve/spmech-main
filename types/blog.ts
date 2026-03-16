export type Blog = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    description: string;
    coverImage: string;
    author: string;
    isPublished: boolean;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}
