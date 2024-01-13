import React, { useState, useEffect } from "react";
import logoHangman from "../assets/images/icon_hangman.png";
import bgWindowContent from "../assets/images/textura-papel-cuadriculado.jpg";
import { HangmanImage } from "./HangmanImage";
import { ImagesHangman } from "../api/ImagesHangman";
import { Link } from "react-router-dom";
import { Board } from "./Board";
import { LettersFinds } from "./LettersFinds";

export const NewGame = ({
  position,
  wordSecret,
  onEnter,
  scoreGame,
  error,
  inputValue,
  setInputValue,
  lettersFinds,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardStyle = {
    width: windowWidth <= 600 ? "100%" : "750px",
    // height: windowHeight <= 600 ? '100%' : '559px'
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

  const bgButton = {
    backgroundColor: "#E5E5E5",
    borderLeft: "1px solid rgba(41,38,38,0.459)",
    borderRight: "1px solid rgba(41,38,38,0.459)",
    borderBottom: "1px solid rgba(41,38,38,0.459)",
    borderTop: "1px solid rgba(41,38,38,0.459)",
  };

  return (
    <div
      className="card shadow-xl h-full rounded-md flex flex-col"
      style={cardStyle}
    >
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
          <div className="flex items-center gap-3 p-2">
            {/* <button
              className="w-24 h-8 text-black text-xs text-center "
              style={bgButton}
            >
              Nuevo Juego
            </button> */}
            <Link to="/">
              <button
                className="w-20 h-7 text-black text-xs text-center"
                style={bgButton}
              >
                Atrás
              </button>
            </Link>
            <div className="flex sm:hidden ml-auto">
              <label htmlFor="" className="text-black">
                PUNTAJE:
              </label>
              <p className="ml-3 w-9 text-black">{scoreGame}</p>
            </div>
          </div>
          <HangmanImage imagesHangman={ImagesHangman} position={position} />
          <Board
            wordSecret={wordSecret}
            onEnter={onEnter}
            scoreGame={scoreGame}
            error={error}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <div className="sm:hidden">
            <LettersFinds lettersFinds={lettersFinds} />
          </div>
        </div>
      </div>
    </div>
  );
};
