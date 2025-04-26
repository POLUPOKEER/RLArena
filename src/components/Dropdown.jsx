const Dropdown = ({ values, onClick }) => {
  return (
    <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-48">
      <ul className="p-2">
        {values.map((item, index) => (
          <li
            key={index}
            onClick={() => onClick(item)}
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer border-b last:border-none"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
