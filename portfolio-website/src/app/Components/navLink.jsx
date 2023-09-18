import { Link } from 'react-scroll';

const NavLink = () => {
    return (
        <>
            <div className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            </div>
            <div className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                <Link to="project" spy={true} smooth={true} offset={-200} duration={500}>Projects</Link>
            </div>
            <div className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                <Link to="contact" spy={true} smooth={true} offset={100} duration={500}>Contact</Link>
            </div>
        </>
    )
};

export default NavLink;