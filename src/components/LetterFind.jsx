import React from "react";
import bgWindowContent from "../assets/images/textura-papel-cuadriculado.jpg";

export const LetterFind = ({lettersFinds}) => {
  const style = {
    width: '450px',
    height: '280px',
    marginBottom: '0'
  };

  const borderStyle = {
    borderLeft: "3px solid #4c4a48",
    borderRight: "3px solid #4c4a48",
    borderBottom: "3px solid #4c4a48",
  };

  const bodyStyle = {
    backgroundImage: `url(${bgWindowContent})`,
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div className="card shadow-xl rounded-md flex flex-col" style={style}>
      <div className="h-12 bg-[#4c4a48] flex justify-center items-center rounded-t-md px-2">
        <h3 className="font-semibold text-base text-white">
          Letras Ingresadas
        </h3>
      </div>
      <div className="rounded-b-md h-full w-full" style={borderStyle}>
        <div className="rounded-b-md h-full relative overflow-hidden p-10"
          style={bodyStyle}>
            <p className="text-black text-2xl tex">{lettersFinds}</p>
          </div>
      </div>
    </div>
  );
};
