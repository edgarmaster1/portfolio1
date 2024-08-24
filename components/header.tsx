"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

// Define las redes sociales
const socialNetworks = [
  {
    id: 1,
    logo: <FaLinkedin />,
    src: "https://www.linkedin.com/in/edgar-angeles-gonzalez-84b97a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    id: 2,
    logo: <FaGithub />,
    src: "https://github.com/edgarmaster1",
  },
];

const Header = () => {
  return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Edgar
              <span className="text-secondary">Angeles Gonzalez</span>
            </h1>
            
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link 
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                <span className="text-2xl">{logo}</span> {/* Aplicar clase de tamaño y estilo */}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
