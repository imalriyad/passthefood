import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const WeightOfFoodDonatedChart = () => {
  const data = [
    { category: "Vegetables", weight: 120, usdSaved: 300 },
    { category: "Fruits", weight: 80, usdSaved: 200 },
    { category: "Grains", weight: 150, usdSaved: 450 },
    { category: "Canned Goods", weight: 100, usdSaved: 250 },
    { category: "Meat", weight: 50, usdSaved: 150 }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" fontWeight={500} />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* Bar for weight in kg */}
        <Bar dataKey="weight" fill="#FF6384" name="Weight (kg)" />
        
        {/* Bar for USD saved */}
        <Bar dataKey="usdSaved" fill="#00C49F" name="USD Saved" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeightOfFoodDonatedChart;

