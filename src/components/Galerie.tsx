import { useEffect } from 'react';

function Galerie() {
  useEffect(() => {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel');

    prevButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }, []);

  return (
    <section id="galerie" className="w-full min-h-screen bg-white text-black py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Ma galerie</h2>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez une sélection de photos et vidéos.
        </p>

        {/* Carrousel */}
        <div className="carousel rounded-box flex overflow-hidden">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Image 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Image 5"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Image 6"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Image 7"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <button className="btn btn-primary carousel-prev">Précédent</button>
          <button className="btn btn-primary carousel-next">Suivant</button>
        </div>
      </div>
    </section>
  );
}

export default Galerie;


