import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Trabajos Recientes &#128188;" />

            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="group relative">
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image src={data.image} alt={data.title} width={300} height={300} className="rounded-2xl w-full" />
                            
                            {/* Cortina animada */}
                            <div className="absolute top-full left-0 w-full h-full bg-black/80 text-white flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out group-hover:top-0">
                                <h3 className="text-lg font-semibold">{data.title}</h3>
                                <p key={data.description} className="text-sm mt-2">{data.description}</p>
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
        </div>
    );
};

export default Portfolio;
