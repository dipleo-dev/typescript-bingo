import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GameBoard from "../components/game-board/game-board";

const GamePage: React.FC<unknown> = () => {
  const params: any = useParams();
  const size: number = params?.size || 3;
  console.log(" ola", params);
  console.log("size1", size);
  const [username, setUsername] = useState("");
  const [usernameSubmitted, setUsernameSubmitted] = useState(false);
  const startGame = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    };
    fetch("http://localhost:3000/start", requestOptions)
      .then((response) => response && response.json())
      .then((data) => setUsernameSubmitted(true));
  };

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button onClick={startGame}>Start Game</button>
      {usernameSubmitted && (
        <>
          <GameBoard size={size} userName={username} />
        </>
      )}
    </div>
  );
};
export default GamePage;
