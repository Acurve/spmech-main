import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconProps } from "@tabler/icons-react"
import { ComponentType } from "react"

type SocialMedia = {
    name: string,
    href: string,
    icon?: ComponentType<IconProps>
}
const socialMediaList = [
    {
        name: "instagram",
        href: "/instagram",
        icon: IconBrandInstagram,
    },
    {
        name: "facebook",
        href: "/facebook",
        icon: IconBrandFacebook,
    },
    {
        name: "youtube",
        href: "/youtube",
        icon: IconBrandYoutube,
    },
    {
        name: "linkedin",
        href: "/linkedin",
        icon: IconBrandLinkedin,
    },
]

export default socialMediaList;