import '../styles/experience.css'
import { ExperienceCard } from '../components/ExperienceCard'
import { TbBrandCss3, TbBrandDjango, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb';
import { AiOutlineHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaUbuntu, FaPython, FaReact, FaJava } from 'react-icons/fa';
import { SiFortran, SiCplusplus } from 'react-icons/si';

export function ExperiencePage() {
  const experiences = [
    {
      title:"Oil Production", img:"src/img/exp_01.png", icons:[<SiCplusplus/>,<FaJava/>,<SiFortran/>,<TbBrandCss3/>], description:"Simulation tool for estimate the Oil and Gas production testing math models and showing 2D & 3D preview"
    },
    {
      title:"Sand Production", img:"src/img/exp_02.png", icons:[<SiCplusplus/>,<TbBrandCss3/>,<FaPython/>,<SiFortran/>,<AiOutlineConsoleSql/>], description:"Simulation tool for estimate the sand production on wells on-shore and off-shore and showing 2D preview"
    },
    {
      title:"Distribution Generator", img:"src/img/exp_03.png", icons:[<AiOutlineHtml5/>,<TbBrandCss3/>,<TbBrandJavascript/>,<TbBrandDjango/>,<AiOutlineConsoleSql/>,<FaUbuntu/>], description:"Calculate store product needs according to the business rules and generate a dispatch for the warehouse"
    },
    {
      title:"Support Platform", img:"src/img/exp_04.png", icons:[<AiOutlineHtml5/>,<TbBrandCss3/>,<TbBrandJavascript/>,<TbBrandDjango/>,<AiOutlineConsoleSql/>,<FaUbuntu/>], description:"Custom RPA for assist the business process management and request technical support"
    },
    {
      title:"Distribution Assistant", img:"src/img/exp_05.png", icons:[<AiOutlineHtml5/>,<TbBrandCss3/>,<TbBrandJavascript/>,<TbBrandDjango/>,<AiOutlineConsoleSql/>,<FaUbuntu/>], description:"Assist warehousers to take the dispatch products in optimal order"
    },
    {
      title:"Bank Countability", img:"src/img/exp_06.png", icons:[<AiOutlineHtml5/>,<TbBrandCss3/>,<TbBrandJavascript/>,<TbBrandDjango/>,<AiOutlineConsoleSql/>,<FaUbuntu/>], description:"Processes bank transactions resumes, fixing wrong data and loading the results into contable provider"
    }
  ]
  return (
    <div className='exp-container'>
      {experiences.map(data => (
          <ExperienceCard data = {data}/>
      ))}
    </div>
  )
}