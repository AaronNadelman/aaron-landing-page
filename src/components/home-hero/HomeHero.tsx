import resume from "/AaronNadelmanEsp.pdf";

function HomeHero() {
  return (
    <div>
      <section className="font-body  rounded-3xl lg:my-20 overflow-hidden md:my-10 md:py-5 sm:my-5 2xl:pt-16 shadow-xl lg:mx-20 md:mx-5 sm:mx-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className=" grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Hola 👋 soy <br className="block sm:hidden" />
                Aaron Nadelman
              </h2>
              <p className=" max-w-lg mt-3 text-xl leading-relaxed md:mt-8">
                Desarrollador web front-end con experiencia como freelancer.
                Especializado en React js, figma y typescript. Sigo en constante
                formación y estoy abierto a nuevos desafíos con compromiso y
                buen trabajo en equipo.{" "}
              </p>

              <div className="mt-4 text-xl md:mt-8">
                <button className="btn btn-outline btn-secondary">
                  <a download={resume} href={resume}>
                    descargar CV
                  </a>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/my-pictureTransparent.png"
                alt="Self picture w-50"
              />
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default HomeHero;
