import { useState } from "react";
import { useMediaQuery } from 'react-responsive'


export default function JobExperienceDiv({company, companyImage, title, location, dateRange, bulletPoints, skillTags, color1, color2}) {
    
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

            <div className={"collapser" + (isOpen ? "" : " closed")}
                onClick={toggleCollapse}>
                <img 
                    className="logo-image"
                    src={companyImage} 
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
                        >{company}</h2>
                        
                        <h4>{dateRange}</h4>
                    </div>

                    <h3>{title}</h3>

                    {/* bottom part of header with location and skill tags */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",   
                        }}
                    >
                        <p
                            style={{
                                whiteSpace: "nowrap",
                                marginRight: "1rem",
                                flexGrow: 1,
                            }}
                        >{location}</p>
                        <div
                            className="skillTagContainer">
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
                    marginLeft: isTabletOrMobile ? "1rem" : "100px", //to skip space beneath image, unless screen is small
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