import EducationExperienceDiv from "./EducationExperienceDiv"

export default function Education() {
    return (
        <>
            <h2 className="section-header">Education</h2>    
            <div>
                <EducationExperienceDiv
                    school="Stevens Institute of Technology"
                    schoolImage="/stevens_institute_of_technology_logo.jpg" 
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