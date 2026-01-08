import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { PROFILE, SOCIAL_LINKS } from "../constants";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-flip logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused) {
      interval = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, 5000); // Swaps every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Initial enter animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleManualFlip = () => {
    setIsFlipped(!isFlipped);
    // Optionally pause when user interacts manually to prevent jarring auto-flip right after
    setIsPaused(true);
  };

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-12 md:pt-32 md:pb-20 px-6 max-w-7xl mx-auto font-mono flex flex-col items-center justify-center"
    >
      {/* 3D Flip Container */}
      <div className="relative group perspective-[1000px] w-full max-w-[80%] h-[500px]  hero-card">
        {/* Inner Card Wrapper with Preserve 3D */}
        <div
          onClick={handleManualFlip}
          className={`w-full h-full relative transition-transform duration-700 ease-in-out cursor-pointer [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT FACE: Profile Info */}
          <div className="absolute inset-0 w-full h-full bg-cardDark rounded-3xl border border-zinc-800 p-8 flex flex-col  items-center justify-center text-center shadow-2xl [backface-visibility:hidden]">
            <div className="first-up  w-[80%] flex gap-6">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-md transform scale-105"></div>
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="relative w-40 h-40 rounded-full object-cover grayscale contrast-125 border-4 border-zinc-800"
                />
              </div>
              <div className="details  flex flex-col justify-start items-start">
                <h1 className="text-3xl font-bold text-white tracking-tighter mb-2">
                  {PROFILE.name}
                </h1>
                <p className="text-lg text-accent mb-6 font-bold">
                  {PROFILE.role}
                </p>

                <div className="space-y-3 flex flex-col items-start w-full">
                  <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{PROFILE.location}</span>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-500 hover:text-white transition-colors text-sm border-b border-zinc-800 pb-1 hover:border-white"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs text-zinc-600 uppercase tracking-widest">
              Click to see socials
            </div>
          </div>

          {/* BACK FACE: Social Media */}
          <div className="absolute inset-0 w-full h-full bg-white text-bgDark rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <h2 className="text-3xl font-bold mb-10 tracking-tighter">
              Connect
            </h2>

            <div className="flex flex-col gap-6 w-full max-w-xs">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center justify-between p-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  <span className="font-bold">{link.platform}</span>
                  <svg
                    className="w-6 h-6 fill-current text-zinc-800 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                  >
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-12 text-xs text-zinc-400 uppercase tracking-widest">
              Click to return
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            isPaused
              ? "border-red-500 text-red-500 bg-red-500/10"
              : "border-green-500 text-green-500 bg-green-500/10"
          }`}
        >
          {isPaused ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Auto-flip Paused</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Auto-flipping</span>
            </>
          )}
        </button>
        <button
          onClick={handleManualFlip}
          className="hover:text-white transition-colors"
        >
          Flip Manually
        </button>
      </div>
    </section>
  );
};

export default Hero;
