import React, { useRef, useEffect, useState } from 'react';
// import { Link, NavLink } from "react-router-dom"
import { FaTimes, FaBars } from 'react-icons/fa';
import { FcBriefcase } from 'react-icons/fc';
import { BsBriefcaseFill } from 'react-icons/bs';
import '../styles/navbar.css';
import { Link } from 'react-scroll';


export function Navigation() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive");
    }
    
    const divNavRef = useRef();
    const [nav_height, setNavigationHeight] = useState(-98);
    useEffect(() => {
        if (divNavRef.current) {
          const height = divNavRef.current.offsetHeight;
          setNavigationHeight(height);
        }
      }, []);
    const scroll_duration = 500;

    return (
        <div className="nav-container" ref={divNavRef}>
            <Link spy={true} offset={-nav_height} to="/" smooth={true} duration={scroll_duration} onClick={hideNavbar}>
                <FcBriefcase size={40} style={{ backgroundColor: "#ccc", borderRadius: 15, padding: 5 }} />
            </Link>
            <nav ref={navRef}>
                <Link activeClass="link-active" spy={true} offset={-nav_height} to="/" smooth={true} duration={scroll_duration} onClick={hideNavbar} className="link">Home</Link>
                <Link activeClass="link-active" spy={true} offset={-nav_height} to="/about" smooth={true} duration={scroll_duration} onClick={hideNavbar} className="link">About</Link>
                <Link activeClass="link-active" spy={true} offset={-nav_height} to="/skills" smooth={true} duration={scroll_duration} onClick={hideNavbar} className="link">Skills</Link>
                <Link activeClass="link-active" spy={true} offset={-nav_height} to="/experience" smooth={true} duration={scroll_duration} onClick={hideNavbar} className="link">Experience</Link>
                <button className="nav-btn nav-btn-close" onClick={showNavbar}><FaTimes /></button>
            </nav>
            <button className="nav-btn nav-btn-bars" onClick={showNavbar}><FaBars /></button>
        </div>
    )
}