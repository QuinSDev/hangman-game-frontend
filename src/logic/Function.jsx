import React, { useState, useEffect } from "react";
import { NewGame } from "../components/NewGame";
import { Words } from "../api/Words";
import { LetterFind } from "../components/LetterFind";

export const Function = () => {
  const [wordSecret, setWordSecret] = useState("");
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState();
  const [position, setPosition] = useState(0);
  const [scoreGame, setScoreGame] = useState(0);
  const [words, setWords] = useState();
  const [bolean, setBolean] = useState(true);
  const [letterFind, setLetterFind] = useState([]);
  const [lettersFinds, setLettersFinds] = useState([])
  const [randomWordIndex, setRandomWordIndex] = useState(null);
  const [word, setWord] = useState([]);
  let letter = "";

  useEffect(() => {
    async function loadGame() {
      const upperCaseWords = Words.map((word) => word.toUpperCase());
      setWords(upperCaseWords);
    }
    loadGame();
  }, []);

  async function start() {
    setPosition(0);
    setWordSecret("");
    setLetterFind([])
    setLettersFinds([])

    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWordIndex(randomIndex);
    const wordArray = new Array(words[randomIndex].length).fill("_");
    setWord(wordArray);
    setWordSecret(wordArray.join(" "));
  }

  useEffect(() => {
    start();
  }, [words]);

  const handelEnter = (value) => {
    let messagesError = [
      "Completa este campo",
      "Debes ingresar solo un caracter",
    ];

    if (bolean) {
      letter = value.trim().toUpperCase();

      if (letter === "" || letter === null) {
        setError(messagesError[0]);
      } else if (letter.length != 1) {
        setError(messagesError[1]);
      } else {
        setError("");
        searchLetter(letter, randomWordIndex);
      }
    } else {
      setBolean(true);
    }
  };

  function searchLetter(letter, randomWordIndex) {
    let letterThis = false;
    const currentWord = words[randomWordIndex];

    if (!letterFind.includes(letter)) {
      setLetterFind((prevState) => [...prevState, letter]);
      const newWord = [...word];
      setLettersFinds((prevLetter) => [...prevLetter, letter])
      for (let initial = 0; initial < currentWord.length; initial++) {
        if (currentWord.substring(initial, initial + 1) === letter) {
          newWord[initial] = letter;
          setWord(newWord);
          letterThis = true;
          setScoreGame((prevScore) => prevScore + 1);
        }
        console.log(currentWord);
      }

      if (letterThis) {
        if (!newWord.includes("_")) {
          setScoreGame((prevScore) => prevScore + 5);
          setBolean(false);
          setTimeout(function () {
            start();
          }, 1000);
        }
      } else {
        setPosition((prevPosition) => prevPosition + 1);
      }
    }
  }

  useEffect(() => {
    setWordSecret(word.map((word) => (word === "_" ? "_ " : word)).join(" "));
  }, [word]);

  return (
    <div className="w-full h-full flex justify-between">
    <NewGame
      position={position}
      wordSecret={wordSecret}
      onEnter={handelEnter}
      scoreGame={scoreGame}
      error={error}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
    <div className="flex flex-col justify-end">
    <LetterFind lettersFinds={lettersFinds.join(" ")}/>
    </div>
    </div>
  );
};
