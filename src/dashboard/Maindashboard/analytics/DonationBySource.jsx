import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const donationData = [
  { name: "Business", value: 40 }, // 40% from Business
  { name: "Charity", value: 30 }, // 30% from Charity
  { name: "Individual", value: 30 }, // 30% from Individuals
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DonationBySource = () => {
  return (
    <div
      style={{
        width: "100%",
        height:"400px",
        maxWidth: "600px", // Limit max width for large screens
        aspectRatio: "1", // Maintain a square aspect ratio
        margin: "auto", // Center the chart horizontally
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={donationData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="50%"
            labelLine={true}
            label={({ percent, name }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            } // Display name and percentage
          >
            {donationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonationBySource;
