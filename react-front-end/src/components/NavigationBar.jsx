

export default function NavigationBar({projectsSectionRef, experienceSectionRef}) {

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            style={{
                width: '100vw',
            }}
        >
            <div className="frosted-glass"
                style={{
                    position: 'sticky',
                    top: 0,
                    margin: "1%",
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <button className="navButton">Kyle</button>
                <button className="navButton" onClick={scrollToSection(projectsSectionRef)}>Projects</button>
                <button className="navButton" onClick={scrollToSection(experienceSectionRef)}>Experience</button>
                <button className="navButton">Education</button>
                <button className="navButton">Technologies</button>
            </div>

        </nav>
    );
}   