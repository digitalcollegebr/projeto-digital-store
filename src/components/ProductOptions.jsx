import React, { useState } from "react";

const ProductOptions = () => {
  const [selectedSize, setSelectedSize] = useState(41);
  const [selectedColorIndex, setSelectedColorIndex] = useState(1);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ["#5EE7FF", "#FF6B6B", "#555", "#6C63FF"];

  return (
    <div>
    <h3 className="text-sm font-semibold text-gray-600 mb-2">Tamanho</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 rounded border flex items-center justify-center text-sm font-semibold ${
              selectedSize === size
                ? "bg-pink-600 text-white border-pink-600 transition duration-500 scale-120"
                : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Cor</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setSelectedColorIndex(index)}
            className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
              selectedColorIndex === index
                ? "border-white ring-2 ring-pink-600 transition duration-500 scale-120"
                : "border-white"
            }`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductOptions;