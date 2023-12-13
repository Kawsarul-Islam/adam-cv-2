import { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/images/navlogo.png';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close menu after clicking on a link
        }
    };

    const navItems = (
        <>
            <Link onClick={() => scrollToSection('accueil')}>
                <li className='lg:mr-5 text-xl text-[#FFF] font-black nav-shadow'>ACCUEIL</li>
            </Link>
            <Link onClick={() => scrollToSection('experience')}>
                <li className='lg:mr-5 text-xl text-[#FFF] font-black nav-shadow'>EXPERIENCE</li>
            </Link>
            <Link onClick={() => scrollToSection('formation')}>
                <li className='lg:mr-5 text-xl text-[#FFF] font-black nav-shadow'>FORMATION</li>
            </Link>
            <Link onClick={() => scrollToSection('contact')}>
                <li className='lg:mr-5 text-xl text-[#FFF] font-black nav-shadow'>CONTACT</li>
            </Link>
        </>
    );

    return (
        <div className="navbar nav lg:h-[60px] relative bg-[#38B6FF]">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        )}
                    </div>
                    {isMenuOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-10 md:mt-2 z-[1] p-2 md:p-5  shadow bg-[#38B6FF] rounded-box w-52 border-white border-4">
                            {navItems}
                        </ul>
                    )}
                </div>
                <img className='w-32 relative lg:top-3 lg:right-6 ml-24 md:ml-72 lg:ml-0' src={navLogo} alt="Logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
