import React from 'react';
import saveFood from "../mission/food.png"
import impact from "../mission/impact.png"
import support from "../mission/support.png"

const Mission = () => {
    return (
        <div>
             <div className="max-w-screen-xl mx-auto py-12 px-5">
                    <h1 className="md:text-3xl text-2xl font-bold text-center lg:py-8 md:mb-16 mb-8">Mission of Passthefood</h1>
                    <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
                        <div className="border bg-[#f2fffe] p-6 rounded-lg drop-shadow-sm text-center">
                            <img src={saveFood} alt="Stop Waste, Start Feeding" className="mx-auto w-[70px] mb-4"/>
                            <h2 className="text-xl font-bold mb-2">Stop Waste, Start Feeding</h2>
                            <p>Cut down food waste and help fight hunger in communities.</p>
                        </div>
                        <div className="border bg-[#f2fffe] p-6 rounded-lg drop-shadow-sm text-center">
                            <img src={support} alt="Choose Sustainability" className="mx-auto w-[70px] mb-4"/>
                            <h2 className="text-xl font-bold mb-2">Choose Sustainability</h2>
                            <p>Encourage sustainable consumption and waste reduction.</p>
                        </div>
                        <div className="border bg-[#f2fffe] p-6 rounded-lg drop-shadow-sm text-center">
                            <img src={impact} alt="Share Food, Change Lives" className="mx-auto w-[70px] mb-4"/>
                            <h2 className="text-xl font-bold mb-2">Share Food, Change Lives</h2>
                            <p>Build a community of people actively sharing food
                            </p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Mission;