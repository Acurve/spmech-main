import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react"

type TextTag = | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextSizeProps = PropsWithChildren<{
    tag?: TextTag,
    className?: string
}>

const PX70 = ({ tag: Tag = "h1", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[70px]", className)}>{children}</Tag>
);
const PX50 = ({ tag: Tag = "h2", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[50px]", className)}>{children}</Tag>
);
const PX30 = ({ tag: Tag = "h3", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[30px]", className)}>{children}</Tag>
);
const PX24 = ({ tag: Tag = "h3", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[24px]", className)}>{children}</Tag>
);
const PX18 = ({ tag: Tag = "span", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[18px]", className)}>{children}</Tag>
);
const PX16 = ({ tag: Tag = "span", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[16px]", className)}>{children}</Tag>
);
const PX14 = ({ tag: Tag = "span", className = "", children }: TextSizeProps) => (
    <Tag className={cn("text-[14px]", className)}>{children}</Tag>
);
const PXCustom = ({ tag: Tag = "span", className = "", children }: TextSizeProps) => (
    <Tag className={cn("", className)}>{children}</Tag>
);

export { PX14, PX16, PX24, PX30, PX18, PX50, PX70, PXCustom }