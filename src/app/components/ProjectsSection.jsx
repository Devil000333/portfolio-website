"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"; 
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Plagiarism Checker",
    description: "Developed plagiarism checker using Google Search Query, Beautiful Soup and Levenshtein's Distance Algorithm while achieving 85% accuracy for upto 10k words. Presented and Published research paper in ICAISC 2023 Conference, Jeddah, Saudi Arabia.",
    image: "/images/projects/TANX.png",
    tag: ["All", "Web"], 
    gitUrl: "/", 
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ReTNAP",
    description: "ReTNAP is an ideal solution developed in Smart India Hackathon 2022, with Android Studio for processing & visualization of GNSS data using L5 Signals in real-time application.",
    image: "/images/projects/ReTNAP.png",
    tag: ["All", "Mobile"], 
    gitUrl: "/", 
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MITRA",
    description: "A pivotal project MITRA (Mentally Illuminating and Technically Resilient Application), an integrated chatbot leveraging DialogGPT and Text-Davinci03 OpenAI API. Incorporated features of MITRA are aimed to offer emotional and educative interactions for improved mental health.",
    image: "/images/projects/MITRA.png",
    tag: ["All", "Web"], 
    gitUrl: "/", 
    previewUrl: "/",
  },
];

const ProjectsSection = () => { 
    const [tag, setTag] = useState("All"); 
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); 

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }; 

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    ); 

    const cardVariants = {
      initial: { y: 50, opacity:0 },
      animate: { y: 0, opacity:1 },

    };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2> 
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
            onClick={handleTagChange} 
            name="All" 


            isSelected={tag == "All"} 
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag == "Web"} 
        /> 
        <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag == "Mobile"} 
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => ( 
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"}
          transition={{duration: 0.5, delay: index * 0.4 }}
          >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
