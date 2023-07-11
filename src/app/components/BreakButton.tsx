import React from "react";

interface BreakButtonProps {
  isFocus: boolean;
  handleChangeIsFocus: () => void;
}

export default function BreakButton({
  isFocus,
  handleChangeIsFocus,
}: BreakButtonProps) {
  return (
    <div className="flex justify-center p-4">
      {isFocus ? (
        <button
          onClick={handleChangeIsFocus}
          className="bg-red-400 mb-10 rounded-lg px-8 py-3 text-xl text-white tracking-wide uppercase font-light"
        >
          Take a break
        </button>
      ) : (
        <button
          onClick={handleChangeIsFocus}
          className="bg-blue-400 mb-10 dark:bg-blue-500 rounded-lg px-8 py-3 text-xl text-white tracking-wide uppercase font-light"
        >
          Start work
        </button>
      )}
    </div>
  );
}
