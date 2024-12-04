import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const donationData = [
  { name: 'Business', value: 40 },  // 40% from Business
  { name: 'Charity', value: 30 },   // 30% from Charity
  { name: 'Individual', value: 30 } // 30% from Individuals
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DonationBySource = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={donationData}          dataKey="value"
          fontSize={10}
          nameKey="name"
          cx="50%" // Center the pie chart horizontally
          cy="50%" // Center the pie chart vertically
          outerRadius={150} // Define the outer radius
          labelLine={false} // Disable label lines
          label={({ percent, name }) => `${name}: ${(percent * 100).toFixed(1)}%`} // Show name and percentage inside the slices
        >
          {donationData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DonationBySource;
