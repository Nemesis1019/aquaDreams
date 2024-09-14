import {CommentsComponent,ContactFormComponent,ServicesDescriptionComponent,Navbar, GalleryComponent  } from "../../routes";
import {FondoPrincipal,aquaDreamsLogo,WhatsappIcon,data}  from "../../routes";

export function Home(){
    return(
        <div>
            <Navbar/>
            <div className="fixed bottom-8 right-8 z-20 hover:cursor-pointer">
                <WhatsappIcon size={60} style={{ color: 'green' }}/>
            </div>
            
            <div id="home" className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-white font-bold gap-8" style={{ backgroundImage: `url(${FondoPrincipal})` }}>
                <h1 className="font-bold text-[20px] md:text-[40px]">Diseña la piscina de tus sueños</h1>
                <h2 className="font-bold text-[20px] md:text-[40px]">Comienza ahora mismo</h2>
                <p className="text-[12px] w-[90%] text-center">Nos dedicamos a construir piscinas y spas personalizados según las necesidades, gustos, diseño arquitectónico y presupuesto de cada cliente. Utilizando las últimas innovaciones en tecnología de piscinas, nuestras piscinas se construyen con los más altos estándares de calidad en la mano de obra.</p>
            </div>
            <div id="about" className="bg-white h-auto  flex flex-col justify-center items-center gap-7">
                <h1 className="text-3xl font-bold text-center text-blue-500">Acerca de nosotros</h1>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:w-[80%] w-[100%] ">
                    <img src={aquaDreamsLogo} className="w-[350px]" />
                    <div className="flex flex-col w-[90%] md:w-[50%] gap-4">
                        <p>{data.text[0].description1}</p>
                        <p>{data.text[1].description2}</p>
                    </div>
                </div>
            </div>
            <ServicesDescriptionComponent/>
            <GalleryComponent/>
            <CommentsComponent/>
            <ContactFormComponent/>
        </div>
        
       
    )
}