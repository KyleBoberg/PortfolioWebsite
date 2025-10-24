import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Kyle() {
    return (
        <div style={{
            margin: "1rem"  
        }}>

            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "start",
                flexWrap: "wrap",
            }}>
                <div style={{flexGrow: 1}}>
                    <h1>Kyle Boberg</h1>
                </div>

                <div 
                    style={{
                    display: "flex",
                    gap: ".25rem",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                }}>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapPin} />
                        <p> Philadelphia, PA </p>
                    </div>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:kwboberg2@gmail.com"> kwboberg2@gmail.com </a>
                    </div>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <p> (609) 284-5751 </p>
                    </div>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <a href="https://www.linkedin.com/in/kyle-boberg/" target="_blank" rel="noopener noreferrer"> linkedin.com/in/kyle-boberg/ </a>
                    </div>

                </div>

            </div>

            <h2>Software Developer</h2>
            <div style={{
                marginLeft: "1rem",
            }} >
                <p>2024 summa cum laude graduate from Stevens Institute of Technology working full time in tech.</p> 
                <p>Willing to work hard to get it done. Love to figure stuff out. </p> 
                <p>Check out some of my personal projects, job experience, and education highlights below.</p>
            </div>



        </div>
    )
}