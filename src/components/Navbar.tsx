"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/mentored", label: "Mentored" },
    { href: "/timeline", label: "Timeline" },
    { href: "/renders", label: "Renders" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://www.instagram.com/joel_garcia.20", icon: Instagram },
    { href: "https://github.com/Newtoniano20", icon: Github },
    { href: "https://twitter.com/Newtoniano20", icon: Twitter },
    { href: "https://www.youtube.com/channel/UCScuvGgrvL9c0wZp_XKJFAg", icon: Youtube },
    { href: "https://www.linkedin.com/in/joelgarma/", icon: Linkedin },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold font-heading text-white">
                            Joel Garcia
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-accent transition-colors"
                            >
                                <item.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex space-x-4 px-3 py-2 mt-4 border-t border-white/10 pt-4">
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent"
                                >
                                    <item.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
