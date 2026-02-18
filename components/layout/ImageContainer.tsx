import { cn } from "@/lib/utils"

type ImageContainerProps = {
    src: string,
    alt: string,
    className?: string,
    width?: number,
    height?: number
}

const ImageContainer = ({ src, alt, className = "", width = 42, height = 42 }: ImageContainerProps) => {
    return (
        <div
            className={cn("overflow-hidden group/imageContainer rounded-xl flex", className)}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <img src={src} alt={alt} className="group-hover/imageContainer:scale-110 transition-all object-cover duration-300 flex w-full h-full" />
        </div>
    )
}

export default ImageContainer