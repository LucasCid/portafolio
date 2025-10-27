
//  import { dataAboutMe, dataSlider } from "@/data";
//  import Title from "./shared/title";
//  import { Button } from "./ui/button";
//  import { Phone } from "lucide-react";
//  import { Carousel } from "./ui/carousel";
//  import Image from "next/image";
//  const AboutMe = () => {
//      return (
//          <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto " id="about-me">
//              <Title title="Sobre mi" subtitle="Conoceme &#9996;" />
//              <div className="grid md:grid-cols-2">
//                  <div className="py-12 md:py-0 flex items-center justify-center">
//                      <Carousel opts={{
//                          align: "start"
//                      }}
//                          orientation="vertical"
//                          className="w-full max-w-xs h-fit"
//                      >
                      
//                              <div className="-mt-1 h-[200px]">
//                              {dataSlider.map((data) => (
//                                  <div key={data.id}>
//                                      <div className="flex items-center justify-center">
//                                          <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-[240px] object-contain rounded-lg imagen-sobremi" />
//                                      </div>
//                                  </div>
//                              ))}
//                          </div>
                     
//                      </Carousel>
//                  </div>
//                  <div>
//                      <div className="grid md:grid-cols-3 mt-7 gap-4">
//                          {dataAboutMe.map((data) => (
//                              <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
//                                  {data.icon}
//                                  <p className="my-2">{data.name}</p>
//                                  <p className="text-gray-400">{data.description}</p>
//                              </div>
//                          ))}
//                      </div>
//                      <p className="my-8">¡Hola! Soy Lucas Cid, programador enfocado en el desarrollo frontend con conocimientos de backend. Me gusta crear aplicaciones web funcionales y atractivas y actualmente trabajo con React, Node.js y PostgreSQL.
//  Busco oportunidades para aportar y seguir mejorando como desarrollador. Estoy motivado por seguir creciendo profesionalmente y siempre abierto a aprender nuevas tecnologías.
//  </p>
//                      <a href="https://wa.me/56963894355" target="_blank" rel="noopener noreferrer">
//                          <Button>
//                              <Phone size={20} className="mr-2" />Hablamos
//                          </Button>
//                      </a>
//                  </div>
//              </div>
//          </div>
//      );
//  }
//  export default AboutMe;

'use client'

import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel } from "./ui/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en el viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar después de que se muestra
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px", // Margen negativo para activar un poco antes
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`p-6 md:px-12 md:py-30 max-w-5xl mx-auto transition-all duration-700 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      id="about-me"
    >
      <Title title="Sobre mi" subtitle="Conoceme &#9996;" />
      
      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          <Carousel 
            opts={{ align: "start" }} 
            orientation="vertical" 
            className="w-full max-w-xs h-fit"
          >
            <div className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <div key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image 
                      src={data.url} 
                      alt="Image" 
                      width={250} 
                      height={400} 
                      className={`w-full h-[240px] object-contain rounded-lg imagen-sobremi transition-transform duration-700 delay-300 ${
                        isVisible ? "scale-100" : "scale-90"
                      }`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
        
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data, index) => (
              <div 
                key={data.id} 
                className={`border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800 transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
                }}
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          
          <p className={`my-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>
            ¡Hola! Soy Lucas Cid, programador enfocado en el desarrollo frontend con conocimientos de backend. Me gusta crear aplicaciones web funcionales y atractivas y actualmente trabajo con React, Node.js y PostgreSQL. Busco oportunidades para aportar y seguir mejorando como desarrollador. Estoy motivado por seguir creciendo profesionalmente y siempre abierto a aprender nuevas tecnologías. 
          </p>
          
          <a 
            href="https://wa.me/56963894355" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <Button>
              <Phone size={20} className="mr-2" />
              Hablamos
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
