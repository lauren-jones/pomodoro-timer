"use client";
import { useState, useEffect } from "react";
import BreakButton from "./components/BreakButton";
import Clock from "./components/Clock";
import FocusMessage from "./components/FocusMessage";
import LightDarkMode from "./components/LightDarkMode";
import PlayButton from "./components/PlayButton";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1 * 60);

  useEffect(() => {
    let timeout: any = null;
    if (isPlaying && remainingTime > 0) {
      timeout = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    }
    if (isPlaying && remainingTime == 0) {
      setIsPlaying(false);
      setIsFocus(!isFocus);
      setIsPlaying(true);
    }
    return () => clearTimeout(timeout);
  }, [remainingTime, isPlaying]);

  useEffect(() => {
    if (isFocus) {
      setRemainingTime(1 * 20);
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
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <LightDarkMode isDarkMode={isDarkMode} />
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
