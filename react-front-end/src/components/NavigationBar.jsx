

export default function NavigationBar({onProjects, onExperience}) {

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
                <button className="navButton" onClick={onProjects}>Projects</button>
                <button className="navButton" onClick={onExperience}>Experience</button>
                <button className="navButton">Education</button>
            </div>

        </nav>
    );
}   