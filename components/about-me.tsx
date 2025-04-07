

import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto " id="about-me">
            <Title title="Sobre mi" subtitle="Conoceme &#9996;" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    <Carousel opts={{
                        align: "start"
                    }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        

                            <div className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <div key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-[240px] object-contain rounded-lg imagen-sobremi" />
                                    </div>
                                </div>
                            ))}
                        </div>
                       
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">Soy un desarrollador apasionado y Autodidacta especializado en tecnologías como HTML, CSS, JavaScript, ReactJS, GitHub y Node.js que encuentra su mayor inspiración entre líneas de código y algoritmos desafiantes. Cuando no estoy inmerso en la programación, disfruto de un paseo o calistenia al aire libre, creyendo firmemente en mantener un equilibrio entre mente y cuerpo.</p>

                    <a href="https://wa.me/56963894355" target="_blank" rel="noopener noreferrer">
                        <Button>
                            <Phone size={20} className="mr-2" />Hablamos
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
