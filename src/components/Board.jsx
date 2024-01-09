import React from "react";
import { LetterInput } from "./LetterInput";
import { WordDisplay } from "./WordDisplay";

export const Board = ({ wordSecret, scoreGame, onEnter, error, inputValue, setInputValue }) => {
  return (
    <div className="relative flex flex-col  h-44 px-8 py-7">
      <LetterInput onEnter={onEnter} inputValue={inputValue} setInputValue={setInputValue} />
      <div className="mt-1 flex h-4">
        <div className="w-44"></div>
        <div className="ml-2 text-red-700 text-sm">{error}</div>
      </div>
      <WordDisplay wordSecret={wordSecret} scoreGame={scoreGame} />
    </div>
  );
};
