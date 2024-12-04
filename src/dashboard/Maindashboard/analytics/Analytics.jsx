import { Button } from "@nextui-org/react";
import PieChart from "./PieChart";
import TotalDonationsByCategory from "./TotalDonationsByCategory ";
import DonationBySource from "./DonationBySource";

const Analytics = () => {
    const divisionData = [
        { division: "Dhaka", donations: 120 },
        { division: "Chattogram", donations: 90 },
        { division: "Khulna", donations: 60 },
        { division: "Sylhet", donations: 45 },
        { division: "Rajshahi", donations: 75 },
        { division: "Barishal", donations: 30 },
        { division: "Mymensingh", donations: 50 },
        { division: "Rangpur", donations: 40 }
      ];
    
      const labels = divisionData.map(item => item.division);
      const values = divisionData.map(item => item.donations);
    
      const chartData = { labels, values };

    return (
        <div>
<div className='grid p-4 xl:grid-cols-2 grid-cols-1 w-full gap-6 items-start mb-4'>

{/*Recent Donations  */}
 <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
 <div className='flex items-start justify-between w-full'>
<h2 className="text-xl font-bold w-full  mb-4">Donations by Region (%)</h2>
<Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '400px' }}>
  <PieChart data={chartData} />
</div>


 </div>

 {/* Last 7 days donation charts */}
 <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
<div className='flex items-start justify-between w-full'>
<h2 className="text-xl font-bold w-full  mb-4">Food Donations by Category</h2>
<Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '400px' }}>
 <TotalDonationsByCategory></TotalDonationsByCategory>
</div>

 </div>



 <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
<div className='flex items-start justify-between w-full'>
<h2 className="text-xl font-bold w-full  mb-4">Donation Source</h2>
<Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '400px' }}>
 <DonationBySource></DonationBySource>
</div>

 </div>


{/* Top Contributor */}
 <div className='flex flex-col w-full bg-white p-4 rounded-lg shadow-md  items-center'>
<div className='flex items-start justify-between w-full'>
<h2 className="text-xl font-bold w-full  mb-4">Top Contributor</h2>
<Button onClick={()=>window.print()} size='sm' color='primary'>Print</Button>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '400px' }}>
  <PieChart data={chartData} />
</div>
 </div>
   </div>
      
     </div>
    );
};

export default Analytics;