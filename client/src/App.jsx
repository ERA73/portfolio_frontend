import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'
import { ContactListPage } from './pages/ContactListPage'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Element } from 'react-scroll';

function App() {
  const hideNavbar = (event) => {
    const parent1 = event.target.parentElement
    const parent2 = event.target.parentElement.parentElement
    const classNames = ['nav-btn', 'nav-container', 'nav-btn-bars']
    if (!classNames.some(className => parent2.classList.contains(className)) && !classNames.some(className => parent1.classList.contains(className))) {
      document.getElementsByTagName("nav")[0].classList.remove("responsive");
    }

  }
  return (
    <div className='main-container' onClick={hideNavbar}>
      <BrowserRouter>
        <Navigation />
        <div className='container'>
          <Element name='/'>
            <HomePage />
          </Element>
          <Element name='/about'>
            <AboutPage />
          </Element>
          <Element name='/skills'>
            <SkillsPage />
          </Element>
          <Element name='/experience'>
            <ExperiencePage />
          </Element>
          <Element name='/contact'>
            <ContactPage />
          </Element>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App