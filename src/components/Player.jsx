import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let btnCaption = "Edit";
  if (isEditing) {
    btnCaption = "Save";
  }

  function buttonEditClicked() {
    // setIsEditing(!isEditing);  // => schedules the state update
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onChangeName(symbol.playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={buttonEditClicked}>{btnCaption}</button>
      </span>
    </li>
  );
}
