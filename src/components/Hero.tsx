

function Hero() {
  return (
    <div
      id="home"
      className="hero min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/overst_music/assets/bg-vintage2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Contenu principal */}
      <div className="hero-content text-center text-neutral-content flex flex-col md:flex-row md:items-center gap-8">
        {/* Texte et bouton */}
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-gabarito">Nouveau morceau dispo !</h1>
          <p className="mb-5 font-gabarito">Découvre l'univers d' ØVERST</p>
          <a href="#music">
            <button className="btn btn-primary font-gabarito">Écouter maintenant</button>
          </a>
        </div>

        {/* Vidéo */}
        <div className="max-w-2xl w-full md:max-w-lg">
          <video controls className="rounded-lg shadow-lg w-full">
            <source src="/overst_music/assets/aftermovie.mp4" type="video/mp4" />
            Ton navigateur ne supporte pas les vidéos HTML5 😢
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;



