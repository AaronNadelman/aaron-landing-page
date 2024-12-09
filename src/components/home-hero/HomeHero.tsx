function HomeHero() {
  return (
    <div>
      <section className="lg:my-20 overflow-hidden md:my-15 sm:my-5 2xl:pt-16 shadow-xl shadow-slate-800 lg:mx-20 md:mx-5 sm:mx-0">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className=" grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hola 👋 soy <br className="block sm:hidden" />
                Aaron Nadelman
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Desarrollador web front-end con experiencia como freelancer.
                Especializado en React js, figma y typescript. Sigo en constante
                formación y estoy abierto a nuevos desafíos con compromiso y
                buen trabajo en equipo.{" "}
              </p>

              <div className="mt-4 text-xl text-gray-600 md:mt-8">
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Descargar Resume
                </a>
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
