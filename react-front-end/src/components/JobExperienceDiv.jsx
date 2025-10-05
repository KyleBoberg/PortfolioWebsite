import { useState } from "react";

export default function JobExperienceDiv({company, companyImage, title, dateRange, bulletPoints}) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="frosted-glass" >
            <div className="collapser"
                onClick={toggleCollapse}>
                <img src={companyImage} />
                <h2>{company}</h2>
                <h3>{title}</h3>
                <h4>{dateRange}</h4>
            </div>

            <div className="collapsee" hidden={!isOpen}>
                {bulletPoints.map(point => <p>{point}</p>)}
            </div>
            
        </div>
    )
}