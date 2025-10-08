import { useState } from "react";

export default function JobExperienceDiv({company, companyImage, title, location, dateRange, bulletPoints, skillTags, color1, color2}) {
    
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
                    style={{borderRadius: '8px'}}
                    src={companyImage} 
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
                            <h2>{company}</h2>
                            <h3>{title}</h3>
                        </div>
                        <h4>{dateRange}</h4>
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
                        <div
                            style={{
                                display: "flex",
                                gap: "5px",
                                flexWrap: "wrap",
                            }}>
                            {skillTags && skillTags.map(tag => 
                                <div className="skillTagDiv"
                                    style={{
                                        background: "linear-gradient(110deg, " + color1 + " 0%, " + color2 + " 100%)"
                                    }}
                                > 
                                    <span className="skillTag">{tag}</span> 
                                </div>
                            )}
                        </div>
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
                {bulletPoints.map(point => <li>
                    {point}
                </li>)}
                </ul>
            </div>
            
        </div>
    )
}