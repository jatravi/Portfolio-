import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a developer who enjoys turning ideas into practical, working products. My interests span full-stack development, AI-powered applications, backend systems, and automation, and I enjoy learning new technologies by building real projects.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Through projects ranging from AI applications and intelligent systems to backend pipelines and full-stack platforms, I've worked with technologies like Python, React, Node.js, FastAPI, PostgreSQL, MongoDB, Docker, Flutter, and modern AI APIs. I'm particularly interested in understanding how different parts of a system come together from the user interface to backend services, databases, and AI integrations.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy sharing insights on Twitter, engaging with Indie Hackers, and following the journey of early-stage startups. Feel free to follow me on Twitter or check out my projects on GitHub.
        </p>
      </motion.div>
    </div>
  );
}
