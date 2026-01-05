"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
    {
        year: "2025",
        title: "HoPE + INFN + University of Ferrara 1st Hackathon",
        desc: "Traveled to Ferrara, Italy to help organize a hackathon at the University of Ferrara, in collaboration with INFN, MIT Edgerton Center and HoPE. Mentored several groups and taught STEAM to high school students.",
        image: "/timeline_images/HoPE_Hack.JPEG",
    },
    {
        year: "2025",
        title: "MIT&CIC&UPC Hackathon 2025",
        desc: "Helped organize and mentor the 2025 Hackathon organized by the MIT Edgerton Center, Fundació CIC and UPC. This event brought together 120 students from 11 schools.",
        image: "/timeline_images/HACK25.jpg",
    },
    {
        year: "2024",
        title: "European Rover Challenge 2024",
        desc: "Competed in the European Rover Challenge with UPC Space Program GRASS as the Head of Control. Despite complications, we pushed through challenges.",
        image: "/assets/ERC24.jpeg",
    },
    {
        year: "2024",
        title: "MIT Engineering Design Workshop 2024",
        desc: "Mentored at the MIT Edgerton Center EDW 2024. Spent most time with 'Furrari', a group controlling a car with a cat's movements.",
        image: "/timeline_images/FURRARI.JPEG",
    },
    {
        year: "2024",
        title: "UPC Teachers Hackathon 2024",
        desc: "Hosted a hackathon for teachers to introduce them to hands-on education, where they got to build their own projects.",
        image: "/timeline_images/teach24.JPEG",
    },
    {
        year: "2024",
        title: "CIC Batxillerats TechProjects 2024",
        desc: "Taught 'TechProjects' to 12th graders, guiding them through the engineering process to build their own projects like a Sensorial Cabin.",
        image: "/assets/Tech24.jpeg",
    },
    {
        year: "2024",
        title: "Barcelona STEAM Conference Workshop",
        desc: "Organized a workshop for Teachers with the Edgerton Center to introduce them to hackathons and maker communities.",
        image: "/assets/steam.jpeg",
    },
    {
        year: "2024",
        title: "Hackathon MIT&CIC 2024",
        desc: "Mentored for the third year in a row at the MIT&CIC Hackathon. Students developed projects like an ATV, Wind Tunnel, and Ultrasonic Levitator.",
        image: "/assets/hack24.JPEG",
    },
    {
        year: "2023",
        title: "Week of Engineering Competition Activity",
        desc: "Organized an activity about the robotic arm of our rover at GRASS as part of BESTUPC's competition.",
        image: "/assets/WEC23.jpeg",
    },
    {
        year: "2023",
        title: "GRASS Promotion to Head of Control",
        desc: "Promoted to Head of the Control Department, building infrastructure to operate the rover autonomously and remotely.",
        image: "/assets/promotion.JPG",
    },
    {
        year: "2023",
        title: "HackKnights AI Challenge 2023",
        desc: "Mentored students developing an AI tool to predict heart attacks. Created the initial AI presentation for the event.",
        image: "/assets/mexico.png",
    },
    {
        year: "2023",
        title: "European Rover Challenge 2023",
        desc: "Competed in Poland at the European Rover Challenge 2023 with the GRASS Rover team.",
        image: "/assets/ERC23.jpeg",
    },
    {
        year: "2023",
        title: "Harvard's CS50AI",
        desc: "Completed Harvard's CS50AI course, exploring modern AI algorithms, machine learning, and neural networks.",
        image: "/timeline_images/CS50AI.png",
    },
    {
        year: "2023",
        title: "CESIRE Hackathon For Teachers",
        desc: "Invited to participate in a Hackathon for teachers in FAIG, an initiative to bring maker spaces into classrooms.",
        image: "/timeline_images/CESIRE.png",
    },
    {
        year: "2023",
        title: "Founding of Grapefruit",
        desc: "Co-founded a game dev group to build 'Kegel' in Unity. Worked on AI and game logic.",
        image: "/timeline_images/kegel.png",
    },
    {
        year: "2023",
        title: "Hackathon MIT&CIC 2023",
        desc: "Mentored projects including a Light Saber and a rehabilitation glove.",
        image: "/timeline_images/2023_H.jpg",
    },
    {
        year: "2022",
        title: "Harvard's CS50",
        desc: "Completed Harvard's CS50 course, gaining a solid foundation in computer science.",
        image: "/timeline_images/CS50.png",
    },
    {
        year: "2022",
        title: "Joining GRASS Rover Club",
        desc: "Accepted into the GRASS Rover Student Club at UPC, joining the Coding Department.",
        image: "/assets/GRASS1.jpg",
    },
    {
        year: "2022",
        title: "MIT Engineering Design Workshop 2022",
        desc: "Participated as a student in the month-long EDW at MIT, building a 'Foot Piano' in an international team.",
        image: "/assets/piano2.png",
    },
    {
        year: "2022",
        title: "Shaking Hands Overseas Demo",
        desc: "Successfully demonstrated our robotic hand project by controlling it from the other side of the world via a glove built by LucasVR.",
        image: "/timeline_images/Demo.png",
    },
    {
        year: "2022",
        title: "Hackathon MIT&CIC 2022",
        desc: "First time participating as a mentor, guiding students in their projects.",
        image: "/timeline_images/2022_h.jpg",
    },
    {
        year: "2021",
        title: "Engineering Design Workshop 2021",
        desc: "Built the third prototype of 'Shaking Hands Overseas' to move a robotic hand remotely.",
        image: "/timeline_images/2021_EDW.jpeg",
    },
    {
        year: "2021",
        title: "Hackathon MIT&CIC 2021",
        desc: "Started 'Shaking Hands Overseas' project during this hackathon.",
        image: "/timeline_images/2021_H.jpg",
    },
    {
        year: "2020",
        title: "Hackathon MIT&CIC 2020",
        desc: "Built and tested a ROV (Remote Operated Vehicle) with guidance from MIT mentors.",
        image: "/timeline_images/2020.jpg",
    },
    {
        year: "2019",
        title: "Hackathon MIT&CIC 2019",
        desc: "First engineering experience with the Edgerton Center, solving puzzles and challenges.",
        // No image in source
    },
];

export default function Timeline() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-12 text-center">
                    Timeline
                </h1>

                <div className="relative border-l border-white/20 ml-4 md:ml-12 space-y-12 pl-8 md:pl-16 pb-12">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative">
                            {/* Dot */}
                            <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 rounded-full bg-accent border-4 border-background" />

                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-surface p-6 rounded-xl border border-white/10 flex-1 w-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <span className="text-accent font-mono font-bold">{item.year}</span>
                                    </div>
                                    {item.image && (
                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-white/5">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
