"use client";
import { useState, useEffect } from "react";
import BreakButton from "./components/BreakButton";
import Clock from "./components/Clock";
import FocusMessage from "./components/FocusMessage";
import LightDarkMode from "./components/LightDarkMode";
import PlayButton from "./components/PlayButton";
import useSound from "use-sound";

export default function Home() {
  const [isFocus, setIsFocus] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1 * 60);

  const [play] = useSound("./alert.wav");

  useEffect(() => {
    let timeout: any = null;
    if (isPlaying && remainingTime > 0) {
      timeout = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    }
    if (isPlaying && remainingTime == 0) {
      play();
      setIsPlaying(false);
      setIsFocus(!isFocus);
      setIsPlaying(true);
    }
    return () => clearTimeout(timeout);
  }, [remainingTime, isPlaying]);

  useEffect(() => {
    if (isFocus) {
      setRemainingTime(1 * 60);
    } else {
      setRemainingTime(5);
    }
  }, [isFocus]);

  const handleChangeIsFocus = () => {
    setIsPlaying(false);
    setIsFocus(!isFocus);
  };

  return (
    <main className="flex items-center justify-center">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-lg w-full">
        <LightDarkMode />
        <Clock remainingTime={remainingTime} />
        <FocusMessage isFocus={isFocus} />
        <PlayButton
          isPlaying={isPlaying}
          togglePlaying={() => {
            setIsPlaying(!isPlaying);
          }}
        />
        <BreakButton
          isFocus={isFocus}
          handleChangeIsFocus={handleChangeIsFocus}
        />
      </div>
    </main>
  );
}
