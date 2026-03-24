import { cn } from "@/lib/utils"

const SPMechLogoSilver = ({ className = "w-72 aspect-square" }: { className?: string }) => {
    return (
        <div className={cn("relative overflow-hidden inline-block", className)}>

            <img src="shiningLogo.webp" alt="not loaded" />

            {/* Shine layer */}
            <div className="shine-layer pointer-events-none absolute inset-0"></div>

        </div>
    )
}

export default SPMechLogoSilver