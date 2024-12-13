import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SobreMiHero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 mx-20 my-20 sm:mx-1 sm:my-1 rounded-3xl shadow-xl py-1 sm:py-16 lg:py-24 font-body">
        <div className="pl-1 pr-4 mx-auto max-w-7xl sm:pl-1 sm:pr-4 lg:pl-1 lg-pr-8  ">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <div className="my-5 mx-5">
                <DotLottieReact src="./codingAvatar.lottie" loop autoplay />
              </div>
            </div>

            <div>
              <h2 className="text-secondary text-2xl font-bold sm:text-sm lg:text-4xl lg:leading-tight">
                Codificando soluciones
              </h2>
              <p className=" leading-relaxed my-5">
                Soy desarrollador web hace ya 3 años. Fui capacitandome y
                trabajando en distintos proyectos para adquirir experiencia.
                Disfruto lo que hago y tengo el compromiso de brindar productos
                de calidad utilizando las tecnologías de vanguardia. Tengo buen
                desenpeño para trabajar en equipo, la comunicación y
                colaboración son clave para alcanzar los objetivos. Estoy
                siempre abierto a nuevos desafíos, me sigo capacitando
                constantemente y tengo creatividad a la hora de resolver
                poblemas. Tengo formación en diseño audiovisual entendiendo bien
                la composición y estetica adecuada para cada proyecto.
              </p>
              <p className="mt-6 text-xl leading-relaxed text-secondary">
                Actualmente estoy abierto a ofertas laborales y nuevos
                proyectos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMiHero;
