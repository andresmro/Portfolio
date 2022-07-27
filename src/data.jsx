// //  icons
import {
    FiLinkedin,
    FiGithub,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  
//   // projects images
  import Project1 from './assets/img/projects/p1.webp';
  import Project2 from './assets/img/projects/p2.webp';
  import Project3 from './assets/img/projects/p3.webp';
  import Project4 from './assets/img/projects/p4.webp';
  import Project5 from './assets/img/projects/p5.webp';
  import Project6 from './assets/img/projects/p6.webp';
  
//   // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/nodejs.png';
  import SkillImg6 from './assets/img/skills/git.png';

  
  
//   // navigation

  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'skills',
      href: 'skills',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
//   // social
  export const social = [
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/andres-mateus-rodriguez-88860b245/',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/andresmro',
    },
  ];
  

  
//   // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
//   // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
//   // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    
  ];
  
//   // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
//   // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at andres.mateus.r2002@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bogota D.C, Colombia',
      description: 'Serving clients worldwide',
    },
  ];