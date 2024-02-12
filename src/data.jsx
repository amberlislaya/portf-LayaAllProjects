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
import Work2 from './assets/cap1porrt.png';
import Work3 from './assets/rickandmortyCapture.png';
import Work4 from './assets/MoviesPlayCapture.png';
import Work5 from './assets/amberlisvideo.png';
import Work6 from './assets/capfrongianshop.png';
import Work7 from './assets/captnikeshop.png';
import Work8 from './assets/capgym.png';
import Work9 from './assets/layaglobalcapture.png';
import Work10 from './assets/capnotas.png';
import Work11 from './assets/capt.restverde.png';
import Work12 from './assets/capchicken.png';
import Work13 from './assets/captu-layarest.png';
import Work14 from './assets/ambervideoCap.png';
import Work15 from './assets/capblogpro.png';
import Work16 from './assets/cap.rider.png';
import Work17 from './assets/capfoddlaya.png';
import Work18 from './assets/ambertvencur.png';
import Work19 from './assets/cappetshop.png';
import Work20 from './assets/educap.png';




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
        no: '2+',
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
        percentage: '66.50',
    },

    {
        id: 3,
        title: 'Css',
        percentage: '85',
    },
    {
        id: 3,
        title: 'Next',
        percentage: '45',
    },


    {
        id: 6,
        title: 'Typescript',
        percentage: '55',
    },
    {
        id: 8,
        title: 'React',
        percentage: '75',
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'PORTAFOLIO AMBERLIS',
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
                desc: <a href="https://portfolio-amberlislaya.netlify.app/" target="_blank" rel="noopener noreferrer">https://portfolio-amberlislaya.netlify.app/</a>,
                
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'PORTFOLIO',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Portfolio',
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
                title: 'PROYECTO: ',
                desc: 'Web',
            },
            {
                icon: <FiUser />,
                title: 'Soy Henry : ',
                desc: 'Proyecto',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React Jsx, Bootstrap, Api,',
            },
            {
                icon: <FiExternalLink />,
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
                desc: <a href="https://luiggi2092.github.io/MoviePlayFront/" target="_blank" rel="noopener noreferrer">https://luiggi2092.github.io/MoviePlayFront/</a>,
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'AMBERLIS',
        details: [
            {   icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Website Videos ',
            },
            {   icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {   icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JSX, Tailwind, ApiRapi',
            },
            {   icon: <FiExternalLink />,
                desc: <a href="https://amberlisvideo.netlify.app/" target="_blank" rel="noopener noreferrer">https://amberlisvideo.netlify.app/</a>,
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'GIAMZON',
        details: [
            {   icon: <FiFileText />,
                title: 'Ecommerce : ',
                desc: 'Ecommerce Funcional (EN CURSO)',
            },
            {   icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {   icon: <FaCode />,
                title: 'Language : ',
                desc: 'React JS, Node JS, SQL, MongoDB, Postman, Node, Tailwind, Dashboard',
            },
            {   icon: <FiExternalLink />,
                desc: <a href="https://giamshp-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://giamshp-amberlislaya.vercel.app/</a>,
            },
        ],
    },

    {
        id: 7,
        img: Work7,
        title: 'NIKSHOP',
        details: [
            {
                icon: <FiFileText />,
                title: 'Ecommerce Nike ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React-Vite, Tailwind ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://nik-shop-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://nik-shop-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 8,
        img: Work8,
        title: 'STRENGTH',
        details: [
            {
                icon: <FiFileText />,
                title: 'website gym ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, Css ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://web-gym-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://web-gym-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 9,
        img: Work9,
        title: 'LAYAGLOBAL',
        details: [
            {
                icon: <FiFileText />,
                title: 'website Buscador global ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React-Vite, Tailwind ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://lmglobal-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://lmglobal-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 10,
        img: Work10,
        title: 'LayaNotas',
        details: [
            {
                icon: <FiFileText />,
                title: 'App Notas ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Create React App ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://laya-notas.netlify.app/" target="_blank" rel="noopener noreferrer">https://laya-notas.netlify.app/</a>,
            },
        ],
    },
   
    {
        id: 11,
        img: Work11,
        title: 'LAYA',
        details: [
            {
                icon: <FiFileText />,
                title: 'website restaurante ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, JavaScript, Css',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://laya-restaurante-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://laya-restaurante-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 12,
        img: Work12,
        title: 'CHICKEN',
        details: [
            {
                icon: <FiFileText />,
                title: 'website restaurante ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React, Tailwind',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://chicken-laya.netlify.app/" target="_blank" rel="noopener noreferrer">https://chicken-laya.netlify.app/</a>,
            },
        ],
    },
    {
        id: 13,
        img: Work13,
        title: 'LAYA.REST',
        details: [
            {
                icon: <FiFileText />,
                title: 'website restaurante ',
               
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, JavaScript, Css',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://restolay-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://restolay-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 14,
        img: Work14,
        title: 'AMBERVIDEO',
        details: [
            {
                icon: <FiFileText />,
                title: 'website videos ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React, Tailwind ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://ambervideo.netlify.app/" target="_blank" rel="noopener noreferrer">https://ambervideo.netlify.app/</a>,
            },
        ],
    },
    {
        id: 15,
        img: Work15,
        title: 'BLOGPRO',
        details: [
            {
                icon: <FiFileText />,
                title: 'BLOG ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React, Auth, API, mongoose ',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://blogpro-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://blogpro-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 16,
        img: Work16,
        title: 'RIDER',
        details: [
            {
                icon: <FiFileText />,
                title: 'Rent Auto ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, JavaScript, Css',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://rider-amberlislaya.vercel.app/#" target="_blank" rel="noopener noreferrer">https://rider-amberlislaya.vercel.app/#</a>,
            },
        ],
    },
    {
        id: 17,
        img: Work17,
        title: 'FOODLAYA',
        details: [
            {
                icon: <FiFileText />,
                title: 'website food ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React Vite, Tailwind',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://foodlaya.netlify.app/" target="_blank" rel="noopener noreferrer">https://foodlaya.netlify.app/</a>,
            },
        ],
    },
    {
        id: 18,
        img: Work18,
        title: 'AMBERLISTV (EN CURSO)',
        details: [
            {
                icon: <FiFileText />,
                title: 'website Tv ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'React, Firebase, Stripe, Auth, SQL, Mondodb',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://new-tv-rho.vercel.app/" target="_blank" rel="noopener noreferrer">https://new-tv-rho.vercel.app/</a>,
            },
        ],
    },
    {
        id: 19,
        img: Work19,
        title: 'YOURPET',
        details: [
            {
                icon: <FiFileText />,
                title: 'website petshop ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, JavaScript, Css',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://yourpet-git-main-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://yourpet-git-main-amberlislaya.vercel.app/</a>,
            },
        ],
    },
    {
        id: 20,
        img: Work20,
        title: 'EDUCATION',
        details: [
            {
                icon: <FiFileText />,
                title: 'website education ',
                
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Personal',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Html, JavaScript, Css',
            },
            {
                icon: <FiExternalLink />,
                desc: <a href="https://edu-cation-git-main-amberlislaya.vercel.app/" target="_blank" rel="noopener noreferrer">https://edu-cation-git-main-amberlislaya.vercel.app/</a>,
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
