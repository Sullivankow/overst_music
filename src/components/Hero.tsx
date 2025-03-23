

function Hero() {
  return (
    <div
    className="hero min-h-screen"
    style={{ backgroundImage: "url('src/assets/landscape.jpg')" }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Nouvel album dispo !</h1>
        <p className="mb-5">Découvre l'univers de l'artiste</p>
        <button className="btn btn-primary">Écouter maintenant</button>
      </div>
    </div>
  </div>

  )
}

export default Hero