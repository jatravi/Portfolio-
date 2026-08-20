import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "EquityScout",
    description:
      "An AI-powered deep research and investment analysis platform that researches equities and transforms complex financial information into structured, cited insights for smarter investment analysis.",
    image: "/assets/project.png",
    link: "https://github.com/jatravi/equityscout",
  },
  {
    id: 2,
    title: "GeM Tender Discovery Pipeline",
    description:
      "An automated backend pipeline for discovering and processing GeM tenders through keyword filtering, document downloading, text extraction, duplicate detection, and AI-powered structured data extraction.",
    image: "/assets/project2.png",
    link: "https://github.com/jatravi/gem_pipeline",
  },
  {
    id: 3,
    title: "AI Resume Builder",
    description:
      "A full-stack MERN application that helps users create and manage resumes with dynamic templates, authentication, and AI-powered content generation using the Google Gemini API.",
    image: "/assets/project3.png",
    link: "https://github.com/jatravi",
  },
  {
    id: 4,
    title: "AI Voice Fraud Detection",
    description:
      "An AI-powered voice classification system designed to detect AI-generated and human voices, providing confidence scores and explainable results through a scalable FastAPI backend.",
    image: "/assets/project4.png",
    link: "https://github.com/jatravi/ai_voice_detector",
  },
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
