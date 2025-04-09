import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+2 años de experiencia",
    },
    // {
    //     id: 2,
    //     name: "Clientes",
    //     icon: <UsersRound />,
    //     description: "+200 clientes satisfechos",
    // },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+20 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#experience",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/progra.jpg",
    }
    // },
    // {
    //     id: 2,
    //     url: "/bar.jpg",
    // },
    // {
    //     id: 3,
    //     url: "/ej.png",
    // },
    // {
    //     id: 4,
    //     url: "/playa.jpg",
    // },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "CL Real State",
        description: "NextJs | React | Tailwind CSS | TypeScript",
        image: "/clrealstate.png",
        urlGithub: "https://github.com/LucasCid/cl-real-state",
        urlDemo: "https://clrealstate.netlify.app/",
    },
    {
        id: 2,
        title: "CL La Relojeria",
        description: "HTML | CSS | Javascript | Bootstrap",
        image: "/larelojeria2.png",
        urlGithub: "https://github.com/LucasCid/larelojeriacl",
        urlDemo: "https://lucascid.github.io/larelojeriacl/",
    },
    {
        id: 3,
        title: "El Granel de la Tita",
        description: "HTML | CSS | Javascript | Bootstrap",
        image: "/elgraneldelatita.png",
        urlGithub: "https://github.com/LucasCid/elgraneldelatita",
        urlDemo: "https://elgraneldelatita.netlify.app/",
    },
    {
        id: 4,
        title: "App Tareas 'To Do List'",
        description: "HTML | CSS | Javascript ",
        image: "/apptareas.png",
        urlGithub: "https://github.com/LucasCid/listadetareas",
        urlDemo: "https://lucascid.github.io/listadetareas/",
    },
    {
        id: 5,
        title: "Juego de Memoria",
        description: "HTML | CSS | Javascript ",
        image: "/juegojs.png",
        urlGithub: "https://github.com/LucasCid/juegomemoriajs",
        urlDemo: "https://lucascid.github.io/juegomemoriajs/",
    },
    {
        id: 6,
        title: "Aplicación Clima",
        description: "HTML | CSS | Javascript | React",
        image: "/appclima.png",
        urlGithub: "https://github.com/LucasCid/weatherapp",
        urlDemo: "https://lucascid.github.io/weatherapp/",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML & CSS",
                subtitle: "Experimentado",
                value: 85,
            },
            {
                name: "Bootstrap",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                 name: "JavaScript",
                 subtitle: "Intermedio",
                 value: 70,
             },
            {
                name: "React",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Next JS",
                subtitle: "Intermedio",
                value: 65,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🕵️‍♂️",
        experience: [
            {
                name: "Node JS",
                subtitle: "Básico",
                value: 60,
            },
            // {
            //     name: "Mongo DB",
            //     subtitle: "Básico",
            //     value: 50,
            // },
            {
                name: "Python",
                subtitle: "Básico",
                value: 50,
            },
            {
                name: "MySQL",
                subtitle: "Básico",
                value: 60,
            },
            // {
            //     name: "PHP",
            //     subtitle: "Experimentado",
            //     value: 60,
            // },
            // {
            //     name: "Django",
            //     subtitle: "Basic",
            //     value: 60,
            // },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <BellPlus />,
        features: [
            {
                name: "Redacción de contenido original y de calidad",
            },
            {
                name: "Creación de vídeos atractivos y dinámicos",
            },
            {
                name: "Diseño gráfico para una imagen impactante",
            },
            {
                name: "Edición profesional de textos y materiales visuales",
            },
            {
                name: "Estrategias de marketing de contenidos efectivas",
            },
            {
                name: "Producción de podcasts informativos y entretenidos",
            },
            {
                name: "Generación de infografías claras y visualmente atractivas",
            },
            {
                name: "Fotografía profesional para capturar momentos excepcionales",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+56 963894355",
        link: "https://wa.me/56963894355?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/LucasCid",
        link: "https://github.com/LucasCid",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "lucascidcanete@gmail.com",
        link: "mailto:lucascidcanete@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];