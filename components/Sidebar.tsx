import { Paperclip, FileText } from 'lucide-react';

interface SidebarProps {
    onSelect: (item: string) => void;
}

export default function Sidebar({ onSelect }: SidebarProps) {
    return (
        <div className="absolute top-[20px] left-[20px] md:top-[34px] md:left-[41px] flex flex-col gap-[8px] md:gap-[12px] z-50">
            {/* Portfolio Button - Direct Link to PDF */}
            <a
                href="/Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[110px] h-[40px] md:w-[150px] md:h-[52px] bg-[#1e1f23] border border-[#4b4c4f] rounded-[8px] flex items-center justify-center gap-[6px] md:gap-[8px] text-white hover:bg-[#2a2b30] transition-colors cursor-pointer no-underline"
            >
                <Paperclip className="text-white w-[16px] h-[16px] md:w-[20px] md:h-[20px]" strokeWidth={2} />
                <span className="font-semibold text-[12px] md:text-[16px] leading-tight font-sans">Portfolio</span>
            </a>

            {/* CV/Resume Button - Direct Link to PDF */}
            <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[110px] h-[40px] md:w-[150px] md:h-[52px] bg-[#1e1f23] border border-[#4b4c4f] rounded-[8px] flex items-center justify-center gap-[6px] md:gap-[8px] text-white hover:bg-[#2a2b30] transition-colors cursor-pointer no-underline"
            >
                <FileText className="text-white w-[16px] h-[16px] md:w-[20px] md:h-[20px]" strokeWidth={2} />
                <span className="font-semibold text-[12px] md:text-[16px] leading-tight font-sans">CV/Resume</span>
            </a>
        </div>
    );
}
