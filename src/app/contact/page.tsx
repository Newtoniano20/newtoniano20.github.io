"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Terminal } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">
                    About & Contact
                </h1>

                <div className="grid md:grid-cols-[2fr,1fr] gap-12">
                    {/* About Section */}
                    <div className="space-y-8">
                        <section className="bg-surface/50 p-8 rounded-2xl border border-white/5">
                            <h2 className="text-2xl font-bold font-heading mb-4 text-accent flex items-center gap-2">
                                <Terminal className="w-6 h-6" />
                                Who Am I?
                            </h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    I'm a Junior in Aerospace Engineering from Spain who is interested in physics, computer science, aerodynamics, and mathematics.
                                </p>
                                <p>
                                    I am studying aerospace engineering because I love bringing to life new inventions and combining electronics, physics, and coding together to create something new, and I am fascinated by rockets and airplanes.
                                </p>
                                <p>
                                    I am also working with MIT Edgerton Center as a member of the Edventures Program and International Outreach to host engineering design workshops around the world. I've been part of the MIT Edgerton Center EDW during the summer of 2021 (Online), 2022 (as a Student), and 2024 (as a Mentor).
                                </p>
                                <p>
                                    I've been coding for 7 years now, with experience in Python, Arduino/C/C++, Docker, Ansible, Next.js, Tailwind CSS, and others. Furthermore, I have been designing and 3D printing for 3+ years and I've been part of multiple projects both working on them and as a Mentor.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <div className="bg-surface p-6 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <a
                                    href="mailto:joel.garcia1202@hotmail.com"
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="font-medium">joel.garcia1202@hotmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Discord</p>
                                        <p className="font-medium">Newtoniano#1173</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
