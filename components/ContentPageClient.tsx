"use client";

import { useRouter } from "next/navigation";
import ContentScreen from "./ContentScreen";

export default function ContentPageClient({ slug }: { slug: string }) {
    const router = useRouter();

    return (
        <ContentScreen
            activeItem={slug}
            onNavigate={(item) => router.push(`/${item}`)}
            onBack={() => router.push('/')}
        />
    );
}
