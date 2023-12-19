// components/Menu.tsx
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/">
            <a className="text-white">Inicio</a>
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/about">
            <a className="text-white">Acerca de</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-white">Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
