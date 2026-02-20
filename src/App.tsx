import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Musique from "./components/Musique"
import Galerie from "./components/Galerie"
import Contact from "./components/Contact"

import "./App.css"





function App() {

  return (

    <div>


      <div>
        <Navbar />
        <Hero />
      </div>


      
      <div>
<About />
      </div>
      

      <div>
        <Musique />
      </div>
      
      <div>
        <Galerie />
      </div>

      <div>
        <Contact />
        
      </div>
      

  
        


      


</div>
  )

}

export default App
