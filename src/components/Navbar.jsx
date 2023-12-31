import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
//using Link!

import {styles} from '../styles';
import {navLinks} from '../constants';
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // If current scroll position is less than last position, user is scrolling up
            setScrolled(false);
        } else if (currentScrollY > 50) {  
            setScrolled(true);
        }

        // Update the last recorded scroll position
        setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [lastScrollY]); // Make sure to include lastScrollY as a dependency


  useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {  // The value after which you want to trigger the change
            setScrolled(true);
        } 
        else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transform-color-nav`}>
      {!scrolled && (
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Hanbin's Portfolio 
              {/* &nbsp; 
              <span className='sm:block hidden'>
                |&nbsp; A Potential Web Developer</span> */}
                </p>
          </Link>


          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {
              navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title?"text-white":"text-secondary"}
                    hover:text-white text-[18px] font-medium cursor-pointer
                  `}
                  onClick={()=>{
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            }
          </ul>
 
          {/* for the smaller screen */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ?close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=>{
              setToggle(!toggle)
            }} />

            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 
            right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {
                    navLinks.map((link) => (
                      <li
                        key={link.id}
                        className={`${active === link.title?"text-white":"text-secondary"}
                          font-popins font-medium cursor-pointer text-[16px]
                        `}
                        onClick={()=>{
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    ))
                  }
                </ul>
            </div>
          </div>
      </div>
      )}
    </nav>
  )
}

export default Navbar