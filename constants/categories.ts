export type Category = "hinges" | "cnc" | "locks"

type ImageVariant = "primary" | "secondary" | "outline"

type ImageVariants = Record<ImageVariant, string>

export type CategoryDetails = {
    videoSrc: string
    name: string
    description: string
    image: ImageVariants
    href: string
}

type Categories = Record<Category, CategoryDetails>

export const categoriesList = {
    cnc: {
        videoSrc: "https://www.pexels.com/download/video/9033891/",
        name: "CNC Machines",
        description: "High accuracy CNC solutions",
        href: "",
        image: {
            primary: "newimg/cnc-primary.png",
            secondary: "/cnc/secondary.webp",
            outline: "https://ik.imagekit.io/rhj171iwh/spmech/cnc-outline-transparent.webp?updatedAt=1771797726502"
        }
    },
    hinges: {
        videoSrc: "https://www.pexels.com/download/video/852341/",
        name: "Hinges Machines",
        description: "Precision engineered hinges",
        href: "",
        image: {
            primary: "newimg/hinges-primary.png",
            secondary: "/hinges/secondary.webp",
            outline: "https://ik.imagekit.io/rhj171iwh/spmech/hinges-outline-transparent.webp"
        }

    },
    locks: {
        videoSrc: "https://www.pexels.com/download/video/4941354/",
        name: "Locks Machines",
        description: "Secure industrial locking systems",
        href: "",
        image: {
            primary: "newimg/locks-primary.png",
            secondary: "/locks/secondary.webp",
            outline: "https://ik.imagekit.io/rhj171iwh/spmech/locks-outline-transparent.webp"
        }
    }
} as const satisfies Categories