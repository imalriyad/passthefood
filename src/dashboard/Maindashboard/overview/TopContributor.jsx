import React from 'react';

const TopContributor = () => {

    const recentUsers = [
        {
          userProfile: {
            name: "Jhone Doe",
            logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
          },
          role: "Business",
          timeAgo: "2m ago", // Direct string
        },
        {
          userProfile: {
            name: "Elon Musk",
            logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
          },
          role: "Business",
          timeAgo: "5m ago", // Direct string
        },
        {
          userProfile: {
            name: "Daniel Tye",
            logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
          },
          role: "Charity",
          timeAgo: "1h ago", // Direct string
        },
        {
          userProfile: {
            name: "Olivia Brown",
            logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
          },
          role: "Charity",
          timeAgo: "3h ago", // Direct string
        },
        {
          userProfile: {
            name: "James Davis",
            logo: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
          },
          role: "Personal",
          timeAgo: "2d ago", // Direct string
        },
      ];
      


    return (
        <>
            <div className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-2 text-left text-sm md:text-base">Name</th>
              <th className="py-2 px-2 text-left text-sm md:text-base">Role</th>
              <th className="py-2 px-2 text-left text-sm md:text-base">Times</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-2 flex items-center text-sm md:text-base">
                  <img
                    src={user.userProfile.logo}
                    alt={`${user.userProfile.name} Logo`}
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  {user.userProfile.name}
                </td>
                <td className="py-2 px-2 text-sm md:text-base font-medium">{user.role}</td>
                <td className="py-2 px-2 text-sm  md:text-base">
                <span className='bg-green-500 py-1 text-white px-3 rounded-full '> 7</span>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>
    );
};

export default TopContributor;