import React from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  isPlaying: boolean;
  togglePlaying: () => void;
}

export default function PlayButton({
  isPlaying,
  togglePlaying,
}: PlayButtonProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={togglePlaying}
        className="flex items-center justify-center border-2 border-gray-300 rounded-full h-11 w-11"
      >
        {isPlaying ? (
          <BsPauseFill className="text-red-400" size={20} />
        ) : (
          <BsPlayFill className="text-red-400 " size={20} />
        )}
      </button>
    </div>
  );
}
