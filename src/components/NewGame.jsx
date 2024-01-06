import React from "react";
import logoHangman from "../assets/images/logo_hangman.png";
import bgWindowContent from "../assets/images/textura-papel-cuadriculado.jpg";

export const NewGame = () => {
  const borderStyle = {
    borderLeft: "3px solid #4c4a48",
    borderRight: "3px solid #4c4a48",
    borderBottom: "3px solid #4c4a48",
  };

  const cardStyle = {
    width: "750px",
  }

  const bodyStyle = {
    backgroundImage: `url(${bgWindowContent})`,
    backgroundSize: "cover",
    overflow: "hidden",
  };

  const bgButton = {
    backgroundColor: "#E5E5E5",
    borderLeft: "1px solid rgba(41,38,38,0.459)",
    borderRight: "1px solid rgba(41,38,38,0.459)",
    borderBottom: "1px solid rgba(41,38,38,0.459)",
    borderTop: "1px solid rgba(41,38,38,0.459)",
  };

  return (
    <div className="card shadow-xl rounded-md" style={cardStyle}>
      <div className="h-12 bg-[#4c4a48] flex justify-start items-center rounded-t-md px-2">
        <img className="w-6 h-6" src={logoHangman} alt="" />
        <h3 className="ml-5 font-semibold text-base text-white">
          Juego El Ahorcado
        </h3>
      </div>
      <div className="rounded-b-md h-full w-full" style={borderStyle}>
        <div className="rounded-b-md h-full" style={bodyStyle}>
            <div className="flex gap-3 p-2">
                <button className="w-24 h-8 text-black text-xs text-center " style={bgButton}>Nuevo Juego</button>
                <button className="w-24 h-8 text-black text-xs text-center" style={bgButton}>Atrás
            </button>
            </div>
            <div id="hangman" className="py-1 px-4">

            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};
