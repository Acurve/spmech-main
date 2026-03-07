import AboutParagraphs from '@/components/pages/about/AboutParagraphs';
import VMV from '@/components/pages/about/vmv/VMV';
import Journey from '@/components/pages/about/Journey';
import Hero from '@/components/pages/about/Hero';


// bread crumbs and image parallax

export default function Page() {
    return (
        <>
            <Hero />
            <AboutParagraphs />
            <VMV />
            <Journey />
        </>

        
    );
}