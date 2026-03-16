import { IconBolt, IconClockCheck, IconPackages } from "@tabler/icons-react"
import { ComponentType } from "react"

export type Benefits = {
    id: string,
    heading: string,
    description: string,
    mainBenefitStat: string,
    imageSrc?: string,
    videoSrc: string,
    icon: ComponentType
}
const benefits: Benefits[] = [
    {
        id: "019c5828-82a6-7a88-aa78-308c17452541",
        heading: "increase production",
        description: "high-speed machining designed to increase output and reduce cycle time.",
        mainBenefitStat: "⬆ by 160%",
        imageSrc: "images/benefits/increase_production.webp",
        videoSrc: "https://robojob-usa.com/media/documents/19791092-uhd_3840_2160_60fps_processed_0TGr4LR_ENUQU21.webm",
        icon: IconPackages 
    },
    {
        id: "019c5828-82a6-76d4-b181-5beeb7288850",
        heading: "energy saving",
        description: "optimized power consumption lowers energy usage without affecting performance.",
        mainBenefitStat: "⬇ 3kw",
        imageSrc: "images/benefits/energy_saving.webp",
        videoSrc: "https://www.pexels.com/download/video/5161379/",
        icon:IconBolt
    },
    {
        id: "019c5828-82a6-7a6f-9fb6-a0432c1aa575",
        heading: "time saving",
        description: "efficient setup and smooth operation minimize delays across production runs.",
        mainBenefitStat: "⬇ upto 3 hours",
        imageSrc: "images/benefits/time_saving.webp",
        videoSrc: "https://www.pexels.com/download/video/852341/",
        icon:IconClockCheck
    },
]

export const benefitsSectionheading = "Even more reasons to consider SP  Engineering"

export default benefits