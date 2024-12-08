import Button from "./Button";

export default function NavTop() {
  return (
    <header className="lg:mb-20 md:pb-15 sm:pb-0 shadow-lg font-normal max-h-20">
      <div className="flex items-center justify-between lg:h-20 md:h-16 sm:h-10">
        <div className="mx-5">
          <Button />
        </div>
        <h1>ADN - Soluciones</h1>

        <ul className="flex mx-10">
          <li className="mx-5">link1</li>
          <li className="mx-5">link2</li>
          <li className="mx-5">link2</li>
          <li className="mx-5">link2</li>
        </ul>
      </div>
    </header>
  );
}
