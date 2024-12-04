import RecentUsers from "../overview/RecentUsers";

const ManageUser = () => {

  const recentUsers = [
    {
      "userProfile": {
        "name": "Jhone Doe",
        "logo": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      },
      "role": "Business",
      "timeAgo": "2m ago",
      "email": "jhone.doe@example.com",
      "phone": "+1234567890",
      "action": "Edit"
    },
    {
      "userProfile": {
        "name": "Elon Musk",
        "logo": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      },
      "role": "Business",
      "timeAgo": "5m ago",
      "email": "elon.musk@example.com",
      "phone": "+1987654321",
      "action": "Edit"
    },
    {
      "userProfile": {
        "name": "Daniel Tye",
        "logo": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      },
      "role": "Charity",
      "timeAgo": "1h ago",
      "email": "daniel.tye@example.com",
      "phone": "+1122334455",
      "action": "Edit"
    },
    {
      "userProfile": {
        "name": "Olivia Brown",
        "logo": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      },
      "role": "Charity",
      "timeAgo": "3h ago",
      "email": "olivia.brown@example.com",
      "phone": "+1222333444",
      "action": "Edit"
    },
    {
      "userProfile": {
        "name": "James Davis",
        "logo": "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      },
      "role": "Personal",
      "timeAgo": "2d ago",
      "email": "james.davis@example.com",
      "phone": "+1333444555",
      "action": "Edit"
    }
  ];
  

    return (
        <div className="p-2 md:p-6">
                  <div className="w-full">
      <div className="">
        <table className="min-w-full  bg-white rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-2 text-left text-sm md:text-base">No.</th>
              <th className="py-2 px-2 text-left text-sm md:text-base">User</th>
              <th className="py-2 px-2 text-left text-sm md:text-base">Info</th>
              <th className="py-2 px-2 text-left text-sm md:text-base">Action</th>
            </tr>
          </thead>
          <tbody  className="space-y-4">
            {recentUsers.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="py-4 font-bold pl-4 text-sm md:text-base">
                {index+1}
                </td>
                <td className="py-4 font-medium px-2 flex items-center text-sm md:text-base">
                  <img
                    src={user.userProfile.logo}
                    alt={`${user.userProfile.name} Logo`}
                    className="w-8 h-8  mr-2 rounded-full"
                  />
                  {user.userProfile.name}
                </td>
                <td className="pb-4 space-y-2 px-2 text-sm md:text-base font-medium">
            
               <div className="text-sm hidden md:block">
                {user.email}
                </div>
               <div className="text-sm hidden md:block">
                  {user.phone}
               </div>
                  <div className="text-sm">
                  {user.role}
               </div>
            
                </td>

                <td className="py-4 px-2 text-sm md:text-base">
              <span className="text-xl px-4">
              <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManageUser;