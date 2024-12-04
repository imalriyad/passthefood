import React from 'react';
import RecentDonation from './RecentDonation';
import RecentUsers from './RecentUsers';
import { Button } from '@nextui-org/react';
import LastDonationsChart from './LastDonationsChart';
import TopContributor from './TopContributor';

const Overview = () => {
    return (
      <div className='overflow-x-hidden'>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <i className="fas fa-users"></i>
              </div>
              <div>
                <p className="text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">1,294</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>
              <div>
                <p className="text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold">1303</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <div>
                <p className="text-gray-600">Total Food Items</p>
                <p className="text-2xl font-bold">$1,345</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <div>
                <p className="text-gray-600">Total Active Alerts</p>
                <p className="text-2xl font-bold">576</p>
              </div>
            </div>
          </div>
          <div >
          <div className='grid xl:grid-cols-2 grid-cols-1 w-full gap-6 items-start mb-4'>

         {/*Recent Donations  */}
          <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
          <div className='flex items-start justify-between w-full'>
         <h2 className="text-xl font-bold w-full  mb-4">Recent Donations</h2>
         <Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
         </div>
         <RecentDonation></RecentDonation>
          </div>

          {/* Last 7 days donation charts */}
          <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
         <div className='flex items-start justify-between w-full'>
         <h2 className="text-xl font-bold w-full  mb-4">Donations (Last 7 Days)</h2>
         <Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
         </div>
          <LastDonationsChart></LastDonationsChart>
          </div>


         {/* Recent Users */}
          <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
         <div className='flex items-start justify-between w-full'>
         <h2 className="text-xl font-bold w-full  mb-4">Recent Users</h2>
         <Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
         </div>
         <RecentUsers></RecentUsers>
          </div>


        {/* Top Contributor */}
          <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
         <div className='flex items-start justify-between w-full'>
         <h2 className="text-xl font-bold w-full  mb-4">Top Contributor</h2>
         <Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
         </div>
   <TopContributor></TopContributor>
          </div>

       

            </div>
          </div>
        </div>
      </div>
    );
};

export default Overview;

        
