import React, { useEffect, useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

const ColorGenerator = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [color, setColor] = useState("#00ffff");

  // default color
  useEffect(() => {
    setList(new Values(color).all(10));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:pb-0 pb-5 items-center justify-evenly sticky top-0 left-0 bg-white shadow-md z-10">
        <h1 className="text-3xl text-indigo-900 font-bold p-6">
          Color Generator
        </h1>
        <form onSubmit={submit}>
          <input
            type="text"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 font-medium ${
              error && "bg-red-400"
            }`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3 p-2 md:p-3 lg:p-5 xl:p-7">
        {list.map((item, index) => {
          return <SingleColor key={index} index={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ColorGenerator;
