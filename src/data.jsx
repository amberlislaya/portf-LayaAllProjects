import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/portlayaCapture.png';
import Work4 from './assets/MoviesPlayCapture.png';
import Work5 from './assets/amberlistv-capture.png';
import Work6 from './assets/amberlisMovieCapture.png';
import Work3 from './assets/rickandmortyCapture.png';
import Work7 from './assets/capt-tareas.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about',
    },

    {
        id: 3,
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Amberlis',
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'Laya Madera',
    },

    {
        id: 3,
        title: 'Age : ',
        description: '34 Years',
    },

    {
        id: 4,
        title: 'Nationality : ',
        description: 'Venezuela',
    },

    {
        id: 5,
        title: 'Freelance : ',
        description: 'Developer Frontend - Full Stack Development ',
    },

    {
        id: 6,
        title: 'Address : ',
        description: 'Argentina',
    },

    {
        id: 7,
        title: 'Phone : ',
        description: '+54 9 1122781197',
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'laya.playapps@mail.com',
    },


    {
        id: 10,
        title: 'Langages : ',
        description: 'Advanced Spanish, Basic English ',
    },
];

export const stats = [
    {
        id: 1,
        no: '12+',
        title: 'Years of <br /> Experience',
    },

    {
        id: 2,
        no: '97+',
        title: 'Completed <br /> Projects',
    },

    {
        id: 3,
        no: '81+',
        title: 'Happy <br /> Customers',
    },

    {
        id: 4,
        no: '53+',
        title: ' Awards <br /> Won',
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase />,
        year: '2021 - 2022',
        title: 'Store Manager <span> Ace Deports </span>',
        desc: 'As a store manager of a sports goods retail shop, you will be responsible for overseeing daily operations, managing inventory, and leading the sales team. Your goal will be to ensure excellent customer service and achieve sales targets.',
    },

    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase />,
        year: '2016 - 2017',
        title: 'Chef in Charge <span> Restaurant El Asador </span>',
        desc: 'The position of Head Chef involves overseeing and leading the kitchen team, ensuring the quality and presentation of dishes. Additionally, they plan and coordinate kitchen activities to ensure operational efficiency and customer satisfaction.',
    },

    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase />,
        year: '2011 - 2012',
        title: 'Cashier, Promoter <span> Banc Banesco </span>',
        desc: 'Banesco Cashier, Responsible for attending to customers at the counter, conducting financial transactions, and providing efficient and friendly customer service, Promoter, Tasked with promoting the banks products and services, attracting new customers, providing information about offers, and assisting in handling account and loan applications.',
    },

    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2005',
        title: 'Bachelor of Science <span> "Caruao" National Educational Unit (UENC) </span>',
        desc: 'Bachelor of Science',
    },

    {
        id: 5,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2010-2016',
        title: 'Civil Engineering <span> National Experimental University of the National Armed Force (UNEFA) </span>',
        desc: 'Maintenance, control, and operation of constructions',
    },

    {
        id: 6,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2015',
        title: 'Chef <span> Casserole Du Chef </span>',
        desc: 'To master culinary arts and manage kitchen operations. Chefs learn to create delicious dishes and attractive presentations in the gastronomic industry.',
    },

    {
        id: 7,
        category: 'education',
        icon: <FaGraduationCap />,
        year: '2023',
        title: 'Full Stack Development <span> Soy Henry </span>',
        desc: 'The Full Stack Development career trains versatile professionals capable of creating complete web applications from frontend to backend. It requires knowledge of client-side and server-side programming languages, as well as skills in handling databases and security. Full Stack Developers work in teams and stay up-to-date with the latest technologies.',
    },
];

export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: '45',
    },

    {
        id: 2,
        title: 'Javascript',
        percentage: '80',
    },

    {
        id: 3,
        title: 'Css',
        percentage: '85',
    },

    {
        id: 5,
        title: 'Wordpress',
        percentage: '90',
    },

    {
        id: 6,
        title: 'Jquery',
        percentage: '55',
    },
    {
        id: 8,
        title: 'React',
        percentage: '65',
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'PortfolioAll Digital',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Web Frontend',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React jsx, Bootstrap',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://portfolio-amberlislaya.netlify.app/" target="_blank" rel="noopener noreferrer">https://portfolio-amberlislaya.netlify.app/</a>,
                
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'PortFolio2',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Portf Amberlis Laya',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: ' Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JSX, Bootstrap',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://portf-layam.netlify.app" target="_blank" rel="noopener noreferrer">https://portf-layam.netlify.app/</a>,
                
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: 'RICK AND MORTY',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project Individual: ',
                desc: 'Web',
            },
            {
                icon: <FiUser />,
                title: 'Soy Henry : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React Jsx, SQL, Redux, DB',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://rickmortylaya.netlify.app/" target="_blank" rel="noopener noreferrer">https://rickmortylaya.netlify.app/</a>,
            },
        ],
    },

    

    {
        id: 4,
        img: Work4,
        title: 'MOVIEPLAY',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project Grupal: ',
                desc: 'Movies-series-',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Soy Henry',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JS, Node JS, SQL, MongoDB, Node, Vite',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://luiggi2092.github.io/MoviePlayFront/" target="_blank" rel="noopener noreferrer">https://luiggi2092.github.io/MoviePlayFront/</a>,
            },
        ],
    },

    {
        id: 7,
        img: Work7,
        title: 'MIS APPS',
        details: [
            {   icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Website lista de tareas o projectos ',
            },
            {   icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {   icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JSX, firebase Tailwind',
            },
            {   icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://misapps.netlify.app/" target="_blank" rel="noopener noreferrer">https://misapps.netlify.app/</a>,
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'AMBERLISTV',
        details: [
            {   icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Website movies-series (EN CURSO)',
            },
            {   icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {   icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JS, Node JS, SQL, MongoDB, Node, Tailwind',
            },
            {   icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: <a href="https://amberlistv.netlify.app/" target="_blank" rel="noopener noreferrer">https://amberlistv.netlify.app/</a>,
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'GAGASCHOOL',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project Institucion Educativa(EN CURSO): ',
                desc: 'website Tareas, sitios, proyectos',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Posibles Instituciones Educativas',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React, Next, SQL, Node, Tailwind, Firebase, Prisma',
            },
            {
                icon: <FiExternalLink />,
                title: 'PROXIMAMENTE : ',
                desc: 'www.dibble.com',
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];
