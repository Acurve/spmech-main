import Image from "next/image"
import Container from "../Container"
import LinkTag from "@/components/LinkTag"
import { cn } from "@/lib/utils"
import NavbarHamBurger from "./NabarHamburger"
import DesktopNavigation from "./DesktopNavigation"
import TabletNavigation from "./TabletNavigation"
import { TabletNavigationContextProvider } from "@/contexts/tabletNavigationContext"
import NavbarAnimation from "./NavbarAnimation"
import Fade from "@/components/animations/Fade"
import { CallToActionText } from "@/constants/callToAction"
import { Text } from "@/components/typography/Text"
import InteractiveHoverButton from "@/components/ui/InteractiveHoverButton"
import { BACKEND_URL } from "@/constants/backendUrl"
import { Category, CategoryShaped } from "@/types/category"

const NavbarBranding = () => {
    const logoDimension = {
        width: 84,
        height: 84
    }
    return (
        <div className="">
            <LinkTag href="/" variant="custom" className="hidden md:flex flex-col items-center">
                <Image src={"/BrandLogo.svg"} alt="SP Mech" width={logoDimension.width} height={logoDimension.height} />

            </LinkTag>
            <LinkTag href="/" variant="custom" className="flex flex-col items-center md:hidden">
                <Image src={"/BrandLogo.svg"} alt="SP Mech" width={logoDimension.width - 10} height={logoDimension.height - 10} />

            </LinkTag>
        </div>
    )
}



const NavbarCTA = ({ className = "" }: { className?: string }) => {

    return (
        <div className={cn("flex items-center justify-end gap-8", className)}>
            <LinkTag variant="custom" className="hidden! sm:flex! ">
                <InteractiveHoverButton className="border-2">

                    <Text as="span" size="base" className="font-medium px-12">{CallToActionText}</Text>
                </InteractiveHoverButton>
            </LinkTag>

            <NavbarHamBurger className="lg:hidden" />
        </div>
    )
}


export type DesktopNavigationProps = {
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

const Navbar = async () => {
    const catRes = await fetch(`${BACKEND_URL}/products/categories`);
    const rawCategories = await catRes.json();
    const categories = rawCategories.data.data
    const categoriesForDesktopNavigation:CategoryShaped[] = categories.map((cat:Category)=>(
        {
            id:cat._id,
            videoSrc:cat.videoUrl,
            name:cat.categoryName,
            description:cat.description,
            href:`/machines/${cat.slug}`,
            image:{
                primary:cat.primaryImage,
                secondary:cat.secondaryImage,
                outline:cat.thirdImage,
            }
        }
    ))
    return (
        <TabletNavigationContextProvider>
            <NavbarAnimation>
                <Fade from="up" triggerOnce>

                    <nav className="flex w-full bg-background relative">
                        <Container className="flex w-full">
                            <div className="min-h-21 gap-16 flex items-center w-full">

                                <NavbarBranding />
                                <DesktopNavigation categories={categoriesForDesktopNavigation} className="lg:flex justify-center  hidden" />
                                <TabletNavigation categories={categoriesForDesktopNavigation} className="lg:hidden flex" />
                                <NavbarCTA className="ml-auto" />
                            </div>
                        </Container>
                    </nav>
                </Fade>
            </NavbarAnimation>
        </TabletNavigationContextProvider>
    )
}

export default Navbar
