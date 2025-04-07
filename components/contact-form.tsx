
 import { Button } from "./ui/button";
 const ContactForm = () => {
     return (
         <div id="contact-form">
             <form action="https://formspree.io/f/mdkozvby" method="POST" id="form-contact-form">
                
                 <input type="name" name="nombre" id="input-name" 
                 className='input' placeholder=" Ingrese su Nombre" />
                 <input type="email" name="correo" className='input' id="correo" placeholder=" Ingrese su Correo" />
                 <textarea name="message" id="textarea" className='input'placeholder=" Ingrese un mensaje ..."></textarea>
                 <div className='button-center'>
                
                 <Button type='submit'>Enviar</Button>
                 </div>
             </form>
         </div>
     )
 }
 export default ContactForm;