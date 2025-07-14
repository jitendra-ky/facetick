import './Banner.css';

function Banner() {
  return (
    <div className="mycontainer banner">
      <div className="banner-image">
        <div className="holder glass">
          <div className="image">
            <img src="jiten.png" alt="jitendra k.y , jitendraky.tech" />
          </div>
        </div>
        {/* <div className="lavitate one glass">Welcome</div> */}
      </div>
      <div className="banner-txt">
        <div className="txt-holder">
          <div className="hi">Hi I'm</div>
          <div className="name">Jitendra K.Y.</div>
          <div className="edu">B.Tech CSE & AI, IET Lucknow (2023-27)</div>
          <div className="skill mb-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-200 font-medium">Fullstack Web-Developer</span>
                <div className="flex gap-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-200 font-medium">Data Structure & Algorithms</span>
                <div className="flex gap-1">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-gray-500 text-lg">★</span>
                  <span className="text-gray-500 text-lg">★</span>
                  <span className="text-gray-500 text-lg">★</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-full font-semibold text-sm shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Open to Work
            </div>
            <a 
              href="https://docs.google.com/document/d/1kXlk6ai6kKQXWo8b2A6XGaAH8VWA_kwekGo4vk331-s/preview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-inherit px-5 py-3 rounded-full font-semibold text-sm no-underline hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Resume
              <span className="text-xs opacity-70 hover:opacity-100 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;