import React from "react";
import { useState } from "react";

function Card(props) {
  const [value, setValue] = useState(0);

  return (
    <>
        <div className="card max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">

    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
      alt="Laptop"
      className="w-full h-48 object-cover"
    />

    <div className="p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {props.name}
      </h2>

      <p className="text-gray-600 mb-4">
        {props.Role}
      </p>

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Learn More
      </button>

    </div>

  </div>
    </>
  );
}

export default Card;