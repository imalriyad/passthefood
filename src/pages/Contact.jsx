import { Button } from '@nextui-org/react';
import React from 'react';

const Contact = () => {
    return (
        <div className='contact'>
             <div className="container mx-auto py-16 px-5">
                    <h1 className="text-3xl font-bold text-center mb-8">Get in Touch with Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border drop-shadow-lg rounded-lg p-6 text-center">
                             <i className="fas fa-map-marker-alt md:pt-10 text-orange-500 text-2xl mb-2"></i>
                                <h2 className="font-bold text-lg">Address</h2>
                                <p>17/2, Dhanmondi 3/A, Dhaka-1209</p>
                            </div>
                            <div className="border drop-shadow-lg rounded-lg p-6 text-center">
                                <i className="fas fa-headset md:pt-10 text-green-500 text-2xl mb-2"></i>
                                <h2 className="font-bold text-lg">Call Us</h2>
                                <p>09678-045045</p>
                            </div>
                            <div className="border drop-shadow-lg rounded-lg p-6 text-center">
                                <i className="fas fa-envelope md:pt-10 text-red-500 text-2xl mb-2"></i>
                                <h2 className="font-bold text-lg">Mail</h2>
                                <p>info@passthefood.com</p>
                            </div>
                            <div className="border drop-shadow-lg rounded-lg p-6 text-center">
                                <i className="fas fa-phone md:pt-10 text-blue-500 text-2xl mb-2"></i>
                                <h2 className="font-bold text-lg">Seller</h2>
                                <p> +9834902323</p>
                            </div>
                        </div>
                        <div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3 outline-none" />
                                <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-3 outline-none" />
                                <input type="email" placeholder="Mail Address" className="w-full border rounded-lg p-3 outline-none" />
                                <input type="text" placeholder="Subject" className="w-full border rounded-lg p-3 outline-none" />
                                <textarea placeholder="Message" className="w-full border rounded-lg p-3 h-32 outline-none"></textarea>
                                <Button size='md' color='primary' type="submit" className="w-full font-semibold block rounded-lg ">Send Message</Button>
                               
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Contact;