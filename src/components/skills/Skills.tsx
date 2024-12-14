const Skills = () => {
  return (
    <section className="py-5 shadow-transparent bg-fuchsia-300 bg-opacity-20 sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 lg:py-6 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/htmlIcon.png"
              alt="Html logo"
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/css.png"
              alt="Css logo"
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/jsIcon.png"
              alt="Javascript logo"
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/reactIcon.png"
              alt="React js logo"
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/tailwind.png"
              alt="Tailwind logo"
            />
          </div>

          <div>
            <img
              className="object-contain w-auto mx-auto h-14"
              src="/skills/typescriptIcon.png"
              alt="Tyescript logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
