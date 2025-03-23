import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
      {/* Nom de l'artiste */}
      <div className="flex-1 px-4">
        <a className="text-2xl font-bold">Øverst</a>
          </div>
          
           {/* Ton logo */}
        
         <img src="/assets/logo.PNG" alt="Logo Øverst" className="h-12 w-12 object-contain" />
        

      {/* Desktop Menu */}
      <div className="hidden md:flex px-4">
        <ul className="menu menu-horizontal">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#music">Musique</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="dropdown dropdown-end md:hidden px-4">
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
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar