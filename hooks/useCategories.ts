import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "@/utils/api/api"

export type CategoryKey = "cnc" | "hinges" | "locks"

export type CategoryDetails = {
    id: string
    videoSrc: string
    name: string
    description: string
    href: string
    image: {
        primary: string
        secondary: string
        outline: string
    }
}

export type CategoriesList = Record<CategoryKey, CategoryDetails>

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
        staleTime: 1000 * 60 * 60, // 1 hour
        select: (response): CategoriesList => {
            const categories = response.data.data.data

            const result: Partial<CategoriesList> = {}

            categories.forEach((cat: any) => {
                let key: CategoryKey | null = null

                if (cat.slug.includes("cnc")) key = "cnc"
                else if (cat.slug.includes("hinges")) key = "hinges"
                else if (cat.slug.includes("locks")) key = "locks"

                if (!key) return

                result[key] = {
                    id: cat._id,
                    videoSrc: cat.videoUrl,
                    name: cat.categoryName,
                    description: cat.description,
                    href: `/machines/${cat.slug}`,
                    image: {
                        primary: cat.primaryImage,
                        secondary: cat.secondaryImage,
                        outline: cat.thirdImage
                    }
                }
            })

            return result as CategoriesList
        }
    })
}