

function Hero() {
  return (
    <div id="home"
    className="hero min-h-screen"
    style={{ backgroundImage: "url('src/assets/bg-vintage2.jpg')" }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold font-gabarito">Nouveau morceau dispo !</h1>
          <p className="mb-5 font-gabarito">Découvre l'univers d' ØVERST</p>
          <a href="#music">
          <button className="btn btn-primary font-gabarito">Écouter maintenant</button>
          </a>
        </div>
        
         {/* Vidéo dans le contenu */}
         <div className="max-w-2xl w-full">
          <video controls className="rounded-lg shadow-lg w-full">
            <source src="src\assets\aftermovie.mp4" type="video/mp4" />
            Ton navigateur ne supporte pas les vidéos HTML5 😢
          </video>
        </div>
    </div>
  </div>

  )
}

export default Hero