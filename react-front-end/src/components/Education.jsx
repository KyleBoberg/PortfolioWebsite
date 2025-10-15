import EducationExperienceDiv from "./EducationExperienceDiv"

export default function Education() {
    return (
        <>
            <h2 className="section-header">Education</h2>    
            <div>
                <EducationExperienceDiv
                    school="Stevens Institute of Technology"
                    schoolImage="https://media.licdn.com/dms/image/v2/C4E0BAQG4-wgic6mvtQ/company-logo_200_200/company-logo_200_200/0/1659965758390/stevens_institute_of_technology_logo?e=1762992000&v=beta&t=3R7RnEDtvWXbrSJfHiQAHeixnGmId0lc34_3v8_XDa0" 
                    degree="B.S. Computer Science"
                    location="Hoboken, NJ"
                    dateRange="Graduated May 2024"
                    result="GPA: 3.9 - Summa Cum Laude"
                    sections={[
                        {title: "Key Coursework", text: "Deep Learning, Algorithms, Data Structures, Web Programming (I, II), Object-Oriented Analysis and Design, Computer Vision (I, II), Human-Computer Interaction, DevOps Principles and Practices."},
                        {title: "Awards", text: " Dean's List (All Semesters), Edwin A. Stevens Scholarship (Merit-based), Presidential Scholarship (Merit-based) "},
                    ]}
                />
            </div>
        </>
    )
}