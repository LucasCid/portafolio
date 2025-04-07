import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";
import '../styles.css';

const Introduction = () => {
    return (
        <Container>
            <div>
                <div className="text-center" id="home">
                    <h3 className="text-xl mb-3">Hola Soy</h3>
                    <h1 className="text-4xl font-bold mb-3">Lucas Cid 👨‍💻</h1>
                    <h2 className="text-2xl text-gray-400">Frontend Developer</h2>
                    <div className="flex items-center">
                        <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                            <Link className={buttonVariants()} href="#contact" >
                                <Mail className="mr-2" /> Contacta Conmigo
                            </Link>

                            <Link className={buttonVariants({variant: 'secondary'})} href="/LUCAS-CID-CV.pdf" target="_blank" download="LUCAS-CID-CV.pdf">
                        <Paperclip className="mr-2"/> Descargar CV
                        </Link> 
                            

                        </div>
                    </div>
                    <Image className="imagen-perfil" src="/profile1.png" alt="Profile pic" width={250} height={250} />
                </div>
            </div>
        </Container>
    );
}

export default Introduction