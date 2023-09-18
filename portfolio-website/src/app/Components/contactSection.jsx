import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my12 py-24 gap-4' id="contact">
        <div>
            <h5 className='text-2xl font-bold text-white my-2'>Let's Connect!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {""}
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, I'll try my best to get back at you.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://gitlab.com/Chong.Vang'>
                    <Image
                        src='/images/gitlab.png'
                        alt='GitLab Icon'
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href='https://www.linkedin.com/in/chong-vang10/'>
                    <Image
                        src='/images/linkedin.png'
                        alt='Linkedin Icon'
                        width={100}
                        height={100}
                    />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSection