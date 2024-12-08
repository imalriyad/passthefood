const PersonsBar = () => {
  return (
    <>
      <div className={` lg:w-[320px] w-full p-4 border-r-2`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Inbox</h1>
        </div>

        <div className="mt-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
         
          <div className="bg-primary text-white backdrop-blur-sm cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 border-2 object-cover rounded-full" alt="" />
            <h1 className="text-md font-semibold">Al Riyad</h1>
          </div>
         
          <div className="bg-primary text-white backdrop-blur-sm cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 border-2 object-cover rounded-full" alt="" />
            <h1 className="text-md font-semibold">Al Riyad</h1>
          </div>
          <div className="bg-primary text-white backdrop-blur-sm cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 border-2 object-cover rounded-full" alt="" />
            <h1 className="text-md font-semibold">Al Riyad</h1>
          </div>
          <div className="bg-primary text-white backdrop-blur-sm cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 border-2 object-cover rounded-full" alt="" />
            <h1 className="text-md font-semibold">Al Riyad</h1>
          </div>
          <div className="bg-primary text-white backdrop-blur-sm cursor-pointer p-3 w-full flex items-center gap-4 rounded-lg">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-10 h-10 border-2 object-cover rounded-full" alt="" />
            <h1 className="text-md font-semibold">Al Riyad</h1>
          </div>
 
         
          
        </div>
      </div>
    </>
  );
};

export default PersonsBar;