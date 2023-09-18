"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const HeaderSection = () => {
    return (
    <section className="lg:py-16" id="landing-page">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className='text-white mb-4 text4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-700 to-pink-700">
                        Welcome!{""}
                    </span>
                    <br></br>
                    <TypeAnimation
                sequence={[
                    'My Name is Chong Vang',
                    1000,
                    'Software Engineer',
                    1000,
                    'Web Developer',
                    1000,
                ]}
                wrapper='span'
                speed={33}
                repeat={Infinity}
                />
                </h1>
                <p className="text-[#ADB7BE] text-lg sm:text-lg mb-6 lg:text-xl">
                USMC Veteran and Real Estate Entrepreneur actively seeking new opportunities to expand my presence in the real estate industry.
                Currently, I am managing a small-scale rental unit, which has deepened my understanding of property management and the real estate market.
                </p>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src='/images/intropic.png'
                        alt='intro pic'
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </motion.div>
    </section>
    )
}

export default HeaderSection;