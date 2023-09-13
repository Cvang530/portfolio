import React from 'react'
import ProjectCard from './projectCard'


const projectData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project1 description",
    image: '/images/projects/project1.jpg',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project2 description",
    image: '/images/projects/project2.jpg',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project3 description",
    image: '/images/projects/project3.jpg',
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
]

const ProjectSection = () => {
  return (
    <>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
      My Projects
    </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      ))}
    </div>
    </>
  )
}

export default ProjectSection