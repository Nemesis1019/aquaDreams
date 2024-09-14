import { data } from "../../routes"


export function CommentsComponent(){

    return(
        <section id="clients" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-5 text-blue-500">Nuestros clientes</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.comments_data.map((comment, index) => (
            <div key={index} className="border-2 border-blue-300 bg-white p-6 rounded-lg shadow-md text-center">
              <img src={comment.image} alt={comment.name} className="rounded-full mx-auto w-24 h-24" />
              <p className="mt-4">{comment.comment}</p>
              <h4 className="mt-2 font-bold">{comment.name}</h4>
            </div>
          ))}
        </div>
      </section>
    )
}