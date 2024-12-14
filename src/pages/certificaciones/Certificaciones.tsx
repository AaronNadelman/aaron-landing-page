import { certificacionesLista } from "./certificacionesLista";

const Certificaciones = () => {
  return (
    <div className="flex justify-center lg:py-12 flex-wrap p-3">
      {certificacionesLista.map((certification) => (
        <div
          key={certification.id}
          className=" card card-compact flex-auto max-w-80 mx-5 my-5 shadow-xl hover:scale-110"
        >
          <div className="bg-white">
            <img
              src={certification.img}
              alt={certification.title}
              title={certification.title}
            />
          </div>

          <div className="card-body">
            <h2 className="card-title underline decoration-solid">
              {certification.title}
            </h2>
            <h3 className="">{certification.skills}</h3>
            <p>{certification.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificaciones;
