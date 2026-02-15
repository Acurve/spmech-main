"use client"
import LinkTag from "@/components/LinkTag"
import { PX16 } from "@/components/typography/TextSize"
import navigationLinks from "@/constants/navigationLinks"
import { useHeroVideoState } from "@/contexts/heroVideoContext"
import { cn } from "@/lib/utils"
import { IconDeviceLandlinePhone, IconLock, IconRuler2 } from "@tabler/icons-react"

const HeroOtherProductsContainer = () => {
  const { setCurrentImg } = useHeroVideoState()
  return (
    <div className='md:flex gap-6 h-13 items-center justify-end bg-primary w-max ml-auto px-2 rounded-full hidden'>
      {
        navigationLinks[3].subLinks?.map((subLink, index) => (

          <LinkTag
            key={subLink.id}
            href={subLink.href}
            onMouseEnter={() => setCurrentImg(subLink.imageSrc)}
            onMouseLeave={() => setCurrentImg(null)}
            variant='custom'
            className='flex h-10 max-w-10 overflow-hidden items-center hover:max-w-48 transition-all duration-300 border border-black text-black rounded-full'>
            <div className='aspect-square h-full flex items-center justify-center'>
              {
                index === 0 ? <IconDeviceLandlinePhone /> : index === 1 ? <IconRuler2 /> : <IconLock />
              }
            </div>
            <PX16 className='flex flex-none pr-3 font-medium'>{subLink.name}</PX16>
          </LinkTag>
        ))
      }

    </div>
  )
}

export const HeroOtherProductImage = () => {
  const { currentImg } = useHeroVideoState()
  return (
    <div
      className={cn(
        "absolute w-full h-full -z-1 flex items-center justify-center p-8 opacity-0 bg-primary-lighter transition-opacity duration-300",
        currentImg && "opacity-100"
      )}>
      <img src={currentImg || undefined} alt="" className="w-full h-full object-contain" />
    </div>
  )
}

export default HeroOtherProductsContainer