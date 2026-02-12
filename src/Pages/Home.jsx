
import Hero from '../HOC/Hero'
import About from './About'
import Contact from './Contact'
import Services from './Services'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home