import React from "react";

interface Props {
  size: number;
  userName: string;
}
const GameBoard: React.FC<Props> = ({ size, userName }: Props) => {
  const range = (start: number, end: number) => {
    return Array.apply(0, Array(end - 1)).map(
      (element, index) => index + start
    );
  };
  const shuffle = (array: any[]): any[] => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const numbers: number[] = shuffle(range(1, size * size));
  const r = range(0, size);
  return (<div>
      {
r.map((i) => (
<>
{
r.map((j) => (
))
}
</>
))
}
  </div>);
};
export default GameBoard;
