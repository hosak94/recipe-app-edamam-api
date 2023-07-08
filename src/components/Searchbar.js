import React from "react";
import { Element } from "react-scroll";

const Searchbar = ({
  type,
  placeholder,
  required = false,
  search,
  name,
  handleInputChange,
  rightIcon,
}) => {
  return (
    <Element name="searchScroll">
      <div className="relative">
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={search}
          onChange={handleInputChange}
          required={required}
          className=" bg-black border border-gray-400
         text-gray-300 text-md rounded-full block
           w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl"
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </Element>
  );
};

export default Searchbar;
