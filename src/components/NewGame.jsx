import React, { useState, useEffect } from "react";
import logoHangman from "../assets/images/logo_hangman.png";
import bgWindowContent from "../assets/images/textura-papel-cuadriculado.jpg";
import { HangmanImage } from "./HangmanImage";
import { ImagesHangman } from "../api/ImagesHangman";
import { Link } from "react-router-dom";
import { Board } from "./Board";

export const NewGame = ({
  position,
  wordSecret,
  onEnter,
  scoreGame,
  error,
}) => {
  const borderStyle = {
    borderLeft: "3px solid #4c4a48",
    borderRight: "3px solid #4c4a48",
    borderBottom: "3px solid #4c4a48",
  };

  const cardStyle = {
    width: "750px",
  };

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
    <div className="card shadow-xl rounded-md flex flex-col" style={cardStyle}>
      <div className="h-12 bg-[#4c4a48] flex justify-start items-center rounded-t-md px-2">
        <img className="w-6 h-6" src={logoHangman} alt="" />
        <h3 className="ml-5 font-semibold text-base text-white">
          Juego El Ahorcado
        </h3>
      </div>
      <div className="rounded-b-md h-full w-full" style={borderStyle}>
        <div
          className="rounded-b-md h-full relative overflow-hidden"
          style={bodyStyle}
        >
          <div className="flex gap-3 p-2">
            <button
              className="w-24 h-8 text-black text-xs text-center "
              style={bgButton}
            >
              Nuevo Juego
            </button>
            <Link to="/">
              <button
                className="w-24 h-8 text-black text-xs text-center"
                style={bgButton}
              >
                Atrás
              </button>
            </Link>
          </div>
          <HangmanImage imagesHangman={ImagesHangman} position={position} />
          <Board
            wordSecret={wordSecret}
            onEnter={onEnter}
            scoreGame={scoreGame}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};
