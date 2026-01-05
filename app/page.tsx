"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OrbitItem from "@/components/OrbitItem";
import ProfileCenter from "@/components/ProfileCenter";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const router = useRouter();
  const [scale, setScale] = useState(0.85);

  // Dynamic scaling to match Figma fit without scrolling
  useEffect(() => {
    const handleResize = () => {
      // Base dimensions approx 1000x900 for the orbit system
      const availableWidth = window.innerWidth;
      const availableHeight = window.innerHeight;

      // Calculate scale to fit with some padding
      // We want to fit ~900px width and ~800px height safely
      const scaleX = Math.min(availableWidth / 1000, 1);
      const scaleY = Math.min(availableHeight / 900, 1);

      // Use the smaller scale to ensure fit in both dimensions
      // Cap at 0.9 to avoid becoming too huge on massive screens
      // Floor at 0.3 to ensure it doesn't disappear on tiny watches
      const newScale = Math.max(0.3, Math.min(scaleX, scaleY, 0.9));

      setScale(newScale);
    };

    // Initial calc
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Sidebar onSelect={handleNavigate} />

      {/* Background container for the orbit system - Dynamic scaling */}
      <div
        className="relative flex items-center justify-center transition-transform duration-100 ease-out"
        style={{ transform: `scale(${scale})` }}
      >

        {/* Center Profile - Static flow, establishes center */}
        <div className="relative z-10">
          <ProfileCenter />
        </div>

        {/* Orbit Items Wrapper - 0x0 size at center */}
        {/* Each item is absolute positioned relative to this center point */}

        {/* Top: Aerospace - Rocket Emoji */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(-175px, -303px)' }}>
          <div onClick={() => handleNavigate('aerospace')}>
            <OrbitItem
              emoji="🚀"
              label={<>Aerospace<br />Engineering</>}
              color="#8b5cf6"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Top Right: GRASS */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(175px, -303px)' }}>
          <div onClick={() => handleNavigate('grass')}>
            <OrbitItem
              icon="/assets/grass.png"
              label="GRASS"
              color="#ef4444"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Professional Life */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(350px, 0px)' }}>
          <div onClick={() => handleNavigate('professional')}>
            <OrbitItem
              icon="/assets/professional.svg"
              label={<>Professional<br />Life</>}
              color="#4f46e5"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Right: Personal Life */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(175px, 303px)' }}>
          <div onClick={() => handleNavigate('personal')}>
            <OrbitItem
              icon="/assets/personal.svg"
              label={<>Personal<br />Life</>}
              color="#ec4899"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom: Other - Fixed double # issue */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(-175px, 303px)' }}>
          <div onClick={() => handleNavigate('other')}>
            <OrbitItem
              icon="/assets/other.svg"
              label="Other"
              color="#10b981"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Left: MIT Edgerton Center */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: 'translate(-350px, 0px)' }}>
          <div onClick={() => handleNavigate('mit')}>
            <OrbitItem
              icon="/assets/mit.svg"
              label={<>MIT Edgerton<br />Center</>}
              color="#f59e0b"
              className="cursor-pointer"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
