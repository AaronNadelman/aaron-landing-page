import Button from "./Button";

export default function NavTop() {
  return (
    <header className="pb-6 md:pb-3 lg:pb-0 bg-[url('./assets/BackgroundNav.jpg')] bg-cover font-bold">
      <div className="flex items-center justify-between lg:h-20 md:h-16 sm:h-10">
        <div className="mx-5">
          <Button />
        </div>
        <h1>navbarr</h1>

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
