'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './tabButton';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>Docker</li>
                <li>Django</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li> Hack Reactor | Software Engineering Immersive Program </li>
                <li> California State University | Sacramento </li>
                <li> Coastal Carolina Community College </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li> Hack Reactor </li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [ tab, setTab ] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                src='/images/portrait.jpg'
                alt='portrait'
                width={275}
                height={275}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full bg-[#121212] bg-opacity-75'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg text-justify'>
                    Hello! I'm Chong Vang, a passionate and motivated beginner software engineer and web developer. I have always been fascinated by the ever-evolving world of technology,
                    and I am excited to embark on a journey to create innovative and user-friendly solutions that make a positive impact on people's lives.
                    <br></br>
                    My journey in the world of software development began with a strong curiosity and a desire to learn. I have a solid foundation in programming languages like HTML, CSS, and JavaScript,
                    which I have used to build responsive and visually appealing web applications. I'm constantly expanding my skill set and exploring new technologies to stay up-to-date
                    with industry trends.
                    <br></br>
                    What drives me as a developer is the opportunity to solve real-world problems through code. I love the challenge of turning complex ideas into elegant,
                    functional, and efficient solutions. Whether it's building interactive websites, optimizing user experiences, or creating efficient algorithms,
                    I am always eager to take on new projects and learn from the process.
                    <br></br>
                    Collaboration and teamwork are at the core of my approach. I believe in the power of open
                    communication and collaboration to create superior products. I'm always excited to work with diverse teams, share knowledge, and learn from others to enhance my
                    skills further.
                    <br></br>
                    Outside of coding, I enjoy staying active, reading about tech trends, and attending hackathons and coding meetups. I'm a firm believer in the importance
                    of continuous learning and self-improvement, and I'm excited about the endless possibilities the tech world has to offer.
                    <br></br>
                    Thank you for visiting my portfolio and getting to know me better. I'm looking forward to connecting with fellow developers, learning from experienced professionals,
                    and contributing my skills to exciting projects. If you're interested in collaborating or have any questions, please feel free to reach out.
                    Let's create something amazing together!
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {""}
                        Skills{""}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {""}
                        Education{""}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {""}
                        Certifications{""}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;