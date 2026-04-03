import './styles.css'

import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Journey      from './components/Journey'
import Projects     from './components/Projects'
import Testimonials from './components/Testimonials'
import ResumeCV     from './components/ResumeCV'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Testimonials />
        <ResumeCV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
