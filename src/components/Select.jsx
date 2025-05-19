import React, { useState } from "react";

export default function Select({ value, options, handleChange }) {
  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    handleChange(value);
  };

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left border rounded-lg border-gray-200 bg-white py-3 px-4 text-sm text-gray-500 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        {selectedLabel || "Выберите тему вашего вопроса"}
        <img src="chevron-down.svg" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <li
              key={option.label}
              onClick={() => handleSelect(option.value)}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
