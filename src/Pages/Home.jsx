
import Hero from '../HOC/Hero'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>

    </div>
  )
}

export default Home