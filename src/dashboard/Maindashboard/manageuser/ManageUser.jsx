import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";


const ManageUser = () => {
  const axios = useAxios();
  const [allUser, setAllUser] = useState();


  // getting all the user
  useEffect(() => {
    axios
      .get("/get-all-users")
      .then((res) => res.data)
      .then((data) => setAllUser(data));
  }, []);

  

  return (
    <div className="p-2 md:p-6">
      <div className="w-full">
        <div className="">
          <table className="min-w-full  bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-2 text-left text-sm md:text-base">
                  No.
                </th>
                <th className="py-2 px-2 text-left text-sm md:text-base">
                  User
                </th>
                <th className="py-2 px-2 text-left text-sm md:text-base">
                  Info
                </th>
                <th className="py-2 px-2 text-left text-sm md:text-base">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {allUser?.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4 font-bold pl-4 text-sm md:text-base">
                    {index + 1}
                  </td>
                  <td className="py-4 font-medium px-2 flex items-center text-sm md:text-base">
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="w-8 h-8  mr-2 rounded-full"
                    />
                    {user?.name}
                  </td>
                  <td className="pb-4 space-y-2 px-2 text-sm md:text-base font-medium">
                    <div className="text-sm hidden md:block">
                      {" "}
                      <span className="bg-primary text-white px-2 rounded">
                        {user?.email}
                      </span>
                    </div>
                    <div className="text-sm hidden md:block">
                      <span className="bg-primary capitalize text-white px-2 rounded">
                        {user?.phone}
                      </span>
                    </div>
                    <div className="text-sm bg-primary capitalize inline-block rounded text-white px-2">
                      {user?.accountType}
                    </div>
                  </td>

                  <td className="py-4 px-2 text-sm md:text-base">
                    <span
                    
                      className="text-xl cursor-pointer px-4"
                    >
                      <i className="fa-solid fa-trash font-bold"></i>
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
