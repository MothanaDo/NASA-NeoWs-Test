import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChartProps } from "../types/types";

export const BarChartView: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height={900}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="estimated_diameter.kilometers.estimated_diameter_min"
            fill="#8884d8"
          />
          <Bar
            dataKey="estimated_diameter.kilometers.estimated_diameter_max"
            fill="#82ca9d"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
