import Image from "next/image";

export default function ProfileCenter() {
    return (
        // Container defines the center point dimensions (300x300 image as per Figma)
        <div className="relative flex items-center justify-center w-[300px] h-[300px]">

            {/* Profile Image - The exact center of the layout */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                    src="/assets/profile.png"
                    alt="Joel Garcia"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Name Pill - Absolutely positioned relative to the container/image */}
            {/* Figma: y=280 approx (relative to top). Container h=300. So it overlaps bottom edge. */}
            {/* We place it at bottom 5% and center it horizontally */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                <div className="px-8 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                    {/* Text inside */}
                    <h1 className="text-xl text-white font-normal whitespace-nowrap">
                        Joel Garcia
                    </h1>
                </div>
            </div>
        </div>
    );
}
