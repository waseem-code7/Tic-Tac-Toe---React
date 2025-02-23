import { useState } from "react"

function Player(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setPlayerName] = useState(props.name);

    function handleNameChange(event) {
        setPlayerName(event.target.value)
    }

    const playerName = isEditing ? <input type="text" required value={name} onChange={handleNameChange}/> :
        (
            <>
                <span className="player-name">{name}</span>
                <span className="player-symbol">{props.symbol}</span>
            </>
        );

    const handleClick = function () {
        setIsEditing(!isEditing)
    }

    return (
        <li className={props.isActive ? "active" : undefined}>
            <span className={`player`}>
                {playerName}
            </span>
            <button onClick={handleClick}>{isEditing ? "Done" : "Edit"}</button>
        </li>
    )
}

export default Player