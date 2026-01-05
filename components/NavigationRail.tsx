import { Undo2 } from 'lucide-react';
import Image from 'next/image';

interface NavigationRailProps {
    onSelect: (item: string) => void;
    onBack: () => void;
    activeItem: string;
}

const ITEMS = [
    { id: 'aerospace', label: <>Aerospace<br />Engineering</>, emoji: '🚀', color: '#8b5cf6' },
    { id: 'grass', label: 'GRASS', icon: '/assets/grass.png', color: '#ef4444' },
    { id: 'mit', label: <>MIT Edgerton<br />Center</>, icon: '/assets/mit.svg', color: '#f59e0b' },
    { id: 'professional', label: <>Professional<br />Life</>, icon: '/assets/professional.svg', color: '#4f46e5' },
    { id: 'other', label: 'Other', icon: '/assets/other.svg', color: '#10b981' },
    { id: 'personal', label: <>Personal<br />Life</>, icon: '/assets/personal.svg', color: '#ec4899' },
];

export default function NavigationRail({ onSelect, onBack, activeItem }: NavigationRailProps) {
    return (
        <div className="flex flex-row md:flex-col items-center justify-center md:justify-between p-1 md:py-4 w-full md:w-[120px] h-auto md:h-screen bg-transparent relative z-50 overflow-hidden shrink-0">

            {/* Top/Left: Profile */}
            <div className="shrink-0 mr-1 md:mr-0 md:mb-2">
                <div className="relative w-[38px] h-[38px] md:w-[75px] md:h-[75px] rounded-full overflow-hidden border-2 border-white/20 cursor-pointer hover:scale-105 transition-transform" onClick={onBack}>
                    <Image
                        src="/assets/profile.png"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Middle: Nav Items */}
            {/* Mobile: Use justify-center with small gap ensuring fit. Desktop: normal flex-col */}
            <div className="flex-1 flex flex-row md:flex-col items-center justify-center md:justify-center gap-2 md:gap-2 px-1 md:px-0">
                {ITEMS.map((item) => {
                    const isActive = activeItem === item.id;
                    return (
                        <div key={item.id} onClick={() => onSelect(item.id)} className="cursor-pointer transition-transform hover:scale-110 shrink-0">
                            <div
                                className="relative flex flex-col items-center justify-center rounded-full overflow-hidden shadow-lg transition-all"
                                style={{
                                    backgroundColor: item.color,
                                    width: 'var(--item-size)',
                                    height: 'var(--item-size)',
                                    opacity: isActive ? 1 : 0.5,
                                    border: isActive ? '3px solid white' : 'none',
                                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                }}
                            >
                                <style jsx>{`
                    div {
                      --item-size: 38px;
                    }
                    @media (min-width: 768px) {
                      div {
                        --item-size: 75px;
                      }
                    }
                  `}</style>

                                <div className="relative mb-0.5 shrink-0 flex items-center justify-center">
                                    {item.icon ? (
                                        <div className="relative h-3 w-3 md:h-6 md:w-6">
                                            <Image src={item.icon} alt="" fill className="object-contain" />
                                        </div>
                                    ) : (
                                        <span className="text-[12px] md:text-[18px] leading-none">{item.emoji}</span>
                                    )}
                                </div>
                                {/* Hide label on mobile */}
                                <div className="hidden md:block text-center font-bold text-white leading-tight text-[8px] px-1">
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom/Right: Back Button */}
            <div className="shrink-0 ml-1 md:ml-0 md:mt-2">
                <div
                    onClick={onBack}
                    className="cursor-pointer transition-transform hover:scale-110 flex flex-col items-center justify-center rounded-full bg-[#ec4899] w-[38px] h-[38px] md:w-[70px] md:h-[70px] shadow-lg"
                >
                    <Undo2 size={16} className="text-white mb-0 md:mb-0.5 md:w-[24px] md:h-[24px]" />
                    <span className="text-white font-bold text-[8px] md:text-[10px] hidden md:block">Back</span>
                </div>
            </div>

        </div>
    );
}
