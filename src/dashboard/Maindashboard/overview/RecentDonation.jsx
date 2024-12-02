import React from "react";

const RecentDonation = () => {
  const donations = [
    {
      userProfile: {
        name: "John Doe",
        logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      date: "2024-11-01",
      status: "Progress",
    },
    {
      userProfile: {
        name: "Jane Smith",
        logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      date: "2024-11-02",
      status: "Progress",
    },
    {
      userProfile: {
        name: "Emily Brown",
        logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      date: "2024-11-03",
      status: "Completed",
    },
    {
      userProfile: {
        name: "Michael Johnson",
        logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      date: "2024-11-04",
      status: "Completed",
    },
    {
      userProfile: {
        name: "Sarah Lee",
        logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      date: "2024-11-05",
      status: "Completed",
    },
  ];
  

  return (
    < >
  <div className="w-full">
    <table className=" w-full  bg-white rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Name</th>
          <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Date</th>
          <th className="py-2 px-2 md:px-4 text-left text-sm md:text-base">Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Recent Donation */}
        <tr className="border-t bg-gray-100">
          <td className="py-2 px-2 md:px-4 flex items-center text-sm md:text-base">
            <img
              src={donations[0].userProfile.logo}
              alt={`${donations[0].userProfile.name} Logo`}
              className="w-8 h-8 mr-2 rounded-full"
            />
            {donations[0].userProfile.name}
          </td>
          <td className="py-2 px-2 md:px-4 text-sm md:text-base">{donations[0].date}</td>
          <td className="py-2 px-2 md:px-4 text-sm md:text-base">
            <span
              className={`text-white text-xs md:text-sm py-1 px-2 rounded-full ${
                donations[0].status === "Completed"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            >
              {donations[0].status}
            </span>
          </td>
        </tr>

        {/* Other Donations */}
        {donations.slice(1).map((donation, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 px-2 md:px-4 flex items-center text-sm md:text-base">
              <img
                src={donation.userProfile.logo}
                alt={`${donation.userProfile.name} Logo`}
                className="w-8 h-8 mr-2 rounded-full"
              />
              {donation.userProfile.name}
            </td>
            <td className="py-2 px-2 md:px-4 text-sm md:text-base">{donation.date}</td>
            <td className="py-2 px-2 md:px-4 text-sm md:text-base">
              <span
                className={`text-white text-xs md:text-sm py-1 px-2 rounded-full ${
                  donation.status === "Completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              >
                {donation.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>

  
  );
};

export default RecentDonation;
