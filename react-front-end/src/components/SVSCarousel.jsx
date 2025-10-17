import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from 'react-responsive'

export default function SVSCarousel() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTabletOrMobile ? 1 : 2, //make this based on screen size breakpoints
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}
        style={{margin: "3rem", marginTop: "0"}}
    >
        <div>
        <h3>What is Stan Vs Stan?</h3>
        <p>Stan vs Stan is an online multi-player real time song guessing game. Login with Spotify, 
            and try to out "stan" your friends. Built with a React front-end, Node.js backend, and MongoDB database, 
            the app uses the Spotify API to fetch song data and user information, and the Spotify "WebPlayer" to play songs right in the user's browser. 
            Real-time multiplayer functionality is implemented using WebSockets, allowing players to hear synchronized songs and buzz in as soon as they have a guess. 
            The game is deployed on AWS, so login and get to "stanning"!
        </p>

        <h3>Where can I play?</h3>
        <p>Check it out here: <a href="https://stanvsstan.com" target="_blank" rel="noopener noreferrer">stanvsstan.com</a>. 
        <br /> 
        Currently, the game is in alpha, and since Spotify has recently changed its API access policies, it is stuck in "develop mode" since
        250,000 monthly users are required to take it out of develop, but while it is in develop mode only 25 whitelisted users can login. 
        Please reach out with your Spotify name and email to be whitelisted, and/or view the <a href="https://youtu.be/5S9LbVvpL-Q" target="_blank" rel="noopener noreferrer">demo</a>.
        
        <h3>Why did you make this?</h3>
        <p>The internet these day isn't as fun as it used to be. With this game I'm trying to bring a little bit of the old internet, the one that I was excited to get home 
            from school to play fun little games on, back. I also love finding new music, so I wanted to make a game that would allow me to discover new songs while also having fun with friends.
        </p>

        </p>
      </div>
      <div>
        <h3 style={{marginLeft: "5%"}} >Home screen</h3>
        <img src="/SVS_homescreen.jpg" alt="Stan Vs Stan homepage" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div>
        <h3 style={{marginLeft: "5%"}}>Gameplay screen</h3>
        <img src="/SVS_gameplay.jpg" alt="Stan Vs Stan gameplay" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div>
        <h3 style={{marginLeft: "5%"}}>Tech Stack</h3>
        <img src="/SVS_tech_stack.png" alt="Stan Vs Stan tech stack diagram" 
        style={{width: "90%", margin: "1rem", borderRadius: "8px", marginLeft: "auto", marginRight: "auto"}}/>
      </div>
      <div >
        <h3>Demo</h3>
        <div className="aspect-ratio" >
            <iframe frameborder="0" width="90%" height="450px" allowfullscreen
            style={{borderRadius: "8px", border: "none"}}
                src="https://www.youtube.com/embed/5S9LbVvpL-Q">
            </iframe>
        </div>
      </div>
    </Slider>
  );
}
