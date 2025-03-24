import Footer from "./Footer"


function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen  text-white py-16 px-4" style={{ backgroundImage: "url('src/assets/bg-vintage6.jpg')" }}>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 font-gabarito">Contact & Partenariats</h2>
    <p className="text-lg text-white-600 mb-12 font-gabarito">
      Vous souhaitez collaborer ou en savoir plus ? Envoyez-moi un message !
    </p>

    <form className="space-y-6 text-left mb-16">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white-700 font-gabarito">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          className="mt-1 block w-full p-3 border border-white-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white-700 font-gabarito">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          className="mt-1 block w-full p-3 border border-white-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white-700 font-gabarito">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Expliquez votre projet ou demande de partenariat..."
          className="mt-1 block w-full p-3 border border-white-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-3 px-4 rounded-md hover:bg-white-800 transition font-gabarito"
      >
        Envoyer
      </button>
    </form>
      </div>
      <Footer />
</section>

  )
}

export default Contact