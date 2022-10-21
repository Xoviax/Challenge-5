function Valorant({ displayName, icon }) {
    return (
        <details>
            <summary>
                {displayName}
            </summary>
            <div>
                <img src={icon}  width="1000" height="488" /></div>
        </details>
    );
}

export default Valorant; 