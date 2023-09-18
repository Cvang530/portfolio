'use client';
import React, {useState, useRef } from 'react';
import ProjectCard from './projectCard';
import { motion, useInView } from 'framer-motion';


const projectData = [
  {
    id: 1,
    title: "Groove Genius",
    description:
      "Scope: Created a user-friendly web application that caters to the diverse musical preferences of the public." +
      " Innovation will empower users by generating personalized playlists tailored to their specific musical tastes." +
      " To access this unique service, each user must complete a quick and secure sign-in process, which will grant them exclusive access to their own profile," +
      " where their saved information and preferences are stored. Unfortunately, the project is not launched but the source code is linked.",
    image: '/images/projects/project1.png',
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.com/JDCT1/groove-genius",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Car Sales & Services",
    description:
      "Scope: A personalized web application has been developed to empower users with the ability to efficiently manage and organize inventory, personnel, and services related to vehicles across a variety of interactive forms " +
      " The core strength of this web application lies in its use of microservices, each dedicated to specific functions within the vehicle management system. These microservices work together to deliver a cohesive and efficient user experience." +
      " By interacting with these microservices through the application's forms, users gain a clear understanding of how various components within a complex system can collaborate to streamline their workflow." +
      " While the web application is not currently intended for public release, it represents a powerful demonstration of integrating microservices into web development projects.",
    image: '/images/projects/project2.jpg',
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.com/Chong.Vang/project-beta",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Scrumptious",
    description:
      "Scope: This personalized web application has been designed with a singular purpose in mind: to provide users with a practical platform for creating " +
      " and deleting recipe information. Its primary function revolves around serving as a dedicated template for honing and mastering the art of CSS (Cascading Style Sheets)." +
      " It's important to note that this web application is not intended for public consumption; rather, its sole focus is to facilitate CSS experimentation and learning",
    image: '/images/projects/project3.jpg',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
]

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="project">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10'>
        My Projects
      </h2>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.4 }}
            >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection