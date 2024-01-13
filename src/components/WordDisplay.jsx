import React from "react";

export const WordDisplay = ({ wordSecret, scoreGame }) => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row w-full h-7 sm:items-center gap-5">
      <div className="w-full flex gap-5">
        <label htmlFor="" className="text-black">
          PALABRA:
        </label>
        <p className="text-black">{wordSecret}</p>
      </div>
      <div className="hidden sm:flex ml-auto">
        <label htmlFor="" className="text-black">
          PUNTAJE:
        </label>
        <p className="ml-3 w-9 text-black">{scoreGame}</p>
      </div>
    </div>
  );
};
