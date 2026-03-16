"use client"

import Fade from "@/components/animations/Fade"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export type HeroImageContainerProps = {
    className?: string,
    images: string[],
    altText?: string
}

const HeroImageContainer = ({ images, altText = "machine image", className = "" }: HeroImageContainerProps) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0])
    
    return (
        <div className={cn('flex flex-col gap-6 lg:w-1/2 h-[90dvh] lg:h-full lg:min-h-[700px]', className)}>

            {/* Main Image Display with Crossfade */}
            <div className='relative bg-gray-50/80 rounded-2xl flex-1 flex items-center justify-center overflow-hidden border border-gray-100'>
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImage}
                        src={currentImage} 
                        alt={altText}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className='w-full h-[85%] object-contain' 
                    />
                </AnimatePresence>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 h-32 lg:h-40 flex-none">
                {images.map((src, index) => (
                    <Fade from="up" className="w-full h-full relative" key={`hero-image-${index}`} delay={index * 0.15}>
                        <button
                            onClick={() => setCurrentImage(src)}
                            className={cn(
                                'relative w-full h-full bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 group',
                                currentImage === src ? 'ring-2 ring-brand/50 shadow-md' : 'hover:border-gray-300 hover:shadow-sm'
                            )}
                        >
                            <img src={src} alt="" className={cn(
                                "w-full h-full object-contain p-2 transition-transform duration-500",
                                currentImage !== src && "group-hover:scale-110"
                            )} />

                            {/* Active State Indicator line */}
                            <div className={cn(
                                "absolute bottom-0 left-0 h-1 bg-brand transition-all duration-300",
                                currentImage === src ? "w-full" : "w-0"
                            )} />
                        </button>
                    </Fade>
                ))}
            </div>

        </div>
    )
}

export default HeroImageContainer