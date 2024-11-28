import React from 'react';
import RecentDonation from './RecentDonation';

const Overview = () => {
    return (
      <div>
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Donations</h2>
              <div>
                <button className=" bg-primary text-white px-3 py-1 rounded-md">
                  Print
                </button>
              </div>
            </div>
            <RecentDonation></RecentDonation>
          </div>
        </div>
      </div>
    );
};

export default Overview;