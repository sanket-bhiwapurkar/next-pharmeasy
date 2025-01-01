import React from "react";
import { InputBase } from "../inputBase";
import { CiSearch } from "react-icons/ci";
import { Button } from "../../buttons/Button";

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-white flex items-center ps-3 pe-1 gap-3 border border-gray-300 rounded-full h-12 shadow-lg ${className}`}
    >
      <CiSearch className="text-2xl" />
      <InputBase
        type="search"
        id="main-search"
        name="main-search"
        placeholder="Search for"
        className="w-full"
      />
      <Button className="rounded-full w-24">Search</Button>
    </div>
  );
};

export default SearchInput;
