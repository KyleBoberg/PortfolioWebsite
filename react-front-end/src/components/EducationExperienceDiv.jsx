import { useState } from "react";
import { useMediaQuery } from 'react-responsive'


export default function EducationExperienceDiv({school, schoolImage, degree, location, dateRange, result, sections}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })


    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="frosted-glass" 
            style={{
                margin: "10px"
            }}
        >

            <div className="collapser"
                onClick={toggleCollapse}>
                <img 
                    className="logo-image"
                    src={schoolImage} 
                />
                <div
                    style={{
                        flexGrow: 1,
                        minWidth: 0,
                    }}
                >
                    {/* top part of header with company name, title, and date range */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",   
                            flexWrap: "wrap",
                        }}>
                        <h2
                            style={{flexGrow: 1}}
                        >{school}</h2>
                        
                        <h4>{dateRange}</h4>
                    </div>

                   

                    {/* bottom part of header with location and skill tags */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",   
                        }}
                    >
                        <h3
                            style={{
                                whiteSpace: "nowrap",
                                marginRight: "1rem",
                                flexGrow: 1,
                            }}
                        >{degree}</h3>

                        <p>{result}</p>
                    </div>

                    <p>{location}</p>
                    
                </div>
            </div>

            <div className={"collapsee" + (isOpen ? "" : " closed")} 
                style={{
                    marginLeft: isTabletOrMobile ? "1rem" : "100px", //to skip space beneath image, unless screen is small
                    marginRight: "2rem",
                }}
            >
                <ul>
                {sections.map(section => 
                <div>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                </div>)}
                </ul>
            </div>
            
        </div>
    )
}