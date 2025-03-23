import { Menu } from "lucide-react";
import logo from "../assets/logo_b.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
 // State pour savoir si la navbar doit être affichée ou cachée
 const [hidden, setHidden] = useState(false);

 // Effect pour écouter les changements de scroll
 useEffect(() => {
   let lastScrollY = window.scrollY;

   const handleScroll = () => {
     if (window.scrollY > lastScrollY) {
       // Si on descend, on cache la navbar
       setHidden(true);
     } else {
       // Si on remonte, on affiche la navbar
       setHidden(false);
     }
     lastScrollY = window.scrollY;
   };

   // Ajouter l'événement de scroll
   window.addEventListener("scroll", handleScroll);

   // Nettoyer l'événement à la destruction du composant
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);






  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 bg-transparent text-white transition-all duration-900 ${hidden ? "transform -translate-y-full" : ""}`}>
      
      {/* Conteneur Flex principal */}
      <div className="flex items-center justify-between w-full px-4 py-4">
        
        {/* Nom de l'artiste à gauche */}
        <div className="flex-1">
          <a className="text-2xl font-bold">Øverst</a>
        </div>

        {/* Logo centré */}
        <div className="flex justify-center flex-1">
          <img src={logo} alt="Logo Øverst" className="h-16 w-16 object-contain" />
        </div>

        {/* Menus (Desktop et Mobile) à droite */}
        <div className="flex-1 flex justify-end items-center space-x-4">

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal space-x-4">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#music">Musique</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end md:hidden">
            <button tabIndex={0} className="btn btn-square btn-ghost">
              <Menu className="w-6 h-6" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#music">Musique</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;
