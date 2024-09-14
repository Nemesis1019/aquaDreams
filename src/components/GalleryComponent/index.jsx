import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { piscina_1,piscina_2,piscina_3,piscina_4,piscina_5 } from '../../routes';

export function GalleryComponent(){

    const settings = {
        dots: true, // Mostrar puntos de navegación
        infinite: true, // Desplazamiento infinito
        speed: 500, // Velocidad de transición en milisegundos
        slidesToShow: 3, // Número de slides visibles
        slidesToScroll: 1, // Número de slides que se desplazan en cada clic
        autoplay: true, // Reproducción automática
        autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
      };

    return(
        <section id='jobs' className="py-12 h-auto md:min-h-screen ">
        <h2 className="text-3xl font-bold text-center mb-5 text-blue-500">Nuestras Piscinas</h2>
        <div className="mx-auto px-4">
          <Slider {...settings}>
            <div className="flex justify-center items-center p-4">
              <img src={piscina_1} alt="Slide 1" className="w-[400px] h-[400px] object-cover rounded-lg" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img src={piscina_2} alt="Slide 2" className="w-[400px] h-[400px] object-cover rounded-lg" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img src={piscina_3} alt="Slide 3" className="w-[400px] h-[400px] object-cover rounded-lg" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img src={piscina_4} alt="Slide 4" className="w-[400px] h-[400px] object-cover rounded-lg" />
            </div>
            <div className="flex justify-center items-center p-4">
              <img src={piscina_5} alt="Slide 5" className="w-[400px] h-[400px] object-cover rounded-lg" />
            </div>
          </Slider>
        </div>
      </section>
    )
}