import { IconBulb, IconDiamond, IconProps, IconTargetArrow } from "@tabler/icons-react";

export type VMV = "vision" | "mission" | "values";

export type VMVDetail = {
    id: string,
    title: string,
    description: string | string[],
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    imageSrc: string
}

const VMVDetails: Record<VMV, VMVDetail> = {
    vision: {
        id: "s18d16f-asdg9d4-8614-sdge84",
        title: "vision",
        description: "To set the global standard for precision manufacturing—where every machine defines accuracy, reliability, and future-ready performance.",
        icon: IconBulb,
        imageSrc: "https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/vision.webp"
    },
    mission: {
        id: "s18416f-asdg9d4-8614-sdge84",
        title: "mission",
        description: "We design and deliver CNC solutions that combine engineering excellence, material mastery, and long-term dependability—empowering manufacturers to build better, faster, and smarter.",
        icon: IconTargetArrow,
        imageSrc: "https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/mission.webp"
    },
    values: {
        id: "s18416f-asdg9d4-8g614-sdge84",
        title: "values",
        description: [
            "Accuracy built into every component.",
            "Rigid designs for stable, long-term performance.",
            "Decisions driven by testing, not assumptions."
        ],
        icon: IconDiamond,
        imageSrc: "https://spmech-assets-prod.s3.ap-south-1.amazonaws.com/assets/about/values.webp"
    },
}
export default VMVDetails