
import Projects from '../components/Projects';

import '../styles/portfolio.css';

const PortFolio = () => {
  return (
    <section id="portfolio" className='portfolio-section'>
        <div className='portfolio-div1'>
            <h2 className='portfolio-h2'>My latest work</h2>
            <p className='portfolio-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum odit quisquam fugit id nostrum recusandae pariatur, laboriosam iure quam voluptas! Explicabo impedit, iure repudiandae sint quae totam fugit numquam!
            </p>
        </div>
        <Projects/>
    </section>
  )
}

export default PortFolio;