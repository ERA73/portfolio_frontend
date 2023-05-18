import React, {useRef} from "react";
import { Link, NavLink } from "react-router-dom"
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
        <div className="nav-container">
            <NavLink to="/" onClick={hideNavbar}>
                <FcBriefcase size={40} style={{backgroundColor:"#ccc", borderRadius:15, padding:5}}/>
            </NavLink>
            <nav ref={navRef}>
                <NavLink to="/" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink>
                <NavLink to="/about" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>About</NavLink>
                <NavLink to="/skills" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Skills</NavLink>
                <NavLink to="/experience" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Experience</NavLink>
                {/* <NavLink to="/contact" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Contact</NavLink>
                <NavLink to="/contactlist" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Contact List</NavLink> */}
                <button className="nav-btn nav-btn-close" onClick={showNavbar}><FaTimes/></button>
            </nav>
            <button className="nav-btn nav-btn-bars" onClick={showNavbar}><FaBars/></button>
        </div>
    )
}