import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { FiMousePointer } from "react-icons/fi";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <FiMousePointer  size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Practicante desarrollo web",
        subtitle: "Centro Nacional de Control de Energía (CENACE)",
        description: "Colabore con un equipo dinámico para desarrollar interfaces de usuario atractivas y en la implementación de sistemas basados en microservicios y APIs, aplicando el patrón de diseño DDD (Domain-Driven Design).",
        date: "Ene 2024 ",
    },
    {
        id: 2,
        title: "Desarrollo web ",
        description: "-Creación de aplicación web de menú de bebidas desarrollada con React JS consumiendo una API -Aplicación movil agenda de contactos desarrollada con React Native. -Desarrollo de aplicación web progresiva para registro de usuarios utilizando React JS..",
        date: "2023",
    },
    {
        id: 3,
        title: "Practicante ",
        subtitle: "Infrusch",
        description: "Desarrollo de aplicación web para registro de servicio utilizado java jsp.",
        date: "2022",
    },
]

export const dataCounter = [

];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Registro de usuarios.",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/edgarmaster1/PWA-Registro-de-usuarios",
        
    },
    {
        id: 2,
        title: "Menú de cócteles.",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/edgarmaster1/menu-de-cocteles-react",

    },
    {
        id: 3,
        title: "Agenda de contactos.",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/edgarmaster1/agenda-de-contactos-react-native",

    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Edgar Angeles Gonzalez",
        description: "📍Pachuca de Soto, Hidalgo, México.\n angelesgonzalezedgar@gmail.com ",
        
        imageUrl: "/perfil.png",
    },
];