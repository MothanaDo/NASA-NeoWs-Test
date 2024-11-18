import React, { useState } from "react";
import { BarChartView } from "../components/BarChartView";
import { DataTable } from "../components/DataTable";
import { useFilteredNEOData } from "../hooks/useFilteredNEOData";
import { SearchComp } from "../components/SearchComp";
import { ViewSwitcher } from "../components/ViewSwitcher.tsx";
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

  const [view, setView] = useState<"chart" | "table">("chart");

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

      <ViewSwitcher view={view} setView={setView} filteredData={filteredData} />

      {view === "chart" ? (
        <BarChartView data={filteredData} />
      ) : (
        <DataTable data={filteredData} />
      )}
    </div>
  );
};
