import JobExperienceDiv from "./JobExperienceDiv";

export default function Experience() {
    return (
        <>
            <h2 className="section-header">Experience</h2>
            <div>
                <JobExperienceDiv
                    company="TS Partners" 
                    companyImage="https://media.licdn.com/dms/image/v2/D4E0BAQG3zol2k6sxCA/company-logo_200_200/company-logo_200_200/0/1693419702221/ts_partners_inc_logo?e=1762992000&v=beta&t=PctN7P1obq2g-RMjmwbpyoY2-EB380n-N9v8zWhiNxw" 
                    dateRange="July 2024 - Present"
                    title="Junior Software Developer" 
                    location="King of Prussia, PA"
                    bulletPoints={[
                        "Develop and maintain a comprehensive Java-based solution for corporate trust and stock transfer administration, trusted by many of the world's largest financial institutions.", 
                        "Redesigned the system’s front-end with a focus on smart linking, activity suggestions, dynamic refreshing, and a clean and modern appearance.",
                        "Lead the design and implementation of a user-friendly yet functionally robust data conversion tool used to convert newly acquired clients' legacy records into the system.",
                        "Write and optimize complex SQL queries, often dramatically speeding up critical procedures.",
                        "Participate in unit testing and code reviews to ensure the correctness of code and eliminate the possibility of bugs. "
                    ]}
                    skillTags={["Java", "SQL", "TypeScript", "HTML/CSS"]}
                    color1={"#F29627"}
                    color2={"rgba(184, 105, 8, 1)"}
                />

                <JobExperienceDiv
                    company="Amico Lane" 
                    companyImage="https://media.licdn.com/dms/image/v2/C4E0BAQGReviu2ICfiQ/company-logo_200_200/company-logo_200_200/0/1630604587825/amico_lane_logo?e=1762992000&v=beta&t=Ba7jyiHyE7KiFchNDZl9WK_KHgEfe9lUHpissCjpv1Y" 
                    dateRange="May 2023 - July 2024"
                    title="Software Development Intern/Consultant"
                    location="Washington, DC"
                    bulletPoints={[
                        "Was asked to stay on at the real estate technology start-up following a summer internship to lead technical projects.", 
                        "Led the technology development of a new company-wide KPI monitoring system. Built out multiple interactive KPI dashboards for use by both analysts and management.",
                        "Developed and maintained automations for Amico Lane's cloud-based project management software to increase the speed of processing incoming client requests. ",
                        "Integrated a variety of web services (incl. Google Workspace/Cloud and Xero Accounting) into the company's workflow using APIs and webhooks, allowing for reduced time for task completion and accurate KPI monitoring.",
                        "Developed Amico Lane Condominium Target Visualizer, an interactive web-based internal tool to identify key target condominium associations to drive Amico Lane's expansion of its customer base. The system is rich with custom web-scraped data, displayed visually with the Google Maps SDK/API."
                    ]}
                    skillTags={["JavaScript", "ReactJS", "MongoDB", "Automations", "Google Cloud"]} 
                    color1={"#FF4342"}
                    color2={"#9e1010ff"}
                />
            </div>
        </>
    )
}