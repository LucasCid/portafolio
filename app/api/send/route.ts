import {Resend} from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request){
    try{
        const dataForm = await req.json();
        try{
            const data = await resend.emails.send({
                from: "Acme <onboarding@ressed.dev>",
                to: ["lucascidcanete@gmail.com"],
                subject: "Lucas Cid landing",
                react: EmailTemplate({
                    firstName: dataForm.username,
                    message: dataForm.mesage,
                    email: dataForm.email,
                }),
                text: "LucasCid",
            });
            return Response.json(data);
        }catch (error){
            return Response.json({error});
        }
    } catch(error){
        return Response.json({error})
    }
}