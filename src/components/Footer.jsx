import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
             <footer className=" md:pt-20 pt-14 pb-8"   style={{
    background: 'linear-gradient(to bottom, rgba(245, 251, 250, 1), rgba(246, 247, 243, 1), rgba(235, 235, 235, 0.05))',
  }}>
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
                        <div className="flex flex-col gap-1 mb-8 md:mb-0">
                        <img src="https://i.postimg.cc/dQHYK6zj/logo.png" width={"200px"} alt="SteadFast Courier Logo" className="object-cover"/>
                            <p>House# 42, Rd No. 5/A, Dhanmondi</p>
                            <p>E-mail: info@passthefood.com</p>
                            <p>Hotline: +9834902323</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-8 md:mb-0">
                            <h3 className="font-bold mb-2">Important Links</h3>
                            <a href="#">FAQ</a>
                            <a href="#" className="mb-1">Contact Us</a>
                            <a href="#" className="mb-1">Food Safety</a>
                          
                        </div>
                        <div className="flex flex-col gap-1 mb-8 md:mb-0">
                            <h3 className="font-bold mb-2">Get Involved</h3>
                            <a href="#" className="mb-1">Share Food</a>
                            <a href="#">Distrubute Food</a>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <h3 className="font-bold mb-2">Follow Us</h3>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" className="text-primary text-2xl"><FaFacebook />
                                </a>
                                <a href="#" className="text-primary text-2xl"><FaLinkedin />
                                </a>
                                <a href="#" className="text-primary text-2xl"><FaInstagramSquare />
                                </a>
                            </div>
                            <div className="flex space-x-2">
                            <img src="https://steadfast.com.bd/landing-page/asset/images/app_store.png" alt="Get it on Google Play" className="w-32"/>
                                <img src="https://steadfast.com.bd/landing-page/asset/images/google_play.png" alt="Download on the App Store" className="w-32"/>
                              
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p>© 2024 - 2024 Passthefood All rights reserved.</p>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;