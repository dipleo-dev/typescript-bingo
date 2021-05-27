import React, { useState } from "react";

interface Props {
  size: number;
  userName: string;
}

const GameBoard: React.FC<Props> = ({ size, userName }: Props) => {
  const [seq, setSeq] = useState([]);
  const range = (start: number, end: number) => {
    return Array.apply(0, Array(end)).map((element, index) => index + start);
  };
  console.log(size);
  const shuffle = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };
  const numbers: number[] = shuffle(range(1, size * size));
  const r = range(0, size);
  console.log(r, numbers);
  return (
    <div className="container">
      {r.map((i) => (
        <div className="row">
          {r.map((j) => (
            <div className="col">
              <div
                style={{
                  height: "150px",
                }}
              >
                {numbers[i * size + j]}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default GameBoard;
