import React from "react";
import { FilterDropdown } from "./FilterDropdown";
import { SearchBar } from "./SearchBar";
import { SearchCompProps } from "../types/types";

export const SearchComp: React.FC<SearchCompProps> = ({
  searchTerm,
  setSearchTerm,
  orbitalBodies,
  selectedOrbitalBody,
  setSelectedOrbitalBody,
}) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 items-center mb-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterDropdown
        options={orbitalBodies}
        selected={selectedOrbitalBody}
        onChange={setSelectedOrbitalBody}
      />
    </div>
  );
};
