import './Banner.css';

function Banner() {
  return (
    <div className="container banner">
      <div className="banner-image">
        <div className="holder glass">
          <div className="image">
            <img src="jiten.png" alt="jitendra" />
          </div>
        </div>
        {/* <div className="lavitate one glass">Python</div> */}
      </div>
      <div className="banner-txt">
        <div className="txt-holder">
          <div className="hi">Hi I'm</div>
          <div className="name">Jitendra K.Y.</div>
          <div className="edu">B.Tech CSE & AI, IET Lucknow (2023-27)</div>
          <div className="skill">
            <ul>
              <li>full-Stack Developer</li>
              <li>Problem solving with Python</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;