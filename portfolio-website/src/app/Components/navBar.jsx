'use client';
import React, { useState } from 'react';
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './menuOverlay';
import { Link } from 'react-scroll';
import NavLink from './navLink';
import Image from 'next/image';

const Navbar = () => {
    const [ navBarOpen, setNavBarOpen ] = useState(false);

    const NavLinks = [
        {
            title: 'About',
            path: '#about',
        },
    ]

    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-5 py-2'>
            <Image
                    src="/images/Flag.jpg"
                    alt="flag"
                    className='items-left absolute-left'
                    width={90}
                    height={50}
            />
                <Link to="landing-page"
                    spy={true} smooth={true} offset={-150} duration={500}
                    className='text-2xl md:text-5xl text-white font-semibold'>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (
                            <button
                            onClick={() => setNavBarOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border'>
                                <Bars3Icon className='h-5 w-5'></Bars3Icon>
                            </button>
                        ) : (
                            <button
                            onClick={() => setNavBarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border'>
                                <XmarkIcon className='h-5 w-5'></XmarkIcon>
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        <NavLink />
                    </ul>
                </div>
            </div>
            {navBarOpen ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
  )
}

export default Navbar;