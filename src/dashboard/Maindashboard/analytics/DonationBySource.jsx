import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const donationData = [
  { name: 'Business', value: 40 },  // 40% from Business
  { name: 'Charity', value: 30 },   // 30% from Charity
  { name: 'Individual', value: 30 } // 30% from Individuals
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DonationBySource = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={donationData}
            dataKey="value"
            fontSize={12}
            nameKey="name"
            cx="50%" 
            cy="50%" 
            outerRadius={150}
            labelLine={true}
            label={({ percent, name }) => `${name}: ${(percent * 100).toFixed(1)}%`} // Show name and percentage inside the slices
          >
            {donationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default DonationBySource;
