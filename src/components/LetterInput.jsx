import React, { useState } from "react";

export const LetterInput = ({ onEnter, inputValue, setInputValue }) => {
  // const inputStyle = {
  //   borderTop: "1px solid #85a0c9",
  //   borderBottom: "1px solid #85a0c9",
  //   borderRight: "1px solid #85a0c9",
  //   borderLeft: "1px solid #85a0c9",
  //   width: "375px",
  //   height: "30px",
  // };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onEnter(event.target.value);
      setInputValue('')
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form action="" className="w-full flex gap-1.5 ">
      <label htmlFor="enter-letter" className="text-black mt-1">
        INGRESE UNA LETRA:
      </label>
      <input
        id="enter-letter"
        type="text"
        className="inputStyle bg-transparent pl-3 outline-none text-black"
        required
        // style={inputStyle}
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};
