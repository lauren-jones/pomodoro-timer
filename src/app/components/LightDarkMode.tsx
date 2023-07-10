import React from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";

interface LightDarkProps {
  isDarkMode: boolean;
}

export default function LightDarkMode({ isDarkMode }: LightDarkProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center p-4">
        <div className="text-xl font-light tracking-wide text-gray-800">
          pomodoro
        </div>{" "}
        <LuTimer size={20} className="text-gray-800" />
      </div>
      <div className="flex justify-end items-center p-4">
        <BsFillSunFill className="mr-2 text-red-400" size={18} />
        <label className="relative inline-flex cursor-pointer">
          <input
            type="checkbox"
            value=""
            defaultChecked={isDarkMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
        </label>
        <BsMoonFill className="ml-2 text-red-400" size={16} />
      </div>
    </div>
  );
}
