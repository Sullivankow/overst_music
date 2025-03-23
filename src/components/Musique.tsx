
import overstDj from "../assets/overstdj.jpg"

function Musique() {
  return (
    <section id="music" className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center px-4 pt-8 pb-16" style={{ backgroundImage: `url(${overstDj})` }}>
    <div className="max-w-5xl mx-auto text-center ">
      
      {/* Titre de la section */}
      <h2 className="text-4xl font-bold mb-8">Ma musique</h2>

      {/* Description de la section */}
      <p className="text-lg text-black-300 mb-8">
        Découvrez mes morceaux disponibles sur Spotify. Écoutez et laissez-vous emporter par l'univers sonore que j'ai créé pour vous.
      </p>

      {/* Intégration du lecteur Spotify */}
      <div className="flex justify-center w-full max-w-4xl mx-auto ">
  <iframe
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/artist/0dC2gjqT1WDMPDgzNNWFAi?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
              </div>
  </section>
  )
}

export default Musique