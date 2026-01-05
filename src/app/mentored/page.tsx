"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectSection {
    title: string;
    description?: string;
    items: {
        title: string;
        description: string;
        image?: string;
    }[];
}

const sections: ProjectSection[] = [
    {
        title: "MIT Edgerton Center EDW 2024",
        items: [
            {
                title: "Furrari",
                description: "The Furrari group built a car that was controlled by a Cat! I was one of the main mentors for this team, together with Christy, and so I spent most of my time with them! The car is controlled by an ESP32 which talks via wifi with another ESP32, which was either the controller or a harness that the cat was wearing which had an IMU and reported the angle the cat was facing to the first ESP (the one on the Car itself). With both the angle the cat was facing and the car's angle, the car would steer towards whatever the cat 'wanted'. The body of the car was made using foam and sculpting it with a hot wire until it resembled a Ferrari, so it was hand-made!",
                image: "/assets/FURRARI.JPEG",
            },
            {
                title: "Katawawa",
                description: "This project consisted of a basketball launcher situated underneath the hoop that aimed at you when returning the ball! It was built by two students, one from Spain and another from Mexico and the final result was very powerful, with motors spinning at thousands of RPM.",
                image: "/assets/KATAWAWA.jpg",
            },
            {
                title: "Waforte",
                description: "Waforte was a musical fountain that changed the colors of the fountain's LEDs depending on what music was playing at the time. It also had control over the water pumps and so how much water was pushed out also depended on the music. Their project consisted of two parts, one which had three plates with LEDs at the bottom and which changed color with the loudness of the music, together with the flow of water at the main nozzle at the top. The other part had several nozzles in a line that had an LED inside of each, where each LED represented a frequency, so the resulting effect was like a spectrogram.",
                image: "/assets/WAFORTE.jpg",
            },
            {
                title: "MACA",
                description: "MACA, Short for Macarena, was a dancing robot that would teach you how to dance. It was built using Microbit and had several dances coded in. The main challenge of this robot was the crazy amount of degrees of freedom and servos it required, as not only could it move its arms, but also its hips and legs, creating lots of problems as sometimes it would hit another limb by mistake.",
                image: "/assets/MACA.jpg",
            },
        ],
    },
    {
        title: "2024 CIC TechProjects",
        items: [
            {
                title: "Sensorial Cabin Inside Out",
                description: "This project consisted on the building of a large cabin that could create certain emotions upon entering inside. The students' description of it is: 'The product will consist of stimuli for the senses of touch, hearing, sight, and smell, which will change according to the character from the movie.' This idea comes from the film Inside Out, where each character is based on a different emotion and from that this project wants people to be able to feel these emotions.",
                image: "/assets/Tech24.jpeg",
            },
            {
                title: "Laser Harp",
                description: "The Laser Harp is a musical instrument built with lasers and photoresistors, so when someone crosses the laser, a sound is produced as if it were a Harp. The main goal of this project was not only to build this cool instrument, but also have 32 lasers, which is around double what people had done before. This created some very hard challenges to overcome, but this team pushed through and were able to build an awesome harp.",
                image: "/assets/LaserHarp24.jpg",
            },
            {
                title: "Camera Car",
                description: "The goal of this project was to build a car that could be controlled remotely and which had a camera that could be viewed and moved with a VR set. This was a very challenging project and so required lots of digging and coding.",
                image: "/assets/Camera24.png",
            },
            {
                title: "Anti-Robbery System",
                description: "This project aimed to build an Anti-Robbery System for a cage, where by approaching it, it would flood with water coming from two bottles. This project's main challenge was waterproofing and making sure water would not leak into the electronics, but the team prototyped several ideas and finally decided to use bottles as storage and the cap as a trigger.",
                image: "/assets/Robb24.png",
            },
        ],
    },
    {
        title: "2024 MIT&CIC Hackathon",
        items: [
            { title: "Musical Glove", description: "The aim of this project was to build a glove which could play music. They built a glove with buttons at the fingertips where each played a specific note.", image: "/assets/GLOVE24.png" },
            { title: "Scalextric", description: "The name of this project is quite self-explanatory, they wanted to build a race track where cars would be powered by the track itself.", image: "/assets/SCC24.JPEG" },
            { title: "Arcade Game", description: "In this project, students wanted to build an Arcade Game where you want to click when the middle LED was illuminated.", image: "/assets/Arcade24.png" },
            { title: "Wind Tunnel", description: "Together with a fog machine, this team created a working wind tunnel.", image: "/assets/WIND24.JPEG" },
            { title: "ROV", description: "The aim of this project was to build a remote operated vehicle that could sense if it has a wall in front and stop.", image: "/assets/Car24.JPEG" },
            { title: "Accustic Levitator", description: "This project consisted on building a chamber where some foam could levitate because of some ultrasonic waves being generated below.", image: "/assets/LEV24.JPEG" },
            { title: "ATV", description: "This project was about building a vehicle that could be operated remotely and could move both on water and on ground.", image: "/assets/ROV24.png" },
            { title: "Ball Thrower", description: "This project was about building an automatic ball thrower.", image: "/assets/Tennis24.png" },
        ],
    },
    {
        title: "2023 MIT&CIC Hackathon",
        items: [
            {
                title: "Light Saber",
                description: "During the 2023 Hackathon, I heard about a group of high schoolers who wanted to build a light saber. I mentored them on soldering, coding, and building. After two intense days, they built a working prototype with animations.",
                image: "/assets/LightSaber.jpg",
            },
        ],
    },
    {
        title: "2023 CIC TechProjects",
        items: [
            {
                title: "LED Ball",
                description: "They planned on building a ball with touch sensors, an Accelerometer and Gyroscope, and LED Strips. We solved issues like powering a small device wirelessly and fitting sensors.",
            },
            {
                title: "Vinyl / Record Player",
                description: "Repaired and rebuilt an old broken Record player to change speed.",
            },
            {
                title: "Electric Scooter",
                description: "Building an electric scooter from scratch. Mentored them on the building process.",
            },
        ],
    },
];

export default function Mentored() {
    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center">
                    Mentored Projects
                </h1>
                <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                    Over the past three years, I've mentored several projects, helping students bring their ideas to life.
                </p>

                <div className="space-y-20">
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-bold font-heading mb-8 text-accent border-b border-white/10 pb-4">
                                {section.title}
                            </h2>
                            <div className="space-y-12">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex flex-col md:flex-row gap-8 items-start">
                                        {item.image && (
                                            <div className="w-full md:w-1/3 relative aspect-video rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
