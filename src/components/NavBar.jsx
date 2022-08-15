import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen,setNav,nav] = React.useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "Skill",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (

    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <h1 className="text-white text-5xl font-signature ml-2">Vaibhav</h1>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FaBars size={30} />
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        {links.map(({ id, link }) => (
          <li className="nav-item px-4 cursor-pointer capitalize py-2 text-sm" key={id}  >
            <Link className="text-white"
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
          </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
