import Image from "next/image"
import Container from "../Container"
import LinkTag from "@/components/LinkTag"
import { PX16, PX18 } from "@/components/typography/TextSize"
import { cn } from "@/lib/utils"
import NavbarHamBurger from "./NabarHamburger"
import DesktopNavigation from "./DesktopNavigation"
import TabletNavigation from "./TabletNavigation"
import { TabletNavigationContextProvider } from "@/contexts/tabletNavigationContext"
import NavbarAnimation from "./NavbarAnimation"
import Fade from "@/components/animations/Fade"
import { CallToActionText } from "@/constants/callToAction"

const NavbarBranding = () => {
    const logoDimension = {
        width: 60,
        height: 60
    }
    return (
        <div>
            <LinkTag href="" variant="custom" className="hidden md:flex flex-col items-center">
                <Image src={"brandLogo.svg"} alt="SP Mech" width={logoDimension.width} height={logoDimension.height} />
                {/* <PX18 className="font-medium text-black">SP Engineering</PX18> */}
            </LinkTag>
            <LinkTag href="" variant="custom" className="flex flex-col items-center md:hidden">
                <Image src={"brandLogo.svg"} alt="SP Mech" width={logoDimension.width - 10} height={logoDimension.height - 10} />
                {/* <PX16 className="font-medium text-white">SP Engineering</PX16> */}
            </LinkTag>
        </div>
    )
}



const NavbarCTA = ({ className = "" }: { className?: string }) => {

    return (
        <div className={cn("flex items-center gap-8", className)}>
            <LinkTag variant="hover-button-black" className="hidden! bg-primary-orange-lighter border-none sm:flex!">
                <PX18 className="font-bold px-12!">{CallToActionText}</PX18>
            </LinkTag>

            <NavbarHamBurger className="lg:hidden" />
        </div>
    )
}

const Navbar = () => {

    return (
        <TabletNavigationContextProvider>
            <NavbarAnimation>
                <Fade from="up" delay={3.1} triggerOnce>

                    <nav className="lg:h-32 h-21 flex w-full">
                        <Container className="flex items-center gap-16 w-full relative ">
                            <NavbarBranding />
                            <DesktopNavigation className="lg:flex hidden" />
                            <TabletNavigation className="lg:hidden flex" />
                            <NavbarCTA className="ml-auto" />
                        </Container>
                    </nav>
                </Fade>
            </NavbarAnimation>
        </TabletNavigationContextProvider>
    )
}

export default Navbar
