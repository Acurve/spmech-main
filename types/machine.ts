import type { Category } from "./category"

type CategorySpecificForMachine = Pick<Category, "categoryName" | "slug" | "commonAdvantages" | "_id">

export type Machine = {
    _id: string,
    categoryId: string | CategorySpecificForMachine,
    description: string,
    image1: string,
    image2: string,
    image3: string,
    modelName: string,
    order: number,
    slug: string,
    specifications?: Record<string, string | Record<string, string>>,
    featureDescriptions?: Record<string, string>,
    status: string,
    videoUrl: string,
    createdAt: string,
    updatedAt: string,
    outlineImage: string

}