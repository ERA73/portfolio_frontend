import '../styles/skills.css'
import { TbBrandCss3, TbBrandDjango, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb';
import { AiOutlineHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaLinux, FaPython, FaReact } from 'react-icons/fa';


export function SkillsPage() {
  return (
    <div className='container skill'>
      <div className='skill-hard'>
        <p>Hard Skills</p>
        <div className='skill-hard-list'>
          <div>
            <AiOutlineHtml5/>
            <TbBrandJavascript/>
            <TbBrandCss3/>
            <FaReact/>
          </div>
          <div>
            <TbBrandDjango/>
            <AiOutlineConsoleSql/>
            <FaLinux/>
            <FaPython/>
            <TbBrandDocker/>
          </div>
        </div>
      </div>
      <div className='skill-soft'>
        <p>Soft Skills</p>
        <div className='skill-soft-list'></div>
      </div>
    </div>
  )
}