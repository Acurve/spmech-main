import Container from '@/components/layout/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import DesktopVMVCardsContainer from './DekstopVMV';
import TabletVMVCardsContainer from './TabletVMV';
import Section from '@/components/layout/Section';
// vision mission value




const VMV = () => {
    return (
        <Section>

            <Container className=''>
                <div className='space-y-16'>

                    <SectionHeader heading={<>Vision, Mission, & Values</>} className='flex justify-center gap-0' />
                    <DesktopVMVCardsContainer className='hidden md:block' />
                    <TabletVMVCardsContainer className='flex md:hidden' />
                </div>
            </Container>
        </Section>
    )
}

export default VMV