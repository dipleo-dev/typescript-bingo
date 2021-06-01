import React from "react";

interface Props {
  size: number;
  userName: string;
}

const GameBoard: React.FC<Props> = ({ size, userName }: Props) => {
  console.log("size2", size);
  const range = (start: number, end: number) => {
    return Array.apply(0, Array(end)).map((element, index) => index + start);
  };

  const shuffle = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };
  console.log("size3", size);
  const r = range(0, size * 1);
  const numbers: number[] = shuffle(range(1, size * size));

  console.log("size4", r, numbers);
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
