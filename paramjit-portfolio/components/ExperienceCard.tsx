import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-cardDark rounded-3xl p-8 md:p-12 min-h-[350px] flex flex-col items-start justify-between border border-zinc-800/50 hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-bl-full opacity-20"></div>

        <div className="w-full flex justify-between items-start flex-wrap gap-4">
            <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                    {experience.company}
                </h3>
                <h4 className="text-xl md:text-2xl text-zinc-400">
                    {experience.role}
                </h4>
            </div>
            <span className="px-4 py-1 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-400">
                {experience.period}
            </span>
        </div>

        <div className="mt-8 max-w-2xl">
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                {experience.description}
            </p>
        </div>
    </div>
  );
};

export default ExperienceCard;