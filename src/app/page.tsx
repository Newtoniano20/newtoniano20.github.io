"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl shadow-accent/20">
          <Image
            src="/assets/MIT.JPEG"
            alt="Joel Garcia"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Joel Garcia
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Aerospace Undegraduate Student at UPC, MIT Edgerton BCN Senior Mentor, Team Captain of UPC's GRASS Rover and Intern at SEAT S.A.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/projects"
            className="group px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium transition-all flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-surface hover:bg-surface/80 text-white border border-white/10 font-medium transition-all"
          >
            Contact Me
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1iIxqykF8BoyU-1dXKXqU7OilTzgklzXo?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-surface hover:bg-surface/80 text-white border border-white/10 font-medium transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Resume / CV
          </a>
        </div>

        <div className="flex justify-center gap-6 text-muted-foreground">
          <a
            href="https://github.com/Newtoniano20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/joelgarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
