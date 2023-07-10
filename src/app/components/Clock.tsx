import React, { useState, useEffect } from "react";

interface ClockProps {
  remainingTime: number;
}

export default function Clock({ remainingTime }: ClockProps) {
  const formatTime = (remainingTime: number) => {
    const minutes = Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (remainingTime % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className="flex items-center justify-center p-4 mt-10">
        <div className="bg-gradient-to-r from-white to-gray-100 shadow-md rounded-full h-72 w-72 flex items-center justify-center">
          <div>
            <div className="text-[60px] font-thin text-red-400">
              {formatTime(remainingTime)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
