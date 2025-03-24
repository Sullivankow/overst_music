

function Hero() {
  return (
    <div id="home"
    className="hero min-h-screen"
    style={{ backgroundImage: "url('src/assets/landscape.jpg')" }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold font-gabarito">Nouveau morceau dispo !</h1>
        <p className="mb-5 font-gabarito">Découvre l'univers d' ØVERST</p>
        <button className="btn btn-primary font-gabarito">Écouter maintenant</button>
      </div>
    </div>
  </div>

  )
}

export default Hero