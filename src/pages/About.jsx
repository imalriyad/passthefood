
import childbg from "../components/header/hero/childbg.jpg"
import { Button } from "@nextui-org/react";

const About = () => {
    return (


      <div className="max-w-screen-lg mx-auto p-4 px-4">
                    <header className="text-center mb-12">
                        <h1 className="md:text-3xl text-2xl pt-8 font-bold">Grow with SteadFast</h1>
                    </header>
                    <div className=" rounded-lg shadow-md md:p-8 p-4 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                            <h2 className="text-gray-500 text-sm mb-2">About Us</h2>
                            <h3 className="md:text-4xl text-2xl font-bold mb-4">We Provide The Best Quality Courier Services</h3>
                            <p className="text-gray-600  mb-4">
                                Steadfast courier is a leading courier service company in Bangladesh dedicated to delivering reliable and efficient e-commerce logistics solutions in time.
                            </p>
                            <ul className="text-gray-600 space-y-2">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-yellow-500 mr-2 "></i> Daily pickups, no limitations
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-yellow-500 mr-2 "></i> Faster Payment Service
                                </li>
                                <li className="flex items-center pb-4">
                                    <i className="fas fa-check text-yellow-500 mr-2 "></i> Cash on Delivery
                                </li>

                                <Button color="primary" className='md:hidden block font-semibold' size='sm'>Join with us</Button>
                                <Button color="primary" className='md:block hidden font-semibold' size='md'>Join with us</Button>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src={childbg} alt="passthefoodabout" />
                        </div>
                    </div>
                </div>

    )
};

export default About;