import { Link } from "react-router-dom";
import Toggle from "./Toggle";

export default function NavTop() {
  return (
    <div className="navbar shadow-lg font-body text-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/certificaciones">Certificaciones</Link>
            </li>
            <li>
              <Link to="/sobre-mi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="relative mx-5 sm:mx-2 h-12" src="/home.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-sans">
          <li>
            <Link to="/certificaciones">Certificaciones</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mi</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mx-5">
        <div className="mx-5">
          <Toggle />
        </div>
      </div>
    </div>
  );
}
