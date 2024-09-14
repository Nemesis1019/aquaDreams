import { FacebookIcon,InstagramIcon,XIcon } from "../../routes";

export function ContactFormComponent(){
    return (
        <section id="contact" className="py-12 bg-gray-200 text-black h-auto">
          <div className="w-full h-[60px] bg-blue-500 flex flex-row justify-center items-center gap-12 ">
            <FacebookIcon size={25} color="white" className="hover:text-gray-300 hover:scale-150 hover:ease-out duration-300"/>
            <InstagramIcon size={25} color="white" className="hover:text-gray-300 hover:scale-150 hover:ease-out duration-300"/>
            <XIcon size={25} color="white" className="hover:text-gray-300 hover:scale-150 hover:ease-out duration-300"/>
          </div>
          <h2 className="text-3xl font-bold text-center mb-5 text-blue-500">Contáctanos</h2>
          <form className="mt-8 max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Nombre" className="w-full p-2 rounded-md text-black" />
            <input type="email" placeholder="Correo Electrónico" className="w-full p-2 rounded-md text-black" />
            <textarea placeholder="Mensaje" className="w-full p-2 rounded-md text-black" rows="5"></textarea>
            <button type="submit" className="w-full py-3 bg-blue-500 text-black rounded-md hover:bg-blue-600">
              Enviar Mensaje
            </button>
          </form>
        </section>
      );
}