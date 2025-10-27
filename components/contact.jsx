//  import { dataContact } from "@/data";
//   import Title from "./shared/title"
//   import Link from "next/link"
//   import ContactForm from "./contact-form";
//   const Contact = () => {
//       return (
//           <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="contact">
//               <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo &#x1F44B;" />
//               <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
//                   <div>
//                       {dataContact.map((data) => (
//                           <div key={data.id} className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4">
//                               {data.icon}
//                               <p>{data.title}</p>
//                               <p>{data.subtitle}</p>
//                               <Link href={data.link} target="_blank">
//                                   Enviar mensaje
//                               </Link>
//                           </div>
//                       ))}
//                   </div>
//                   <div className="col-span-2">
//                       <ContactForm />
//                   </div>
//               </div>
//           </div>
//       )
//   }
//   export default Contact;


// import { dataContact } from "@/data";
// import Title from "./shared/title"
// import Link from "next/link"
// import ContactForm from "./contact-form";

// const Contact = () => {
//     return (
//         <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto animate-fade-in" id="contact">
//             <div className="animate-slide-up">
//                 <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo &#x1F44B;" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
//                 <div className="space-y-5">
//                     {dataContact.map((data, index) => (
//                         <div 
//                             key={data.id} 
//                             className="flex flex-col items-center dark:bg-slate-800 rounded-lg p-4 
//                                      transform hover:scale-105 hover:-translate-y-1 
//                                      transition-all duration-300 ease-out
//                                      animate-slide-up opacity-0"
//                             style={{
//                                 animationDelay: `${index * 0.2}s`,
//                                 animationFillMode: 'forwards'
//                             }}
//                         >
//                             <div className="mb-2 transform transition-transform duration-200 hover:scale-110">
//                                 {data.icon}
//                             </div>
//                             <p className="font-medium transition-colors duration-200">{data.title}</p>
//                             <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{data.subtitle}</p>
//                             <Link 
//                                 href={data.link} 
//                                 target="_blank"
//                                 className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
//                                          transition-all duration-200 hover:underline
//                                          transform hover:scale-105 active:scale-95"
//                             >
//                                 Enviar mensaje
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="col-span-2 animate-slide-up opacity-0"
//                      style={{
//                          animationDelay: '0.4s',
//                          animationFillMode: 'forwards'
//                      }}>
//                     <ContactForm />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact;
'use client';
import { dataContact } from "@/data";
import Title from "./shared/title"
import Link from "next/link"
import ContactForm from "./contact-form";
import { useState, useEffect, useRef } from 'react';
const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del componente es visible
                rootMargin: '0px 0px -100px 0px' // Se activa un poco antes de que aparezca completamente
            }
        );
        if (contactRef.current) {
            observer.observe(contactRef.current);
        }
        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);
    return (
        <div
            ref={contactRef}
            className={`p-6 md:px-12 md:py-44 max-w-5xl mx-auto transition-all duration-800 ease-out ${isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
            id="contact"
        >
            <div className={`transition-all duration-600 ease-out ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                }`}>
                <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo &#x1F44B;" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div className="space-y-5">
                    {dataContact.map((data, index) => (
                        <div
                            key={data.id}
                            className={`flex flex-col items-center dark:bg-slate-800 rounded-lg p-4 
                                      transform hover:scale-105 hover:-translate-y-1 
                                      transition-all duration-300 ease-out
                                      ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
                            style={{
                                animationDelay: isVisible ? `${index * 0.2}s` : '0s',
                                animationFillMode: 'forwards'
                            }}
                        >
                            <div className="mb-2  transform transition-transform duration-200 hover:scale-110">
                                {data.icon}
                            </div>
                            <p className="font-medium  transition-colors duration-200">{data.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{data.subtitle}</p>
                            {/* <Link 
                                 href={data.link} 
                                 target="_blank"
                                 className=" text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
                                          transition-all duration-200 hover:underline
                                          transform hover:scale-105 active:scale-95"
                             >
                                 Enviar mensaje
                             </Link> */}
                            <Link
                                href={data.link}
                                target="_blank"
                                className=" text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
             transition-all duration-200 hover:underline
             transform hover:scale-105 active:scale-95"
                            >
                                {data.title === "Github" ? "Ver perfil" : "Enviar mensaje"}
                            </Link>

                        </div>
                    ))}
                </div>
                <div className={`col-span-2 transition-all duration-600 ease-out ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                        animationDelay: isVisible ? '0.4s' : '0s',
                        animationFillMode: 'forwards'
                    }}>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
export default Contact;
