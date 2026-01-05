import ContentPageClient from "@/components/ContentPageClient";

// Required for static export
export function generateStaticParams() {
    return [
        { slug: 'aerospace' },
        { slug: 'grass' },
        { slug: 'mit' },
        { slug: 'professional' },
        { slug: 'personal' },
        { slug: 'other' },
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ContentPageClient slug={slug} />;
}
