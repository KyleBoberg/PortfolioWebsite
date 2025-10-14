import { useState } from "react";
import SVSCarousel from "./SVSCarousel";

export default function StanVsStanDiv() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

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
                <p>Online multi-player real time song guessing game. Login with Spotify, and try to out "stan" your friends.</p>
            </div>

            <div className={"collapsee" + (isOpen ? "" : " closed")} >
                <div margin="10px">
                    <SVSCarousel />
                </div>
            </div>
        </div>
    )
}                