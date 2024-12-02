import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LastDonationsChart = () => {
  const last7DaysDonations = [
    { day: "Saturday", donations: 6 },
    { day: "Sunday", donations: 8 },
    { day: "Monday", donations: 10 },
    { day: "Tuesday", donations: 12 },
    { day: "Wednesday", donations: 7 },
    { day: "Thursday", donations: 9 },
    { day: "Friday", donations: 11 },
  ];

  return (
    <div style={{ width: "100%", height:"280px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={last7DaysDonations} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="donations" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LastDonationsChart;
