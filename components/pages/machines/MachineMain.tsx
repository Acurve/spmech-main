"use client"
import MachinePageLoader from '@/components/loaders/MachinePageLoader';
import Hero from './hero/Hero'
import { getMachineBySlug } from '@/utils/api/api';
import { useQuery } from '@tanstack/react-query';
import Container from '@/components/layout/Container';
import BreadCrumb, { type BreadCrumb as BreadCrumbType } from "@/components/shared/BreadCrumb";
import { IconHome } from "@tabler/icons-react";
import Specifications from './Specifications';
import MachineInAction from './MachineInAction';
import { CallToActionSideVideo } from '@/components/shared/CallToAction';

export type HeroMachineDetails = {
    images: string[],
    modelName?: string,
    advantages: string[],
    category: string,
    description?:string
}

const MachineMain = ({ slug }: { slug: string }) => {


    const { isPending, error, data } = useQuery({
        queryKey: ['machine', slug],
        queryFn: () => getMachineBySlug(slug),
    })

    if (isPending) return <MachinePageLoader />;

    if (error) return 'An error has occurred: ' + error.message


    const actualMachineData = data.data.data.machine
    const heroMachineDetails: HeroMachineDetails = {
        images: actualMachineData.images,
        modelName: actualMachineData.modelName,
        advantages: actualMachineData.categoryId.commonAdvantages,
        category: actualMachineData.categoryId.categoryName,
        
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
            name: actualMachineData.categoryId.categoryName,
            href: `/machines/${actualMachineData.categoryId.slug}`,
        },
        {
            name: actualMachineData.modelName,
            href: `/machines/${actualMachineData.categoryId.slug}/${slug}`
        }
    ]


    const machineSpecs = actualMachineData.specifications


    return (
        <div className='pt-16'>
            <Container className='pt-16'>
                <BreadCrumb links={specificProductCrumbs} isAnimated />
            </Container>
            <Hero machineDetails={heroMachineDetails} />
            <Specifications specifications={machineSpecs} />
            <MachineInAction />
            <CallToActionSideVideo />
        </div>
    )
}

export default MachineMain
