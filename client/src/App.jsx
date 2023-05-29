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
          <Routes>
            {/* <Route path='/' element={<Navigate to="contact"/>}/> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            {/* <Route path='/projects' element={<ContactPage/>}/> */}
            <Route path='/contact' element={<ContactPage />} />
            {/* <Route path='/contactlist' element={<ContactListPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App