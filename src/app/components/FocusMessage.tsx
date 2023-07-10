import React from "react";

interface FocusMessageProps {
  isFocus: boolean;
}

export default function FocusMessage({ isFocus }: FocusMessageProps) {
  return (
    <div className="text-xl font-light text-center p-4 text-gray-500 tracking-wide">
      {isFocus ? "FOCUS TIME" : "BREAK TIME"}
    </div>
  );
}
