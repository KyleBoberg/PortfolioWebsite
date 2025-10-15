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
                gap: ".25rem",
                alignItems: "center",
            }}>
                <div>
                    <h1>Kyle Boberg</h1>
                    <p>Software Developer</p>
                </div>


                <div 
                    style={{
                    display: "flex",
                    gap: ".25rem",
                    flexGrow: 1,
                    justifyContent: "space-around",
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




        </div>
    )
}