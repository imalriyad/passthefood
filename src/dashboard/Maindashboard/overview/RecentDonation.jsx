import React from "react";

const RecentDonation = () => {
  const donations = [
    {
      userProfile: {
        name: "Dropbox Design System",
        logo: "https://placehold.co/32x32?text=Dropbox+Logo",
        members: 5,
      },
      date: "2024-11-01",
      status: "In Progress",
      foodType: "Vegetarian",
    },
    {
      userProfile: {
        name: "Slack Team UI Design",
        logo: "https://placehold.co/32x32?text=Slack+Logo",
        members: 5,
      },
      date: "2024-11-02",
      status: "In Progress",
      foodType: "Non-Vegetarian",
    },
    {
      userProfile: {
        name: "GitHub Satellite",
        logo: "https://placehold.co/32x32?text=GitHub+Logo",
        members: 5,
      },
      date: "2024-11-03",
      status: "Completed",
      foodType: "Vegan",
    },
    {
      userProfile: {
        name: "3D Character Modelling",
        logo: "https://placehold.co/32x32?text=3D+Logo",
        members: 5,
      },
      date: "2024-11-04",
      status: "In Progress",
      foodType: "Vegetarian",
    },
    {
      userProfile: {
        name: "3D Character Modelling",
        logo: "https://placehold.co/32x32?text=3D+Logo",
        members: 5,
      },
      date: "2024-11-04",
      status: "In Progress",
      foodType: "Vegetarian",
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Food Type</th>
              </tr>
            </thead>
            <tbody>
              {donations?.map((donation, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={donation.userProfile.logo}
                      alt={`${donation.userProfile.name} Logo`}
                      className="w-8 h-8 mr-2"
                    />
                    {donation.userProfile.name}
                  </td>

                  <td className="py-2 px-4">{donation.date}</td>

                  <td className="py-2 px-4">
                    <span
                      className={`text-white text-sm py-1 px-3 rounded-full ${
                        donation.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {donation.status}
                    </span>
                  </td>

                  <td className="py-2 px-4">{donation.foodType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentDonation;
