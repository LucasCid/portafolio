


// import { dataPortfolio } from "@/data";
// import Title from "./shared/title";
// import Image from "next/image";
// import Link from "next/link";
// import { buttonVariants } from "./ui/button";

// const Portfolio = () => {
//     return (
//         <div className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
//             <Title title="Portfolio" subtitle="Trabajos Recientes &#128188;" />

//             {/* Layout para móvil - mantiene el diseño original */}
//             <div className="grid md:hidden gap-14 mt-4">
//                 {dataPortfolio.map((data) => (
//                     <div key={data.id} className="group relative">
//                         <div className="relative overflow-hidden rounded-2xl">
//                             <Image src={data.image} alt={data.title} width={300} height={300} className="rounded-2xl w-full" />
                            
//                             {/* Cortina animada */}
//                             <div className="absolute top-full left-0 w-full h-full bg-black/80 text-white flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out group-hover:top-0">
//                                 <h3 className="text-lg font-semibold">{data.title}</h3>
//                                 <p className="text-sm mt-2">{data.description}</p>
//                             </div>
//                         </div>

//                         <div className="mt-5 flex gap-5">
//                             <Link className={buttonVariants({ variant: "outline" })} href={data.urlGithub} target="_blank">
//                                 Github
//                             </Link>
//                             <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
//                                 Live demo
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Layout para desktop - diseño zigzag */}
//             <div className="hidden md:block mt-8">
//                 {dataPortfolio.map((data, index) => {
//                     const isEven = index % 2 === 0;
                    
//                     return (
//                         <div key={data.id} className={`flex items-center gap-12 mb-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
//                             {/* Imagen del proyecto */}
//                             <div className="flex-1 group relative">
//                                 <div className="relative overflow-hidden rounded-2xl">
//                                     <Image 
//                                         src={data.image} 
//                                         alt={data.title} 
//                                         width={500} 
//                                         height={300} 
//                                         className="rounded-2xl w-full h-64 object-cover" 
//                                     />
                                    
//                                     {/* Cortina animada - igual que en móvil */}
//                                     <div className="absolute top-full left-0 w-full h-full bg-black/80 text-white flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out group-hover:top-0">
//                                         <h3 className="text-lg font-semibold">{data.title}</h3>
//                                         <p className="text-sm mt-2">{data.description}</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Descripción del proyecto */}
//                             <div className="flex-1 space-y-6">
//                                 <div>
//                                     <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{data.title}</h3>
                                    
//                                     {/* Tecnologías utilizadas */}
//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                         {data.description.split(' | ').map((tech, techIndex) => (
//                                             <span 
//                                                 key={techIndex}
//                                                 className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium"
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* NUEVA SECCIÓN: Descripción detallada del proyecto */}
//                                 <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-gray-500 dark:gray-dark-400">
//                                     <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
//                                         {/* Aquí puedes agregar la descripción detallada de cada proyecto */}
//                                         {data.id === 1 && "LandingPage desarrollada con Next.js, React (Vite), Tailwind CSS y TypeScript. Es una landing page de bienes raíces con galería de imágenes interactiva, formulario de contacto, mapa interactivo con LeafletJS que muestra propiedades ficticias en Chile, un chatbot para consultas rápidas y un botón flotante de WhatsApp que dirige a una conversación directa. El enfoque del proyecto es demostrar habilidades frontend y diseño responsivo."}
//                                         {data.id === 2 && "Aplicación web Ecommerce desarrollada con React, Next.js, Vite, Tailwind CSS, Strapi y PostgreSQL. Incluye carrito de compras, sistema de favoritos, filtrado por tipos de café y una pasarela de pago con Flow (actualmente en revisión). La base de datos está gestionada con PostgreSQL y conectada mediante Strapi como headless CMS, ofreciendo una arquitectura robusta y escalable."}
//                                         {data.id === 3 && "Aplicación de administración financiera creada con React, Vite, TailwindCSS y Firebase. Permite a los usuarios registrar ingresos y gastos, con autenticación mediante login/registro y almacenamiento seguro en la nube. Incluye un gráfico dinámico generado con React Victory que se actualiza en tiempo real, brindando una visualización clara del estado financiero del usuario."}
//                                         {data.id === 4 && "App multifuncional construida con React y Firebase que combina gestión de tareas y consulta del clima en tiempo real. Incluye sistema de autenticación, almacenamiento de tareas personales y una integración con la API de OpenWeatherMap para mostrar el clima según la ubicación del usuario. Además, presenta la fecha actual y una interfaz simple y eficiente para el día a día."}
//                                         {/* {data.id === 5 && "Juego interactivo de memoria desarrollado con JavaScript puro. Incluye diferentes niveles de dificultad, sistema de puntuación y efectos visuales atractivos."} */}
//                                         {/* {data.id === 6 && "Aplicación del clima que consume APIs en tiempo real para mostrar condiciones meteorológicas actuales y pronósticos. Incluye geolocalización y búsqueda por ciudad."} */}
//                                     </p>
//                                 </div>

//                                 {/* Botones de acción */}
//                                 <div className="flex gap-4">
//                                     <Link 
//                                         className={buttonVariants({ variant: "outline", size: "lg" })} 
//                                         href={data.urlGithub} 
//                                         target="_blank"
//                                     >
//                                         <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                         </svg>
//                                         Github
//                                     </Link>
//                                     <Link 
//                                         className={buttonVariants({ size: "lg" })} 
//                                         href={data.urlDemo} 
//                                         target="_blank"
//                                     >
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                                         </svg>
//                                         Live Demo
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Portfolio;


