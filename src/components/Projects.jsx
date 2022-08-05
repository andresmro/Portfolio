import { useState, useEffect } from "react";

import { projectsData } from "../data";
import { projectsNav } from "../data";

import Project from "./Project";

import "../styles/projects.css";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  // const handleClick = (e, index) => {
  //   setItem({ name: e.target.textContent.toLowerCase() });
  //   setActive(index);
  // };


  return (
    <>
      
      {/* <nav className="projects-nav">
        <ul className="projects-ul">
        {projectsNav.map((item, index) => {
              return (
                <li
                  onClick={(e) => {
                    handleClick(e, index);
                  }}
                  className={`${
                    active === index ? 'active' : ''
                  } projects-li`}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
        </ul>
      </nav> */}

      <section className="projects-section">
        {projects.map((item) => (
          <Project item={item} key={item.id} />
        ))}
      </section>
    </>
  );
};

export default Projects;
