"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "GRASS",
        image: "/assets/promotion.JPG",
        link: "https://www.upcprogram.space/grass",
        isExternal: true,
    },
    {
        title: "The Blue Man Group",
        image: "/assets/piano2.png",
        link: "https://www.instructables.com/Foot-Piano/",
        isExternal: true,
    },
    {
        title: "Shaking Hands Overseas",
        image: "/assets/sho.png",
        link: "https://www.instructables.com/Shaking-Hands-Overseas/",
        isExternal: true,
    },
    {
        title: "Paper Airplane Launcher",
        image: "/assets/airplane.jpg",
        link: "https://www.instructables.com/Paper-Airplane-Launcher-3/",
        isExternal: true,
    },
    {
        title: "Kegel",
        image: "/assets/kegel.png",
        link: "https://github.com/Grapefruit-INC",
        isExternal: true,
    },
    {
        title: "Coding Projects",
        image: "/assets/coding.png",
        link: "https://github.com/Newtoniano20",
        isExternal: true,
    },
    {
        title: "Mentored Projects",
        image: "/assets/Tech24.jpeg",
        link: "/mentored", // This will need a page
        isExternal: false,
    },
    {
        title: "TechProjects",
        image: "/assets/TechProjects.jpeg",
        link: "https://github.com/TechProjects-BCN",
        isExternal: true,
    },
    {
        title: "Other Projects",
        image: "/assets/other.jpg",
        link: "https://www.instructables.com/member/Newtoniano/instructables/",
        isExternal: true,
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">
                    Projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-colors"
                        >
                            <Link href={project.link} target={project.isExternal ? "_blank" : undefined} rel={project.isExternal ? "noopener noreferrer" : undefined} className="block h-full">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ExternalLink className="text-white w-8 h-8" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors text-center">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
