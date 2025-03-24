import imgOverst from "../assets/overst.jpg"

function About() {
  return (
    <section
    id="about"
    className="w-full min-h-screen text-white flex items-center justify-center px-4 py-16"style={{ backgroundImage: "url('src/assets/bg-vintage7.jpg')" }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Image de l'artiste */}
      <div className="w-full md:w-1/2">
        <img
          src={imgOverst}
          alt="Øverst portrait"
          className="rounded-xl shadow-2xl object-cover w-full h-auto md:h-[500px]"
        />
      </div>

      {/* Texte de présentation */}
      <div className="w-full md:w-1/2 text-justify space-y-6">
        <h2 className="text-4xl font-bold text-center font-gabarito mb-6 md:mb-12">
          À propos de Øverst
        </h2>

        <p className="text-lg leading-relaxed text-gray-300 font-gabarito">
          Øverst, de son vrai nom Sullivan, est un artiste-producteur originaire de Châteauroux, dans la région de l’Indre en France. En 2009, il découvre la production musicale électronique (MAO) et toutes ses possibilités créatives. C’est à ce moment-là qu’il fait ses premiers pas avec des logiciels de musique, débutant ses premières productions sous le nom de SundLy, en se concentrant sur la Progressive House. Il sort son morceau <strong>Solaris</strong> en février 2019 sous le label Midnight Aurora Records, qui sera remixé plusieurs fois et utilisé pour un clip vidéo.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 font-gabarito">
          Au fil des années, il perfectionne ses compétences en composition, trouvant progressivement son propre style, tout en se produisant en live lors d’événements comme la Fête de la Musique à deux reprises, sur la scène de l’Équinoxe à Châteauroux. Fort de ces expériences, le projet Øverst voit officiellement le jour en 2021. Il évolue quelque part entre la joie et la tristesse, créant une atmosphère intrigante et émotionnellement riche.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 font-gabarito">
          Øverst a sorti deux morceaux, <strong>Terra</strong> et <strong>Rêverie</strong>, aux influences électro-pop avec une touche rétro. En 2023, il publie deux nouveaux titres, <strong>Loneliness</strong> et <strong>Divinity</strong>, signés avec Elliptical Sun Records et Pur Zynth Rekords. Ces morceaux offrent un mélange captivant de sonorités à la fois joyeuses et mélancoliques, qui s’harmonisent pour créer une ambiance unique.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mb-6 font-gabarito">
          Cependant, en contraste, une profondeur sombre sous-tend toutes ses compositions. Avec des accords mineurs, des nappes de synthétiseurs profondes et des percussions lourdes, Øverst insuffle à sa musique une aura de mélancolie, de mystère et de réflexion.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="#music"
            className="inline-block px-8 py-3 bg-white text-black font-gabarito font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Découvrir sa musique
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About