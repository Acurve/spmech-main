import { categoriesList as source, CategoryDetails } from "./categories"

type BaseNavigationItems = {
    id: string,
    name: string,
    type: "link" | "dropdown",
}

type LinkNavigationItems = BaseNavigationItems & {
    type: "link"
    href: string
    subLinks?: never
}

export type SubLink = Pick<CategoryDetails, "name" | "description" | "href"> & { id: string, imageSrc: string }
export type DropdownNavigationItems = BaseNavigationItems & {
    type: "dropdown"
    subLinks: SubLink[],
    href?: never
}

type NavigationLinks = (LinkNavigationItems | DropdownNavigationItems)[]

const navigationLinks: NavigationLinks = [
    {
        id: "019c318f-9c83-76d4-a40a-b997c5d0eb50",
        name: "home",
        type: "link",
        href: "/",
    },
    {
        id: "019c318f-dbcd-7035-ba40-633281056422",
        name: "contact",
        type: "link",
        href: "/contact",
    },
    {
        id: "019c3190-233b-7669-a05f-f169d72c6dbe",
        name: "about",
        type: "link",
        href: "/about",
    },
    {
        id: "019c3190-233b-7b6b-88e4-cc51e6b91907",
        name: "machines",
        type: "dropdown",
        subLinks: [
            {
                id: "019c3190-233b-7b14-8ebb-86593867fe0b",
                name: source.cnc.name,
                href: source.cnc.description,
                imageSrc: source.cnc.image.outline,
                description: source.cnc.description
            },
            {
                id: "019c3190-233b-d8d4-8ebb-86593867fe0b",
                name: source.hinges.name,
                href: source.hinges.description,
                imageSrc: source.hinges.image.outline,
                description: source.hinges.description
            },
            {
                id: "019c3190-233b-6s4d-8ebb-86593867fe0b",
                name: source.locks.name,
                href: source.locks.description,
                imageSrc: source.locks.image.outline,
                description: source.locks.description
            },
        ]
    },


]


export default navigationLinks