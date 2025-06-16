import './Banner.css';

function Banner() {
  return (
    <div className="mycontainer banner">
      <div className="banner-image">
        <div className="holder glass">
          <div className="image">
            <img src="jiten.png" alt="jitendra k.y , jitendra.me" />
          </div>
        </div>
        {/* <div className="lavitate one glass">Welcome</div> */}
      </div>
      <div className="banner-txt">
        <div className="txt-holder">
          <div className="hi">Hi I'm</div>
          <div className="name">Jitendra K.Y.</div>
          <div className="edu">B.Tech CSE & AI, IET Lucknow (2023-27)</div>
          <div className="skill">
            <ul>
              <li> Fullstack Web-Developer <span className='tag'>Advance</span></li>
              <li> Data Structure & Algorithms <span className='tag'>Intermediate</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;