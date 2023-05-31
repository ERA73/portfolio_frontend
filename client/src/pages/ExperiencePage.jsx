import '../styles/experience.css'
import { ExperienceCard } from '../components/ExperienceCard'
import { TbBrandCss3, TbBrandDjango, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb';
import { AiOutlineHtml5, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaUbuntu, FaPython, FaReact, FaJava, FaExpeditedssl, FaLock, FaDocker, FaServer } from 'react-icons/fa';
import { SiFortran, SiCplusplus, SiApache, SiGithubactions, SiOpenssl } from 'react-icons/si';
import { SlLink } from 'react-icons/sl';
import { GrDocker } from 'react-icons/gr';
import { GoServer } from 'react-icons/go';

export function ExperiencePage() {
  const experiences = [
    {
      title:"Personal Website", img:"img/exp_07.png", icons:[<FaReact title='React'/>,<TbBrandDjango title='DJango'/>,<FaUbuntu title='Ubuntu'/>,<AiOutlineConsoleSql title='SQL'/>,<FaExpeditedssl title='SSL'/>,<SiGithubactions title='GitHub Actions'/>], description:"Custom VPS-hosted website with end-to-end configuration, featuring backend and frontend development"
    },
    {
      title:"Distribution Generator", img:"img/exp_03.png", icons:[<AiOutlineHtml5 title='HTML'/>,<TbBrandCss3 title='CSS'/>,<TbBrandJavascript title='JavaScript'/>,<TbBrandDjango title='DJango'/>,<AiOutlineConsoleSql title='SQL'/>,<FaUbuntu title='Ubuntu'/>], description:"Calculate store product needs according to the business rules and generate a dispatch for the warehouse"
    },
    {
      title:"Distribution Assistant", img:"img/exp_05.png", icons:[<AiOutlineHtml5 title='HTML'/>,<TbBrandCss3 title='CSS'/>,<TbBrandJavascript title='JavaScript'/>,<TbBrandDjango title='DJango'/>,<AiOutlineConsoleSql title='SQL'/>,<FaUbuntu title='Ubuntu'/>], description:"Assist warehousers to take the dispatch products in optimal order"
    },
    {
      title:"Support Platform", img:"img/exp_04.png", icons:[<AiOutlineHtml5 title='HTML'/>,<TbBrandCss3 title='CSS'/>,<TbBrandJavascript title='JavaScript'/>,<TbBrandDjango title='DJango'/>,<AiOutlineConsoleSql title='SQL'/>,<FaUbuntu title='Ubuntu'/>], description:"Custom RPA for assist the business process management and request technical support"
    },
    {
      title:"Bank Countability", img:"img/exp_06.png", icons:[<AiOutlineHtml5 title='HTML'/>,<TbBrandCss3 title='CSS'/>,<TbBrandJavascript title='JavaScript'/>,<TbBrandDjango title='DJango'/>,<AiOutlineConsoleSql title='SQL'/>,<FaUbuntu title='Ubuntu'/>], description:"Processes bank transactions resumes, fixing wrong data and loading the results into contable provider"
    },
    {
      title:"Sand Production", img:"img/exp_02.png", icons:[<SiCplusplus title='C lang'/>,<TbBrandCss3 title='CSS'/>,<FaPython title='Python'/>,<SiFortran title='FORTRAN'/>,<AiOutlineConsoleSql title='SQL'/>], description:"Simulation tool for estimate the sand production on wells on-shore and off-shore and showing 2D preview"
    },
    {
      title:"Oil Production", img:"img/exp_01.png", icons:[<SiCplusplus title='C lang'/>,<FaJava title='Java'/>,<SiFortran title='FORTRAN'/>,<TbBrandCss3 title='CSS'/>], description:"Simulation tool for estimate the Oil and Gas production testing math models and showing 2D & 3D preview"
    },
  ]
  return (
    <div className='exp-container'>
      {experiences.map(data => (
          <ExperienceCard data = {data}/>
      ))}
    </div>
  )
}