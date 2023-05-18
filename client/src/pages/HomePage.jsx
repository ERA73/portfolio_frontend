import '../styles/home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="home-top">
        <h5>PORTFOLIO</h5>
        <h2>ESTEBAN</h2>
        <h2>RAMIREZ</h2>
      </div>
      <div className="home-picture">
        <div className="home-circle">
          <img src='img/laptop.jpg'></img>
        </div>
      </div>
      <div className="home-bottom">
        <h5>SOFTWARE DEVELOPER</h5>
        <div className='home-links'>
          <a href="https://www.linkedin.com/in/esteban-ramirez-0522bab8/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/ERA73" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href="mailto:era3939@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail/></a>
        </div>
      </div>
    </div>
  )
}