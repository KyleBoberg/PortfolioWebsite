import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SVSCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, //make this based on screen size breakpoints
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}
        style={{margin: "3rem", marginTop: "0"}}
    >
      <div>
        <img src="/SVS_homescreen.jpg" alt="Stan Vs Stan homepage" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div>
        <h3>What is Stan Vs Stan?</h3>
        <p>Stan vs Stan is an online multi-player real time song guessing game. Login with Spotify, 
            and try to out "stan" your friends. Built with a React front-end, Node.js backend, and MongoDB database, 
            the app uses the Spotify API to fetch song data and user information, and the Spotify "WebPlayer" to play songs right in the users browser. 
            Real-time multiplayer functionality is implemented using WebSockets, allowing players to hear synchronized songs and buzz in as soon as they have a guess. 
            The game is deployed on AWS, so login anywhere and get to "stanning"!
        </p>

        <h3>Where can I play?</h3>
        <p>Check it out here: <a href="https://stanvstan.com" target="_blank" rel="noopener noreferrer">stanvstan.com</a>. 
        <br /> 
        Currently, the game is in alpha, and since Spotify has recently changed its API access policies, it is stuck in "develop mode" since
        250,000 monthly users are required to take it out of develop, but while it is in develop mode only 25 whitelisted users can login. 
        Please reach out with your Spotify name and email to be whitelisted, and/or view the <a href="https://youtu.be/5S9LbVvpL-Q" target="_blank" rel="noopener noreferrer">demo</a>.
        
        </p>
      </div>
      <div>
        <img src="/SVS_gameplay.jpg" alt="Stan Vs Stan gameplay" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div>
        <img src="/SVS_tech_stack.png" alt="Stan Vs Stan tech stack diagram" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div >
        <div className="aspect-ratio" >
            <iframe frameborder="0" width="100%" height="450px" allowfullscreen
            style={{borderRadius: "8px", border: "none"}}
                src="https://www.youtube.com/embed/5S9LbVvpL-Q">
            </iframe>
        </div>
      </div>
    </Slider>
  );
}