"use client"

import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useEffect, useRef } from "react";

const Portfolio = () => {
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');
                    }
                });
            },
            {
                threshold: 0.4,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        projectRefs.current[index] = el;
    };

    return (
        <div className="p-4 max-w-6xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Trabajos Recientes &#128188;" />

            {/* Layout para móvil - mantiene el diseño original */}
            <div className="grid md:hidden gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="group relative">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image src={data.image} alt={data.title} width={300} height={300} className="rounded-2xl w-full" />
                            
                            {/* Cortina animada */}
                            <div className="absolute top-full left-0 w-full h-full bg-black/80 text-white flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out group-hover:top-0">
                                <h3 className="text-lg font-semibold">{data.title}</h3>
                                <p className="text-sm mt-2">{data.description}</p>
                            </div>
                        </div>

                        <div className="mt-5 flex gap-5">
                            <Link className={buttonVariants({ variant: "outline" })} href={data.urlGithub} target="_blank">
                                Github
                            </Link>
                            <Link className={buttonVariants()} href={data.urlDemo} target="_blank">
                                Live demo
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Layout para desktop - diseño zigzag */}
            <div className="hidden md:block mt-8">
                {dataPortfolio.map((data, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                        <div 
                            key={data.id} 
                            ref={(el) => addToRefs(el, index)}
                            className={`flex items-center gap-12 mb-20 ${isEven ? 'flex-row' : 'flex-row-reverse'} animate-project`}
                        >
                            {/* Imagen del proyecto */}
                            <div className="flex-1 group relative">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image 
                                        src={data.image} 
                                        alt={data.title} 
                                        width={500} 
                                        height={300} 
                                        className="rounded-2xl w-full h-64 object-cover" 
                                    />
                                    
                                    {/* Cortina animada - igual que en móvil */}
                                    <div className="absolute top-full left-0 w-full h-full bg-black/80 text-white flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out group-hover:top-0">
                                        <h3 className="text-lg font-semibold">{data.title}</h3>
                                        <p className="text-sm mt-2">{data.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Descripción del proyecto */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{data.title}</h3>
                                    
                                    {/* Tecnologías utilizadas */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {data.description.split(' | ').map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* NUEVA SECCIÓN: Descripción detallada del proyecto */}
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-gray-500 dark:gray-dark-400">
                                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                                        {/* Aquí puedes agregar la descripción detallada de cada proyecto */}
                                        {data.id === 1 && "Proyecto final del bootcamp Full Stack de Desafío Latam. AromasCafé es una aplicación web de ecommerce desarrollada con React, Next.js, Vite y Tailwind CSS, conectada a una base de datos PostgreSQL. Incluye carrito de compras, sistema de favoritos, filtrado por tipo de café y una integración con la pasarela de pago Flow (en revisión). Diseñada con un enfoque en escalabilidad, rendimiento y experiencia de usuario."}
                                        {data.id === 2 && "Aplicación de administración financiera creada con React, Vite, TailwindCSS y Firebase. Permite a los usuarios registrar ingresos y gastos, con autenticación mediante login/registro y almacenamiento seguro en la nube. Incluye un gráfico dinámico generado con React Victory que se actualiza en tiempo real, brindando una visualización clara del estado financiero del usuario."}
                                        {data.id === 3 && "LandingPage desarrollada con Next.js, React (Vite), Tailwind CSS y TypeScript. Es una landing page de bienes raíces con galería de imágenes interactiva, formulario de contacto, mapa interactivo con LeafletJS que muestra propiedades ficticias en Chile, un chatbot para consultas rápidas y un botón flotante de WhatsApp que dirige a una conversación directa. El enfoque del proyecto es demostrar habilidades frontend y diseño responsivo."}
                                        {data.id === 4 && "App multifuncional construida con React y Firebase que combina gestión de tareas y consulta del clima en tiempo real. Incluye sistema de autenticación, almacenamiento de tareas personales y una integración con la API de OpenWeatherMap para mostrar el clima según la ubicación del usuario. Además, presenta la fecha actual y una interfaz simple y eficiente para el día a día."}
                                         {data.id === 5 && "Landing page desarrollada con HTML, CSS y JavaScript como proyecto freelance para un cliente de Bupa Seguros. Incluye formulario de contacto funcional, botones integrados a WhatsApp y correo electrónico, y optimización SEO mediante metaetiquetas, keywords y estructura semántica. El sitio está alojado en Hostinger y diseñado para ofrecer una navegación rápida, responsiva y orientada a la conversión."}
                                    </p>
                                </div>

                                {/* Botones de acción */}
                                <div className="flex gap-4">
                                    <Link 
                                        className={buttonVariants({ variant: "outline", size: "lg" })} 
                                        href={data.urlGithub} 
                                        target="_blank"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        Github
                                    </Link>
                                    <Link 
                                        className={buttonVariants({ size: "lg" })} 
                                        href={data.urlDemo} 
                                        target="_blank"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Estilos CSS para las animaciones */}
            <style jsx>{`
                .animate-project {
                    opacity: 0;
                    transform: translateX(100px);
                    transition: all 0.6s ease-out;
                }

                .animate-project:nth-child(even) {
                    transform: translateX(-100px);
                }

                .animate-project.animate-visible {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>
        </div>
    );
};

export default Portfolio;