import '../styles/home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function HomePage() {
  return (
    <div className="wrapper">
      <div className="top">
        <h5>PORTFOLIO</h5>
        <h1>ESTEBAN<br/>RAMIREZ</h1>
      </div>
      <div className="picture">
        <div className="circle">
          <img src='src/img/laptop.jpg'></img>
        </div>
      </div>
      <div className="bottom">
        <h5>SOFTWARE DEVELOPER</h5>
        <div className='links'>
          <BsLinkedin/>
          <BsGithub/>
          <SiGmail/>
        </div>
      </div>
    </div>
  )
}