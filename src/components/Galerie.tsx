import { useEffect } from 'react';

function Galerie() {
  useEffect(() => {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel');

    if (prevButton && carousel) {
      prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });
    }

    if (nextButton && carousel) {
      nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <section id="galerie" className="w-full min-h-screen  text-white py-16 items-center"  style={{ backgroundImage: "url('/overst_music/assets/bg-vintage9.jpg')" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 font-gabarito">Ma galerie</h2>
        <p className="text-lg text-white-600 mb-8 font-gabarito">
          Découvrez une sélection de photos et vidéos.
        </p>

        {/* Carrousel */}
        <div className="carousel rounded-box flex overflow-hidden">
          
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overst2.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overstDj2.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overstDj3.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overstDj4.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overstDj5.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/overst_music/assets/overstdj.jpg"
              alt="Overst"
              className="object-cover w-[300px] h-[300px] rounded"
            />
          </div>
         
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <button className="btn bg-white text-black font-gabarito carousel-prev">Précédent</button>
          <button className="btn bg-white text-black font-gabarito carousel-next">Suivant</button>
        </div>
      </div>
    </section>
  );
}

export default Galerie;


