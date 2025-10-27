

"use client"

import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Iniciar animación de las barras
                    animateProgressBars();
                }
            },
            {
                threshold: 0.3, // Se activa cuando el 30% de la sección es visible
                rootMargin: "-50px"
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
    }, [isVisible]);

    const animateProgressBars = () => {
        // Recopilar todos los valores únicos de las barras
        const allBars: { [key: string]: number } = {};
        dataExperience.forEach(section => {
            section.experience.forEach(item => {
                allBars[`${section.id}-${item.name}`] = item.value;
            });
        });

        // Inicializar todos los valores en 0
        setAnimatedValues(Object.keys(allBars).reduce((acc, key) => {
            acc[key] = 0;
            return acc;
        }, {} as { [key: string]: number }));

        // Animar cada barra con un pequeño delay
        Object.entries(allBars).forEach(([key, finalValue], index) => {
            setTimeout(() => {
                animateBar(key, finalValue);
            }, index * 100); // 100ms de delay entre cada barra
        });
    };

    const animateBar = (key: string, finalValue: number) => {
        const duration = 1500; // 1.5 segundos
        const steps = 60; // 60 pasos para animación suave
        const increment = finalValue / steps;
        let currentValue = 0;
        let step = 0;

        const animate = () => {
            if (step < steps) {
                currentValue += increment;
                setAnimatedValues(prev => ({
                    ...prev,
                    [key]: Math.min(currentValue, finalValue)
                }));
                step++;
                requestAnimationFrame(animate);
            } else {
                // Asegurar el valor final exacto
                setAnimatedValues(prev => ({
                    ...prev,
                    [key]: finalValue
                }));
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div
            ref={sectionRef}
            className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto"
            id="experience"
        >
            <Title title="Experiencia" subtitle="Habilidades que tengo &#128218;" />

            <div className="grid md:grid-cols-2 gap-8 mt-5">
                {dataExperience.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-400">
                        <h3 className="text-center text-xl">{data.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.experience.map((item) => {
                                const barKey = `${data.id}-${item.name}`;
                                const currentValue = animatedValues[barKey] || 0;


                                return (
                                    <div key={item.name} className="my-4">
                                        <p className="flex gap-2 mb-2">
                                            <BadgeCheck className={`transition-all duration-300 ${isVisible ? ' scale-110' : 'text-gray-400'
                                                }`} />
                                            {item.name}
                                        </p>
                                        <p className="text-gray-400 mb-2">{item.subtitle}</p>
                                        <div className="relative">
                                            <Progress
                                                value={currentValue}
                                                className="w-[60%] transition-all duration-300"
                                            />
                                            <span className="absolute right-2 top-0 text-sm text-gray-500 transition-all duration-300">
                                                {Math.round(currentValue)}%
                                            </span>
                                        </div>
                                    </div>

                                );
                            })}



                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default Experience;