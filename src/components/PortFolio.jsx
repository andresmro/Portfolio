
import Projects from '../components/Projects';

import '../styles/portfolio.css';

const PortFolio = () => {
  return (
    <section id="portfolio" className='portfolio-section'>
        <div className='portfolio-div1'>
            <h2 className='portfolio-h2'>My latest work</h2>
            <p className='portfolio-p'>
            Here you can review the latest projects I've been working on.
            </p>
        </div>
        <Projects/>
    </section>
  )
}

export default PortFolio;