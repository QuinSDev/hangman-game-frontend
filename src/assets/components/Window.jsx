import React from "react";
import logoHangman from "../images/icon_hangman.png";
import bgWindowContent from "../images/walppaperHome-min.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export const Window = () => {
  const bgButton = {
    backgroundColor: "#E5E5E5",
    borderLeft: "1px solid rgba(41,38,38,0.459)",
    borderRight: "1px solid rgba(41,38,38,0.459)",
    borderBottom: "1px solid rgba(41,38,38,0.459)",
    borderTop: "1px solid rgba(41,38,38,0.459)",
  };

  const bodyStyle = {
    backgroundImage: `url(${bgWindowContent})`,
    backgroundSize: "cover",
    overflow: "hidden",
  };

  const borderStyle = {
    borderLeft: "4px solid rgba(41,38,38,0.459)",
    borderRight: "4px solid rgba(41,38,38,0.459)",
    borderBottom: "4px solid rgba(41,38,38,0.459)",
  };

  const widthWindow = {
    width: "450px",
    height: "550px",
  };

  return (
    <div className="card shadow-xl rounded-md" style={widthWindow}>
      <div className="h-12 bg-[rgba(41,38,38,0.459)] flex justify-start items-center rounded-t-md px-2">
        <img className="w-6 h-6" src={logoHangman} alt="" />
        <h3 className="ml-5 font-semibold text-base text-black">
          Hangman Game
        </h3>
      </div>
      <div className="rounded-b-md h-full w-full" style={borderStyle}>
        <div className="p-3 rounded-b-md h-full" style={bodyStyle}>
          {/* <h2 className="card-title text-black">Shoes!</h2>
        <p className="text-black">If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="w-full h-44 flex justify-center">
            <img
              className="w-52 py-6"
              src="/src/assets/images/logo_hangman.png"
              alt=""
            />
          </div>
          <div className="card-actions flex-col items-center justify-evenly h-56 ">
            <button
              type="button"
              className="w-24 h-9 text-black text-xs text-center "
              style={bgButton}
            >
              Iniciar Juego
            </button>
            <button
              className="w-24 h-9 text-black text-xs text-center"
              style={bgButton}
            >
              Como Jugar
            </button>
            <button
              className="relative w-24 h-9 text-slate-500 text-xs text-center"
              style={bgButton}
            >
              Multijugador
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[rgba(54,51,51,0.34)] text-black w-full h-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </button>
          </div>
          <div className="mt-14 text-center">
            <p className="text-black">
              Produced by <b>@QuinSDev</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
