import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {WellcomePage} from './pages/WellcomePage'
import {AboutPage} from './pages/AboutPage'
import {SkillsPage} from './pages/SkillsPage'
import {ExperiencePage} from './pages/ExperiencePage'
import {ProjectsPage} from './pages/ProjectsPage'
import {ContactPage} from './pages/ContactPage'
import {ContactListPage} from './pages/ContactListPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        {/* <Route path='/' element={<Navigate to="contact"/>}/> */}
        <Route path='/' element={<WellcomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
        <Route path='/experience' element={<ExperiencePage/>}/>
        {/* <Route path='/projects' element={<ContactPage/>}/> */}
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/contactlist' element={<ContactListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App