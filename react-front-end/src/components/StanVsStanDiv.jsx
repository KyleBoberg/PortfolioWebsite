import { useState } from "react";
import SVSCarousel from "./SVSCarousel";

export default function StanVsStanDiv() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const skillTags = ["React", "Node.js", "Express", "Socket.io", "MongoDB", "JavaScript", "HTML/CSS"];
    const color2 = "rgb(253, 228, 0)"; 
    const color1 = "rgb(255, 252, 223)";

    return (
        <div className="frosted-glass" 
            style={{
                margin: "10px"
            }}
        >

            <div className="collapser" onClick={toggleCollapse} 
                style={{alignItems: "center"}}
            >
                <h2>Stan vs Stan</h2>  
                <p style={{flexGrow: 1}}>Online multi-player real time song guessing game. Login with Spotify, and try to out "stan" your friends.</p>
                <div
                    className="skillTagContainer">
                    {skillTags && skillTags.map(tag => 
                        <div className="skillTagDiv"
                            style={{
                                background: "linear-gradient(110deg, " + color1 + " 0%, " + color2 + " 100%)",
                                color: "black",
                            }}
                        > 
                            <span className="skillTag">{tag}</span> 
                        </div>
                    )}
                </div>
            </div>

            <div className={"collapsee" + (isOpen ? "" : " closed")} >
                <div margin="10px">
                    <SVSCarousel />
                </div>
            </div>
        </div>
    )
}                