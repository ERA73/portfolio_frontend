import '../styles/skills.css'
import { TbBrandCss3, TbBrandDjango, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb';
import { AiOutlineHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaUbuntu, FaPython, FaReact } from 'react-icons/fa';


export function SkillsPage() {
  return (
    <div className='skill-container'>
      <div className='skill-hard'>
        <p className='title'>Hard Skills</p>
        <div className='skill-hard-list skill-soft-list'>
          <div>
            <AiOutlineHtml5 title='HTML'/>
            <TbBrandJavascript title='JavaScript'/>
            <TbBrandCss3 title='CSS'/>
            <FaReact  title='React'/>
          </div>
          <div>
          <span>
            <img src="img/icons/mage_ai_04.svg" title='Mage-ai'/>
            </span>
            <AiOutlineConsoleSql title='SQL'/>
            <FaUbuntu title='Ubuntu'/>
            <FaPython title='Python'/>
            <TbBrandDocker title='Docker'/>
          </div>
        </div>
      </div>
      <div className='skill-soft'>
        <p className='title'>Soft Skills</p>
        <div className='skill-soft-list'>
          <div>
            <span>
            <img src="img/icons/talk_box_01.svg"/><p>comunication</p>
            </span>
            <span>
            <img src="img/icons/medal_01.svg"/><p>service</p>
            </span>
            <span>
            <img src="img/icons/shake_hands_02.svg"/><p>support</p>
            </span>
          </div>
          <div>
            <span>
            <img src="img/icons/team_01.svg"/><p>teamwork</p>
            </span>
            <span>
            <img src="img/icons/lead_06.svg"/><p>leadership</p>
            </span>
            <span>
            <img src="img/icons/oratory_05.svg"/><p>oratory</p>
            </span>
            <span>
            <img src="img/icons/mentoring_09.svg"/><p>mentoring</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}