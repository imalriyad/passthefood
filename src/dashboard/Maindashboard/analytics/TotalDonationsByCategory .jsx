import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Grains', donations: 400 },
  { category: 'Fruits', donations: 300 },
  { category: 'Vegetables', donations: 250 },
  { category: 'Canned Goods', donations: 180 },
  { category: 'Dairy Products', donations: 350 },
  { category: 'Meat & Poultry', donations: 500 },
  { category: 'Snacks & Sweets', donations: 220 },
];

const FoodDonationsByCategory = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" angle={-45} textAnchor="end" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="donations" fill="#22c55e" />
    </BarChart>
  </ResponsiveContainer>
);

export default FoodDonationsByCategory;
