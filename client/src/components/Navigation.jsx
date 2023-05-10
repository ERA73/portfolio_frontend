import React, {useRef} from "react";
import { Link } from "react-router-dom"
import { FaTimes, FaBars } from 'react-icons/fa';
import { FcBriefcase } from 'react-icons/fc';
import { BsBriefcaseFill } from 'react-icons/bs';
import '../styles/navbar.css'

export function Navigation() {
    const navRef = useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive");
    }
    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive");
    }
    return (
        <div className="container">
            <Link to="/" onClick={hideNavbar}>
                <FcBriefcase size={40} style={{backgroundColor:"#ccc", borderRadius:15, padding:5}}/>
            </Link>
            <nav ref={navRef}>
                <Link to="/" onClick={hideNavbar}>About</Link>
                <Link to="/about" onClick={hideNavbar}>About</Link>
                <Link to="/skills" onClick={hideNavbar}>Skills</Link>
                <Link to="/experience" onClick={hideNavbar}>Experience</Link>
                <Link to="/contact" onClick={hideNavbar}>Contact</Link>
                <Link to="/contactlist" onClick={hideNavbar}>Contact List</Link>
                <button className="nav-btn nav-btn-close" onClick={showNavbar}><FaTimes/></button>
            </nav>
            <button className="nav-btn nav-btn-bars" onClick={showNavbar}><FaBars/></button>
        </div>
    )
}