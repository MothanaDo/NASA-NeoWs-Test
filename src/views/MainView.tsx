import React from "react";
import { BarChartView } from "../components/BarChartView";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";
import { SearchComp } from "../components/SearchComp";
import { Header } from "../components/Header";

export const MainView: React.FC = () => {
  const {
    filteredData,
    orbitalBodies,
    error,
    searchTerm,
    setSearchTerm,
    selectedOrbitalBody,
    setSelectedOrbitalBody,
  } = useFilteredNEOData();

  if (error)
    return (
      <p className="flex justify-center items-center h-screen italic text-center text-red-600">
        {error}
      </p>
    );

  return (
    <div className="max-w-5xl flex flex-col gap-2 mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl ">
      <Header />
      <SearchComp
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        orbitalBodies={orbitalBodies}
        selectedOrbitalBody={selectedOrbitalBody}
        setSelectedOrbitalBody={setSelectedOrbitalBody}
      />

      <BarChartView data={filteredData} />
    </div>
  );
};
