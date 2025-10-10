import { useState } from "react";

export default function EducationExperienceDiv({school, schoolImage, degree, location, dateRange, result, sections}) {
    
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

            <div className="collapser"
                onClick={toggleCollapse}>
                <img 
                    style={{
                        borderRadius: '8px',
                        maxWidth: '100px',
                        maxHeight: '100px'
                    }}
                    src={schoolImage} 
                />
                <div
                    style={{
                        width: "100%",
                    }}
                >
                    {/* top part of header with company name, title, and date range */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "start",   
                        }}>
                        <div
                            style={{flexGrow: 1}}
                        >
                            <h2>{school}</h2>
                            <h3>{degree}</h3>
                        </div>

                        <div
                            style={{textAlign: "right"}}
                        >
                            <h4>{dateRange}</h4>
                            <p>{result}</p>
                        </div>
                    </div>

                    {/* bottom part of header with location and skill tags */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <p
                            style={{
                                flexGrow: 1,
                            }}
                        >{location}</p>
                        
                    </div>
                    
                </div>
            </div>

            <div className={"collapsee" + (isOpen ? "" : " closed")} 
                style={{
                    marginLeft: "100px", //to skip space beneath image
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