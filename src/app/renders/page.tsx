"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Renders() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">
                    Renders & Videos
                </h1>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold font-heading mb-8 text-accent">Videos</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href="https://youtu.be/XLROUK0uK-c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-video rounded-xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/assets/paralelo.jpg"
                                alt="Paralelogramos Teaser"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white translate-x-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-xl font-bold">Paralelogramos Teaser</h3>
                            </div>
                        </Link>

                        <Link
                            href="https://youtu.be/POpNTBQw1mY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-video rounded-xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/assets/Car.jpg"
                                alt="Turbo Showcase Animation"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white translate-x-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-xl font-bold">Turbo Showcase Animation</h3>
                            </div>
                        </Link>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-8 text-accent">My Renders</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hill Castle",
                                image: "/Renders/trees.progress.png",
                                link: "https://github.com/Newtoniano20/Blender/tree/main/Hill%20Castle",
                            },
                            {
                                title: "Home",
                                image: "/Renders/house.png",
                                link: "https://github.com/Newtoniano20/Blender/tree/main/Home",
                            },
                            {
                                title: "Blender Tutorial Series",
                                image: "/Renders/donut.png",
                                link: "https://github.com/Newtoniano20/Blender/tree/main/Blender%20Tutorial%20Series",
                            },
                        ].map((render, idx) => (
                            <Link
                                key={idx}
                                href={render.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={render.image}
                                    alt={render.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-lg font-bold">{render.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
