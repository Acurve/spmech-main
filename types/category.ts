import { Machine } from "./machine"

export type Category = {
    _id: string,
    categoryName: string,
    slug: string,
    commonAdvantages: string[],
    description: string,
    order: number,
    primaryImage: string,
    secondaryImage: string,
    thirdImage: string,
    videoUrl: string,
    pdfUrl: string,
    createdAt: string,
    updatedAt: string,
    machines: Machine[]
}

export type CategoryShaped = {
    id: string,
    videoSrc: string,
    name: string,
    description: string,
    href: string,
    image: {
        primary: string,
        secondary: string,
        outline: string
    }
}