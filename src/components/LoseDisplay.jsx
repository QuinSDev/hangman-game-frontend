import React from "react";

export const LoseDisplay = ({ openModal, setOpenModal, messageLose, scoreGame }) => {
  const bgButton = {
    backgroundColor: "#E5E5E5",
    borderLeft: "1px solid rgba(41,38,38,0.459)",
    borderRight: "1px solid rgba(41,38,38,0.459)",
    borderBottom: "1px solid rgba(41,38,38,0.459)",
    borderTop: "1px solid rgba(41,38,38,0.459)",
  };

  return (
    <>
      {openModal && (
        <div className="fixed z-10 inset-0 flex justify-center items-center top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)]">
          <div className="relative w-auto bg-white p-5 rounded-md text-center">
            <p className="text-black">
              ¡Lo sentimos has perdido! La palabra era: {messageLose}
            </p>
            <p className="text-black">Tu puntaje fue de: {scoreGame}</p>
            <button className="mt-4 p-2 text-sm text-black hover:shadow-slate-700" style={bgButton} onClick={() => setOpenModal(false)}>Nuevo Juego</button>
          </div>
        </div>
      )}
    </>
  );
};
