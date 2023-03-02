import React from "react";
import rgbToHex from "../../utils/rgbToHex";

const SingleColor = ({ rgb, index }) => {
  const color = rgb.join(",");
  const hex = rgbToHex(...rgb);
  console.log(hex);
  return (
    <>
      <div className="flex items-center flex-col border-2 p-5 gap-3 shadow-md rounded-md">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center cursor-pointer border-2 border-blue-400 hover:scale-110 duration-500"
          style={{ background: `rgb(${color})`}}
          onClick={() => {
            navigator.clipboard.writeText(hex);
          }}
        >
          <span className={index > 10 ? "text-white" : "text-black"}>copy</span>
        </div>

        <div>{hex}</div>
      </div>
    </>
  );
};

export default SingleColor;
