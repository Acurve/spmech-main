import Hero from './hero/Hero'
import Container from '@/components/layout/Container';
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from "@/components/shared/BreadCrumb";
import { IconHome } from "@tabler/icons-react";
import Specifications from './Specifications';
import MachineInAction from './MachineInAction';
import { CallToActionSideVideo } from '@/components/shared/CallToAction';
import { Machine } from '@/types/machine';
import FeatureDescription from './FeatureDescription';

export type HeroMachineDetails = {
    images: string[],
    modelName?: string,
    advantages: string[],
    description?: string
}

const MachineMain = ({ machine, pdfUrl }: { machine: Machine, pdfUrl: string }) => {

    const category = (machine.categoryId && typeof machine.categoryId !== 'string')
        ? {
            slug: machine.categoryId.slug,
            categoryName: machine.categoryId.categoryName,
            commonAdvantages: machine.categoryId.commonAdvantages
        }
        : null;

    const heroMachineDetails: HeroMachineDetails = {
        images: [machine.image1, machine.image2, machine.image3],
        modelName: machine.modelName,
        advantages: category?.commonAdvantages || []
    }



    const specificProductCrumbs: BreadCrumbType[] = [
        {
            name: "Home",
            href: "/",
            icon: <IconHome />
        },
        {
            name: "machines",
            href: "#",
            notLink: true
        },
        {
            name: category?.categoryName || "",
            href: `/machines/${category?.slug}`,
        },
        {
            name: machine.modelName,
            href: `/machines/${category?.slug}/${machine.slug}`
        }
    ]




    return (
        <div className='pt-16'>
            <Container className='pt-16'>
                <BreadCrumb links={specificProductCrumbs} isAnimated />
            </Container>
            <Hero machineDetails={heroMachineDetails} />
            <FeatureDescription features={machine.featureDescription || {}} />
            <Specifications specifications={machine.specifications!} pdfUrl={pdfUrl} image={machine.outlineImage ? machine.outlineImage : ""} />
            <MachineInAction videoUrl={machine.videoUrl} />
            <CallToActionSideVideo />
        </div>
    )
}

export default MachineMain
