import Button from "./Button";
import Toggle from "./Toggle";

export default function NavTop() {
  return (
    <header className="lg:mb-20 md:pb-15 sm:pb-0 shadow-lg font-normal max-h-20 position-">
      <div className="flex items-center justify-between">
        <Toggle />
        <div className="flex items-center justify-center lg:h-20 md:h-16 sm:h-10">
          <ul className="flex mx-10">
            <li className="mx-5">
              <Button
                onClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
                children={"Certificaciones"}
              />
            </li>
            <li className="mx-5">
              <Button
                onClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
                children={"Sobre mi"}
              />
            </li>
            <li className="mx-5">
              <Button
                onClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
                children={"Contacto"}
              />
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
}
