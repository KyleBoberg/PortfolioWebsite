

export default function NavigationBar() {
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
                <p>Kyle</p>
                <p>Projects</p>
                <p>Experience</p>
            </div>

        </nav>
    );
}   