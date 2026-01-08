import { Project, Experience, SocialLink, Certification } from './types';

export const PROFILE = {
  name: "Paramjit Saikia",
  role: "Full stack web developer",
  location: "Guwahati, Assam",
  email: "prmjtsaikia@gmail.com",
  description: "I'm Paramjit Saikia, a Full Stack Developer passionate about turning innovative ideas into impactful digital experiences. My work blends creativity with technical precision — transforming complex challenges into elegant, functional, and scalable web solutions.",
  subDescription: "I specialize in React, Node.js, Express, and MongoDB, with a growing interest in modern frameworks and emerging web technologies. I believe great development is not just about writing code — it's about crafting meaningful user experiences.",
  avatar: "./profile.png" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  }
];

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS", "GSAP", "Docker", "AWS"
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    link: "#"
  },
  {
    id: 2,
    title: "Meta Frontend Developer Professional",
    issuer: "Coursera",
    date: "Aug 2022",
    link: "#"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Jan 2021",
    link: "#"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "DevTrack",
    description: "DevTrack is a developer-focused learning and productivity platform that provides structured roadmaps, progress tracking, and AI-powered guidance. It helps developers stay organized, explore technologies, and grow their skills with a clean and efficient user experience.",
    image: "./devtrackimg.png"
  },
  {
    id: 2,
    title: "Banking-Platform",
    description: "A secure all-in-one banking web application built with Node.js, Express, MongoDB, and Firebase that enables users to manage accounts, transfer funds, and track transactions. Features include authentication, real-time balance updates, and a user-friendly dashboard.",
    image: "./bankingplatformimg.png"
  },
  {
    id: 3,
    title: "CoworkAssam",
    description: "A collaborative platform designed to help teams in Assam manage projects, communication, and tasks efficiently. Built with React, TailwindCSS, Node.js, Express, and MongoDB, it supports real-time collaboration and scalability.",
    image: "./coworkassam.png"
  },
  {
    id: 4,
    title: "ExamEase",
    description: "A web platform that helps teachers create MCQ/MSQ question papers with customizable templates, automated evaluation, and secure student access. Features include timed exams, unique access codes, and instant result delivery to teachers via email.",
    image: "./examease.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading the frontend team in building scalable React applications."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    description: "Developed end-to-end features using MERN stack."
  },
  {
    id: 3,
    role: "Web Intern",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Assisted in UI implementation and bug fixing."
  }
];