import '../styles/home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function HomePage() {
  return (
    <div className="wrapper">
      <div className="top">
        <h5>PORTFOLIO</h5>
        <h2>ESTEBAN</h2>
        <h2>RAMIREZ</h2>
      </div>
      <div className="picture">
        <div className="circle">
          <img src='src/img/laptop.jpg'></img>
        </div>
      </div>
      <div className="bottom">
        <h5>SOFTWARE DEVELOPER</h5>
        <div className='links'>
          <a href="https://www.linkedin.com/in/esteban-ramirez-0522bab8/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/ERA73" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href="mailto:era3939@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail/></a>
          
          
          
        </div>
      </div>
    </div>
  )
}