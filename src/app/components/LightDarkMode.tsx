import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { LuTimer } from "react-icons/lu";
import { useTheme } from "next-themes";

interface LightDarkProps {
  isDarkMode: boolean;
}

export default function LightDarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center p-4">
        <div className="text-xl font-light tracking-wide text-gray-800 dark:text-white">
          pomodoro
        </div>{" "}
        <LuTimer size={20} className="text-gray-800 dark:text-white" />
      </div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="p-4"
      >
        {theme == "light" ? (
          <FiMoon size={20} className="text-gray-800 dark:text-white" />
        ) : (
          <FiSun size={20} className="text-gray-800 dark:text-white" />
        )}
      </button>
    </div>
  );
}
