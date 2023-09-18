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
                <li> Butte College </li>
                <li> Coastal Carolina Community College </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li> Software Engineering Certificate | Hack Reactor </li>
                <li> Associate Degree | Mathematics </li>
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
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                src='/images/portrait.png'
                alt='portrait'
                width={275}
                height={275}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full bg-[#121212] bg-opacity-75'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg text-justify'>
                    Greetings! I am Chong Vang, an enthusiastic and driven software engineer and web developer with an unwavering passion for technology.
                    Since my earliest encounters with this ever-evolving industry, I have been captivated by its potential to transform our world for the better.
                    <br></br>
                    As a developer, my motivation stems from the prospect of tackling real-world challenges as a software engineer. I thrive on the
                    complexity of translating intricate concepts into elegant, functional, and efficient solutions. Whether it is constructing interactive websites,
                    optimizing user journeys, or engineering streamlined algorithms, I eagerly embrace new projects and relish the learning process they offer.
                    <br></br>
                    Collaboration and teamwork lie at the heart of my approach to development. I firmly believe that open communication and cooperative efforts are the
                    keys to crafting superior products. I relish the opportunity to work alongside diverse teams, exchange knowledge, and draw insights from others to
                    further refine my skills.
                    <br></br>
                    Thank you for visiting my portfolio and getting to know me better. I am looking forward to connecting with fellow developers, learning from experienced professionals,
                    and contributing my skills to exciting projects. If you are interested in collaborating or have any questions, please feel free to reach out through Linkedin.
                    Lets create something amazing together!
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