"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export type HeroImageContainerProps = {
    className?: string,
    images: string[],
    altText?: string
}
const HeroImageContainer = ({ images, altText = "machine image", className = "" }: HeroImageContainerProps) => {
    const [currentImage, setCurrentImage] = useState<string>(images[0])
    return (
        <div className={cn('grid grid-cols-3 grid-rows-12 lg:w-1/2 gap-6 h-[90dvh] lg:h-full', className)}>

            <div className='bg-border rounded-2xl p-8 row-span-9 col-span-3 flex'>
                <img src={"https://ik.imagekit.io/rhj171iwh/spmech/locks/locks/key-dimpling-lock-cylinder-and-barrel-hole-double-spindle-machine.webp?updatedAt=1771858104102"} className='w-full h-full object-contain' alt={altText} />
            </div>

            {
                Array(3).fill(null).map((_, index) => (
                    <div
                        key={`hero-image-${index}`}
                        onClick={() => setCurrentImage("")}
                        className={cn('bg-primary w-full h-full row-span-3 rounded-2xl')}>
                        {/* className={cn('bg-primary w-full h-full row-span-3 rounded-2xl', image === currentImage && "ring-2 ring-brand")}> */}

                    </div>
                ))
            }
        </div>
    )
}

export default HeroImageContainer