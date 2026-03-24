import { IconChevronRight, ReactNode } from "@tabler/icons-react";
import LinkTag from "../LinkTag";
import { Text } from "../typography/Text";
import type { SubLink } from "@/constants/navigationLinks";
import { cn } from "@/lib/utils";
import Fade from "../animations/Fade";
export type BreadCrumb = Pick<SubLink, "name" | "href"> & { notLink?: boolean, icon?: ReactNode }

type BreadCrumbProps = {
    links: BreadCrumb[],
    className?: string,
    isAnimated?: boolean
}

const BreadCrumb = ({ links, className = "", isAnimated = false }: BreadCrumbProps) => {
    const lastIndex = links.length - 1;

    return (
        <div aria-label="Breadcrumb">
            <ul className={cn("flex items-center flex-wrap space-x-2 text-xs font-medium tracking-widest uppercase", className)}>
                {links.map((link, index) => {
                    const isLastLink = index === lastIndex;
                    const isNotLink = Boolean(link.notLink);

                    const itemContent = (
                        <>
                            <LinkTag
                                href={link.href || "#"}
                                notLink={isNotLink}
                                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                            >
                                {link.icon && <span className="flex items-center">{link.icon}</span>}
                                <Text as="span">{link.name}</Text>
                            </LinkTag>
                            {!isLastLink && (
                                <IconChevronRight
                                    size={14}
                                    className="text-gray-400 ml-2"
                                    aria-hidden="true"
                                />
                            )}
                        </>
                    );

                    return (
                        <li key={`${link.name}-${index}`} className="flex items-center">
                            {isAnimated ? (
                                <Fade from="right" delay={index * 0.2} triggerOnce>
                                    <div className="flex items-center">
                                        {itemContent}
                                    </div>
                                </Fade>
                            ) : (
                                itemContent
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BreadCrumb;