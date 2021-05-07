import React, { useState } from "react";
import { useMovie } from "../../context/dataProvider";

const keys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  ",",
  "/",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];

const KeyBoard = ({ inputRef }) => {
  const [isNumber, setIsNumber] = useState(false);
  const { setSearchValue, search } = useMovie();

  const handleClick = (key) => {
    setSearchValue((prev) => prev.concat(key));
    inputRef.current.focus();
  };

  const handleBack = () => {
    setSearchValue((prev) => {
      const lastIndex = prev.length - 1;
      const newValue = prev.slice(0, lastIndex);
      return newValue;
    });

    inputRef.current.focus();
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {isNumber ? (
          <div className="keyBoardConaiter">
            {numbers.map((number) => (
              <div className="keyBoardKeyContainer" key={number}>
                <button onClick={() => handleClick(number)}>{number}</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="keyBoardConaiter">
            {keys.map((key) => (
              <div className="keyBoardKeyContainer" key={key}>
                <button onClick={() => handleClick(key)}>{key}</button>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginLeft: "10px" }}>
          <div
            className="keyBoardKeyContainer"
            style={{ marginBottom: "0.4rem" }}
          >
            <button style={{ width: "90px" }} onClick={handleBack}>
              back
            </button>
          </div>
          <div className="keyBoardKeyContainer">
            <button
              style={{ width: "90px" }}
              onClick={() => setIsNumber(!isNumber)}
            >
              {isNumber ? "ABC" : "123"}
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
        }}
      >
        <div className="keyBoardKeyContainer">
          <button
            style={{ width: "188px", marginRight: "0.4rem" }}
            onClick={() => setSearchValue("")}
          >
            clear
          </button>
        </div>
        <div className="keyBoardKeyContainer">
          <button
            style={{ width: "155px", marginRight: "0.4rem" }}
            onClick={() => handleClick(" ")}
          >
            space
          </button>
        </div>
        <div className="keyBoardKeyContainer">
          <button style={{ width: "188px" }} onClick={() => search()}>
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyBoard;
