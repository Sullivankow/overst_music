

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-black text-white">
  <div>
    <h2 className="text-2xl font-bold">Overst</h2>
    <p className="font-light text-sm">© {new Date().getFullYear()} Overst - Tous droits réservés</p>
  </div>

  <div className="flex space-x-6">
    {/* Facebook */}
    <a href="https://facebook.com/tonprofil" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        className="hover:fill-blue-500 transition"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 7 9.54V14.89H6.5V12h2.5v-2.23c0-2.47 1.463-3.84 3.705-3.84 1.074 0 2.195.192 2.195.192v2.42h-1.237c-1.218 0-1.595.757-1.595 1.533V12h2.72l-.435 2.89h-2.285v6.65A10 10 0 0 0 22 12z" />
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/tonprofil" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        className="hover:fill-pink-500 transition"
      >
        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.25 2.43.41a4.92 4.92 0 0 1 1.74 1.01 4.92 4.92 0 0 1 1.01 1.74c.16.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.25 1.97-.41 2.43a4.92 4.92 0 0 1-1.01 1.74 4.92 4.92 0 0 1-1.74 1.01c-.46.16-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.25-2.43-.41a4.92 4.92 0 0 1-1.74-1.01 4.92 4.92 0 0 1-1.01-1.74c-.16-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.25-1.97.41-2.43a4.92 4.92 0 0 1 1.01-1.74 4.92 4.92 0 0 1 1.74-1.01c.46-.16 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.51.012-4.75.07-1.01.05-1.56.22-1.92.37-.48.18-.82.4-1.18.76a3.37 3.37 0 0 0-.76 1.18c-.15.36-.32.91-.37 1.92-.058 1.24-.07 1.59-.07 4.75s.012 3.51.07 4.75c.05 1.01.22 1.56.37 1.92.18.48.4.82.76 1.18.36.36.7.58 1.18.76.36.15.91.32 1.92.37 1.24.058 1.59.07 4.75.07s3.51-.012 4.75-.07c1.01-.05 1.56-.22 1.92-.37.48-.18.82-.4 1.18-.76.36-.36.58-.7.76-1.18.15-.36.32-.91.37-1.92.058-1.24.07-1.59.07-4.75s-.012-3.51-.07-4.75c-.05-1.01-.22-1.56-.37-1.92a3.37 3.37 0 0 0-.76-1.18 3.37 3.37 0 0 0-1.18-.76c-.36-.15-.91-.32-1.92-.37-1.24-.058-1.59-.07-4.75-.07zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 1.8a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm5.3-1.25a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
      </svg>
    </a>

    {/* TikTok */}
    <a href="https://tiktok.com/@tonprofil" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0a/TikTok_logo.svg"
        alt="TikTok"
        className="w-7 h-7 hover:opacity-70 transition"
      />
    </a>

    {/* Spotify */}
    <a href="https://open.spotify.com/artist/tonprofil" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        alt="Spotify"
        className="w-7 h-7 hover:opacity-70 transition"
      />
    </a>

    {/* SoundCloud */}
    <a href="https://soundcloud.com/tonprofil" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Soundcloud-icon-logo.png"
        alt="SoundCloud"
        className="w-7 h-7 hover:opacity-70 transition"
      />
    </a>
  </div>
</footer>

  )
}

export default Footer