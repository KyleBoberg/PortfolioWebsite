import JobExperienceDiv from "./JobExperienceDiv";

export default function Experience() {
    return (
        <>
            <h2>Experience</h2>
            <div>
                <JobExperienceDiv
                    company="TS Partners" 
                    companyImage="https://media.licdn.com/dms/image/v2/D4E0BAQG3zol2k6sxCA/company-logo_100_100/company-logo_100_100/0/1693419702221/ts_partners_inc_logo?e=1762387200&v=beta&t=iIUDSbX15mdH8EtpKNphkd8DZ_gBwOUrAfHV3uKT55s" 
                    dateRange="July 2024 - Present"
                    title="Junior Software Developer" 
                    bulletPoints={["bullet 1", "bullet 2"]}
                />

                <JobExperienceDiv
                    company="Amico Lane" 
                    companyImage="https://media.licdn.com/dms/image/v2/C4E0BAQGReviu2ICfiQ/company-logo_100_100/company-logo_100_100/0/1630604587825/amico_lane_logo?e=1762387200&v=beta&t=ZJEHfmXrreQkGoPcTZIuRz27yjlCcKvKRMqkoHD9QoU" 
                    dateRange="May 2023 - July 2024"
                    title="Software Development Intern/Consultant"
                    bulletPoints={["bullet 1", "bullet 2"]}
                />
            </div>
        </>
    )
}