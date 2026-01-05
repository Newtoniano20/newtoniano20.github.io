import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import NavigationRail from './NavigationRail';

interface ContentScreenProps {
    activeItem: string;
    onNavigate: (item: string) => void;
    onBack: () => void;
}

export default function ContentScreen({ activeItem, onNavigate, onBack }: ContentScreenProps) {
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch markdown content
        const fetchContent = async () => {
            try {
                const res = await fetch(`/content/${activeItem}.md`);
                if (res.ok) {
                    const text = await res.text();
                    setContent(text);
                } else {
                    setContent('# Content Not Found\nSorry, this content is unavailable.');
                }
            } catch (error) {
                setContent('# Error\nFailed to load content.');
            }
        };
        fetchContent();
    }, [activeItem]);

    return (
        // Updated background to match the global gradient exactly
        // Flex-col on mobile (Top Nav), Flex-row on desktop (Left Nav)
        <div
            className="fixed inset-0 z-50 flex flex-col md:flex-row animate-in fade-in duration-300"
            style={{
                background: 'linear-gradient(150.32deg, rgb(32, 35, 62) 2.87%, rgb(0, 0, 0) 74.48%)'
            }}
        >

            {/* Navigation Container */}
            {/* Mobile: w-full h-auto border-b */}
            {/* Desktop: w-[140px] h-full border-r */}
            <div className="w-full md:w-[140px] h-auto md:h-full shrink-0 border-b md:border-b-0 md:border-r border-white/10 flex-none z-50 bg-[#20233e]/50 backdrop-blur-md md:bg-transparent">
                <NavigationRail
                    activeItem={activeItem}
                    onSelect={onNavigate}
                    onBack={onBack}
                />
            </div>

            {/* Content Area */}
            <div className="flex-1 h-full overflow-y-auto p-6 md:p-16 pt-4 md:pt-16">
                <div className="max-w-4xl mx-auto prose prose-invert prose-sm md:prose-base lg:prose-l mb-20 md:mb-0">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </div>

        </div>
    );
}
