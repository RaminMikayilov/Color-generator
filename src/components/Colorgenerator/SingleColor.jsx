import React, { useEffect, useState } from "react";
import rgbToHex from "../../utils/rgbToHex";

const SingleColor = ({ rgb, index }) => {
  const color = rgb.join(",");
  const hex = rgbToHex(...rgb);

  const [message, setMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setMessage(false);
      clearInterval(interval);
    }, 1500);
  }, [message]);

  return (
    <div
      className={`flex items-center flex-col border-2 p-5 gap-3 shadow-md rounded-md relative ${
        message && "bg-blue-200"
      } `}
    >
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer border-2 border-blue-400 hover:scale-110 duration-500"
        style={{ background: `rgb(${color})` }}
        onClick={() => {
          navigator.clipboard.writeText(hex);
          setMessage(true);
        }}
      >
        <span
          className={`font-bold ${index > 10 ? "text-white" : "text-black"}`}
        >
          copy
        </span>
      </div>

      <div className="font-bold text-indigo-900">{hex}</div>

      {/* Add a modal for the copied message */}
      <div
        className={`ease-in-out text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 py-3 bg-blue-200 text-blue-900 font-bold bg-opacity-50 backdrop-blur-lg rounded drop-shadow-lg ${
          message ? "block" : "hidden"
        }`}
      >
        Copied
      </div>
    </div>
  );
};

export default SingleColor;
