
import {skills} from '../data';

import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
        <div className='skills-container'>
            <h1 className='skills-h1'>SKILLS</h1>
            <div className='skills-icon'>
                {skills.map( (skill, index) => (//pasar el index como key es mala practica pero para este ejercicio lo usare asi
                    <div key={index}>
                        <img src={skill.image} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills;