import Image from "next/image";

interface OrbitItemProps {
    icon?: string;
    emoji?: string;
    label: React.ReactNode;
    color: string;
    className?: string;
    href?: string;
}

export default function OrbitItem({ icon, emoji, label, color, className = "", href }: OrbitItemProps) {
    const content = (
        <>
            <div className="relative mb-2 shrink-0 flex items-center justify-center">
                {icon ? (
                    <div className="relative h-12 w-12">
                        <Image src={icon} alt="" fill className="object-contain" />
                    </div>
                ) : emoji ? (
                    <span className="text-[40px] leading-none">{emoji}</span>
                ) : null}
            </div>
            <div className="text-center font-bold text-white leading-tight text-xl px-2">
                {label}
            </div>
        </>
    );

    const commonClasses = `relative flex shrink-0 flex-col items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 overflow-hidden ${className}`;
    const style = {
        backgroundColor: color,
        width: "187.5px",
        height: "187.5px",
    };

    if (href) {
        return (
            <a href={href} className={commonClasses} style={style}>
                {content}
            </a>
        );
    }

    return (
        <div className={commonClasses} style={style}>
            {content}
        </div>
    );
}
