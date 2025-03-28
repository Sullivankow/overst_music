

function Footer() {
  return (
    <footer className="footer footer-center p-10 mb-0 text-white font-gabarito">
  <div>
    <h2 className="text-2xl font-bold">Overst</h2>
    <p className="font-light text-sm font-gabarito">© {new Date().getFullYear()} Overst - Tous droits réservés</p>
          </div>
          

            {/* Logo centré */}
            <div className="flex justify-center flex-1">
  <a href="#home" className="text-white  text-4xl hover:text-gray-400 transition duration-300 font-gabarito">
    =O=
  </a>
</div>

          <div className="flex space-x-6">
              
    {/* Facebook */}
  <a href="https://www.facebook.com/overstmusic" target="_blank" rel="noopener noreferrer">
              <svg className="w-7 h-7 hover:opacity-70 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={32} viewBox="0 0 256 256">
	<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path>
	<path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"></path>
              </svg>
              </a> 

			  {/* Instagram */}
			  <a href="https://www.instagram.com/overst_music/" target="_blank" rel="noopener noreferrer">
    <svg className="w-7 h-7 hover:opacity-70 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={32} viewBox="0 0 256 256">
	<g fill="none">
		<rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect>
		<rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect>
		<path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path>
		<defs>
			<radialGradient id="skillIconsInstagram0" cx={0} cy={0} r={1} gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
				<stop stopColor="#fd5"></stop>
				<stop offset={0.1} stopColor="#fd5"></stop>
				<stop offset={0.5} stopColor="#ff543e"></stop>
				<stop offset={1} stopColor="#c837ab"></stop>
			</radialGradient>
			<radialGradient id="skillIconsInstagram1" cx={0} cy={0} r={1} gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
				<stop stopColor="#3771c8"></stop>
				<stop offset={0.128} stopColor="#3771c8"></stop>
				<stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
			</radialGradient>
		</defs>
	</g>
</svg>
</a>
			  {/* TikTok */}
			  <a href="https://www.tiktok.com/@overst_music" target="_blank" rel="noopener noreferrer">
    <svg className="w-7 h-7 hover:opacity-70 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={32} viewBox="0 0 256 290">
	<path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"></path>
	<path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"></path>
	<path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"></path>
				  </svg>
			  </a>

    {/* Spotify */}
    <a href="https://open.spotify.com/intl-fr/artist/0dC2gjqT1WDMPDgzNNWFAi" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        alt="Spotify"
        className="w-7 h-7 hover:opacity-70 transition"
      />
    </a>

			  {/* SoundCloud */}
			  <a href="https://soundcloud.com/overst-music" target="_blank" rel="noopener noreferrer">
    <svg className="w-7 h-7 hover:opacity-70 transition" xmlns="http://www.w3.org/2000/svg" width={256} height={145} viewBox="0 0 256 145">
	<defs>
		<linearGradient id="logosSoundcloud0" x1="49.719%" x2="49.719%" y1="-27.701%" y2="100.084%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud1" x1="50.208%" x2="50.208%" y1="-25%" y2="100.195%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud2" x1="50.031%" x2="50.031%" y1="-26.166%" y2="100.311%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud3" x1="49.936%" x2="49.936%" y1="-23.196%" y2="100.193%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud4" x1="49.525%" x2="49.525%" y1="-89.845%" y2="101.504%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud5" x1="50.151%" x2="50.151%" y1="-13.846%" y2="100.179%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud6" x1="49.659%" x2="49.659%" y1="-95.238%" y2="100.836%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud7" x1="49.596%" x2="49.596%" y1="-51.09%" y2="100.373%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud8" x1="50.414%" x2="50.414%" y1="-33.211%" y2="100.08%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloud9" x1="50.034%" x2="50.034%" y1="-7.143%" y2="100.168%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundclouda" x1="50.325%" x2="50.325%" y1="-220.199%" y2="147.927%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloudb" x1="49.159%" x2="49.159%" y1="-121.474%" y2="112.576%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloudc" x1="50.422%" x2="50.422%" y1="-94.484%" y2="103.334%">
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="23.93%" stopColor="#f57e20"></stop>
			<stop offset="62.62%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
		<linearGradient id="logosSoundcloudd" x1="49.931%" x2="49.931%" y1="0%" y2="100.017%">
			<stop offset="0%" stopColor="#f7941e"></stop>
			<stop offset="0%" stopColor="#f68b1f"></stop>
			<stop offset="0%" stopColor="#f6871f"></stop>
			<stop offset="24.02%" stopColor="#f57e20"></stop>
			<stop offset="63.06%" stopColor="#f36621"></stop>
			<stop offset="100%" stopColor="#f04923"></stop>
		</linearGradient>
	</defs>
	<path fill="url(#logosSoundcloud0)" d="m109.97 81.482l-1.494-54.487c0-1.694-1.394-2.989-2.988-2.989c-1.693 0-2.988 1.295-2.988 2.989l-1.395 54.487l1.395 26.197c0 1.694 1.394 2.989 2.988 2.989c1.693 0 2.988-1.295 2.988-2.989z"></path>
	<path fill="url(#logosSoundcloud1)" d="m99.212 81.482l-1.693-56.58a2.784 2.784 0 0 0-2.789-2.788a2.784 2.784 0 0 0-2.79 2.789l-1.493 56.48l1.494 26.396a2.784 2.784 0 0 0 2.789 2.79a2.784 2.784 0 0 0 2.79-2.79z"></path>
	<path fill="url(#logosSoundcloud2)" d="M76.003 25.301c-.1-1.295-1.096-2.39-2.39-2.39s-2.292.996-2.391 2.39l-1.694 56.081l1.694 26.795c0 1.295 1.096 2.291 2.39 2.291s2.292-.996 2.391-2.39l1.992-26.796z"></path>
	<path fill="url(#logosSoundcloud3)" d="M86.761 23.409c0-1.395-1.195-2.59-2.59-2.59a2.57 2.57 0 0 0-2.59 2.59l-1.593 57.973l1.593 26.596c0 1.395 1.196 2.59 2.59 2.59c1.395 0 2.49-1.096 2.59-2.59l1.793-26.596z"></path>
	<path fill="url(#logosSoundcloud4)" d="M32.473 109.87c.797 0 1.395-.597 1.494-1.493l2.59-26.995l-2.59-27.89c-.1-.798-.697-1.495-1.494-1.495s-1.394.598-1.494 1.494l-2.291 27.891l2.291 26.995c0 .896.697 1.494 1.494 1.494"></path>
	<path fill="url(#logosSoundcloud5)" d="m120.828 81.482l-1.395-64.747c0-1.096-.597-2.092-1.494-2.69c-.498-.299-1.095-.598-1.793-.598c-.597 0-1.195.2-1.793.499c-.896.597-1.494 1.593-1.494 2.689v.598l-1.195 64.15l1.195 25.998v.1c0 .696.299 1.394.797 1.892c.598.697 1.494 1.195 2.49 1.195c.897 0 1.694-.398 2.291-.896c.598-.598.996-1.395.996-2.291l.1-2.59z"></path>
	<path fill="url(#logosSoundcloud6)" d="M44.327 55.483c-.1-.996-.797-1.693-1.694-1.693s-1.693.697-1.693 1.693l-2.092 25.9l2.092 27.193c.1.996.797 1.693 1.693 1.693c.897 0 1.694-.697 1.694-1.693l2.39-27.194z"></path>
	<path fill="url(#logosSoundcloud7)" d="M52.893 37.354c-.996 0-1.892.797-1.892 1.893l-1.992 42.135L51 108.576c.1 1.096.896 1.892 1.892 1.892s1.893-.796 1.893-1.892l2.291-27.194l-2.291-42.135c0-.996-.897-1.893-1.893-1.893"></path>
	<path fill="url(#logosSoundcloud8)" d="m65.245 108.576l2.092-27.094l-2.092-51.798c-.1-1.195-.996-2.092-2.191-2.092c-1.196 0-2.092.897-2.192 2.092L58.97 81.482l1.892 27.094c0 1.195.996 2.092 2.192 2.092c1.195.1 2.092-.897 2.191-2.092"></path>
	<path fill="url(#logosSoundcloud9)" d="M128.697 7.87a3.44 3.44 0 0 0-1.793-.499a3.48 3.48 0 0 0-2.191.797c-.797.598-1.295 1.594-1.295 2.69v.398l-1.395 70.325l.698 12.95l.697 12.65c0 1.893 1.594 3.387 3.486 3.387s3.387-1.594 3.487-3.486l1.494-25.6l-1.494-70.624c-.1-1.295-.698-2.391-1.694-2.989"></path>
	<path fill="url(#logosSoundclouda)" d="M2.889 96.324c.498 0 .896-.399.996-.996l2.191-13.946l-2.191-14.145c-.1-.597-.498-.996-.996-.996a1 1 0 0 0-.996.996L0 81.382l1.893 13.946c0 .597.498.996.996.996"></path>
	<path fill="url(#logosSoundcloudb)" d="M12.352 104.79c.498 0 .996-.398 1.095-.995l2.89-22.413l-2.89-22.91c-.1-.598-.498-.997-1.095-.997c-.498 0-.996.399-1.096.997l-2.49 22.91l2.49 22.413c.1.597.498.996 1.096.996"></path>
	<path fill="url(#logosSoundcloudc)" d="M22.313 108.875c.697 0 1.195-.498 1.295-1.295l2.69-26.198l-2.69-27.194c-.1-.697-.598-1.295-1.295-1.295s-1.195.498-1.295 1.295l-2.39 27.194l2.39 26.198c.1.697.598 1.295 1.295 1.295"></path>
	<path fill="url(#logosSoundcloudd)" d="M223.626 48.012c-4.283 0-8.367.897-12.152 2.391C208.984 22.213 185.276 0 156.389 0a55.1 55.1 0 0 0-20.022 3.785c-2.39.897-2.988 1.893-2.988 3.686v99.511c0 1.893 1.494 3.387 3.387 3.586h86.96c17.332 0 31.378-13.846 31.378-31.178c-.1-17.332-14.145-31.378-31.478-31.378"></path>
	<path fill="#f04923" d="M25.002 129.494c-3.685-.896-4.681-1.295-4.681-2.789c0-.996.797-2.092 3.287-2.092c2.092 0 3.785.897 5.28 2.39l3.386-3.286c-2.192-2.291-4.881-3.686-8.467-3.686c-4.582 0-8.268 2.59-8.268 6.774c0 4.582 2.989 5.976 7.272 6.873c4.383.996 5.18 1.693 5.18 3.187c0 1.793-1.295 2.49-4.084 2.49c-2.192 0-4.284-.796-5.977-2.689l-3.387 2.988c1.793 2.59 5.18 4.184 8.965 4.184c6.375 0 9.065-2.988 9.065-7.371c.199-4.881-3.885-6.176-7.57-6.973m21.417-9.363c-6.375 0-10.061 4.88-10.061 11.953s3.785 11.953 10.06 11.953s10.061-4.88 10.061-11.953s-3.785-11.953-10.06-11.953m0 19.225c-3.786 0-5.28-3.188-5.28-7.372s1.594-7.37 5.28-7.37c3.785 0 5.28 3.187 5.28 7.37c0 4.184-1.595 7.372-5.28 7.372m28.787-5.877c0 3.685-1.793 5.976-4.781 5.976s-4.781-2.39-4.781-6.076v-12.95h-4.682v13.05c0 6.773 3.785 10.558 9.363 10.558c5.877 0 9.364-3.884 9.364-10.558v-12.95h-4.682v12.95zm24.604-3.188c0 1.295.1 4.184.1 5.08c-.3-.597-1.096-1.793-1.594-2.59l-8.268-12.252h-4.482v23.21h4.582v-10.26c0-1.295-.1-4.184-.1-5.08c.3.597 1.096 1.792 1.594 2.59l8.467 12.65h4.184v-23.21H99.71v9.862zm17.83-9.861h-7.271v23.209h6.873c5.977 0 11.854-3.486 11.854-11.555c0-8.566-4.881-11.654-11.456-11.654m-.398 18.726h-2.291v-14.144h2.49c4.881 0 6.973 2.39 6.973 7.072c0 4.184-2.291 7.072-7.172 7.072m26.198-14.443c2.092 0 3.386.896 4.283 2.49l4.283-1.992c-1.494-2.988-4.084-5.18-8.467-5.18c-6.076 0-10.26 4.881-10.26 11.953c0 7.272 4.084 11.954 10.16 11.954c4.184 0 6.973-1.992 8.567-5.28l-3.885-2.29c-1.195 2.091-2.49 2.988-4.582 2.988c-3.486 0-5.478-3.188-5.478-7.372c0-4.283 1.992-7.271 5.379-7.271m17.232-4.283h-4.681v23.209h13.945v-4.582h-9.264zm21.516-.3c-6.375 0-10.06 4.882-10.06 11.954s3.785 11.953 10.06 11.953c6.375 0 10.061-4.88 10.061-11.953s-3.686-11.953-10.06-11.953m0 19.226c-3.785 0-5.28-3.188-5.28-7.372s1.595-7.37 5.28-7.37c3.786 0 5.28 3.187 5.28 7.37c0 4.184-1.494 7.372-5.28 7.372m28.788-5.877c0 3.685-1.793 5.976-4.781 5.976c-2.989 0-4.782-2.39-4.782-6.076v-12.95h-4.681v13.05c0 6.773 3.785 10.558 9.363 10.558c5.877 0 9.363-3.884 9.363-10.558v-12.95h-4.681v12.95zm17.73-13.05h-7.271v23.21h6.873c5.977 0 11.854-3.486 11.854-11.555c0-8.566-4.881-11.654-11.455-11.654m-.398 18.727h-2.191v-14.144h2.49c4.88 0 6.873 2.39 6.873 7.072c0 4.184-2.29 7.072-7.172 7.072"></path>
</svg>
       </a>       



  </div>
</footer>

  )
}

export default Footer