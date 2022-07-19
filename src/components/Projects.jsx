
import {useState, useEffect} from 'react';

import {projectsData} from '../data';
import {projectsNav} from '../data';

import Project from './Project';

import '../styles/projects.css';


const Projects = () => {

  const [item, setItem] = useState({name: 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);


  return (
    <nav>
      <ul className='projects-ul'>
        {projectsNav.map((item, index) => (
          <li key={index}> {item.name} </li>
        ))}
      </ul>
    </nav>
  )
}

export default Projects;