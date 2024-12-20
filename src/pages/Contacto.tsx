import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState } from "react";

interface FormData {
  name: string;
  subject: string;
  location: string;
  companyName?: string;
  email: string;
}

const MyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    location: "",
    companyName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Aquí puedes enviar los datos a un servidor
  };

  return (
    <div className="flex-row">
      <div className="mx-10">
        <DotLottieReact src="./mainScene.lottie" autoplay loop />
      </div>
      <div className="flex flex-col items-center justify-center mx-10">
        <h1 className="text-3xl font-bold mb-4">Formulario de Contacto</h1>
        <p className="mb-8">Por favor, completa los siguientes campos.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="blocktext-sm font-bold mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tu asunto"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email"
            />
          </div>
          {/* Resto de los campos (subject, location, companyName, email) con la misma estructura */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
