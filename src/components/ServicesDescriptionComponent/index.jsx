import { data } from "../../routes"

export function ServicesDescriptionComponent(){

    return(
    <section id="services" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-500">Nuestros Servicios</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.services.map((service, index) => (
          <div key={index} className=" flex flex-row justify-center items-center p-6 border-2 border-blue-300 rounded-lg shadow-md w-full gap-10">
            <div className="w-[100px] h-[100px] border-4 border-gray-200 text-gray-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white rounded-full flex flex-col justify-center items-center"><p>{index+1}</p></div>
            <div className="flex flex-col w-[50%]">
              <h3 className="mt-4 text-xl  text-blue-500 font-bold">{service.name}</h3>
              <p>{service.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
    )
}