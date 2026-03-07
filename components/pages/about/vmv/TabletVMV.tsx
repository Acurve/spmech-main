import Fade from '@/components/animations/Fade'
import { Text } from '@/components/typography/Text'
import VMVDetails, { VMV, VMVDetail } from '@/constants/vmvDetails'
import { cn } from '@/lib/utils'
import { IconPoint } from '@tabler/icons-react'


const TabletVMVCard = ({ VMV }: { VMV: VMVDetail }) => {

    return (
        <div className="relative h-108 sm:h-84 w-full text-background rounded-2xl overflow-hidden flex items-center">
            <img src={VMV.imageSrc} className="absolute inset-0 -z-1 w-full h-full object-cover" />
            <div className="absolute bg-foreground/70 inset-0" />

            <div className='flex flex-col items-center justify-center px-8 sm:px-16 h-full z-10 w-full'>
                <div className='space-y-4'>


                    <Text as='h3' size='xl' className='flex flex-col gap-2 items-center font-medium'>
                        {<VMV.icon size={48} />}
                        {VMV.title}
                    </Text>

                    {

                        typeof VMV.description === "string" ?

                            <Text size='base' className='font-medium text-center'>
                                {VMV.description}
                            </Text>
                            : <div>
                                {VMV.description.map((vmvDesc, index) => (

                                    <Text key={`vmvDesc-${index}`} size='base' className='font-medium flex space-x-2 items-center'>
                                        <IconPoint /> {vmvDesc}
                                    </Text>
                                ))}
                            </div>
                    }


                </div>
            </div>

        </div>
    )
}

const TabletVMVCardsContainer = ({ className }: { className?: string }) => {
    return (
        <div className={cn("", className)}>
            <div className='space-y-8'>
                {
                    Object.keys(VMVDetails).map((vmv, index) => (
                        <Fade from='down' key={`tabletVMV-${index}`}>
                        <TabletVMVCard  VMV={VMVDetails[vmv as VMV]} />
                        </Fade>
                    ))
                }
            </div>
        </div>
    )
}

export default TabletVMVCardsContainer;
