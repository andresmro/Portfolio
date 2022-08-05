// //  icons
import {
    FiLinkedin,
    FiGithub,
    FiLayout,
    FiSettings,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  
//   // projects images
  import Project11 from './assets/img/projects/pro1.png';
  import Project22 from './assets/img/projects/pro2.png';
  import Project33 from './assets/img/projects/pro3.png';

  
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
      image: Project11,
      name: 'Gif Expert App',
      link: 'https://andresmro.github.io/react-gifexpert-app/',
      //category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project22,
      name: 'Journal App',
      link: 'https://notes-journal-app.netlify.app',
      //category: 'web development',
    },
    {
      id: '3',
      image: Project33,
      name: 'Personal Portfolio',
      link: 'https://portfolio-andresmro.netlify.app',
      //category: 'UI/UX design',
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
        'Always satisfying the designs required by Clients.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Always working and achieving the features required by Clients.',
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