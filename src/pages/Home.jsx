// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";

const Home = () => {
    const imagesLeft = [
        "https://property4you.in/images/gallery/9.webp",
        "https://property4you.in/images/gallery/8.webp",
        "https://property4you.in/images/gallery/7.webp",
        "https://property4you.in/images/gallery/4.webp"
    ];

    const imagesRight = [
        "https://property4you.in/images/m2.webp",
        "https://property4you.in/images/Why-Property4You.webp",
        "https://property4you.in/images/apex.webp",
        "https://property4you.in/images/apex.webp"
    ];

    return (
        <div className="w-screen">

            {/* Slider Section */}
            <div className="mt-20 flex flex-col md:flex-row justify-evenly items-center gap-6 px-4 md:h-[87.6vh]">
                <div className="w-full md:w-[40%] h-[60vh] md:h-[70%]">
                    <Slider images={imagesLeft} />
                </div>
                <div className="w-full md:w-[40%] h-[60vh] md:h-[70%]">
                    <Slider images={imagesRight} />
                </div>
            </div>

            {/* Projects Section */}
            <div className="flex flex-wrap justify-center gap-6 my-10 px-4">
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 scale-100 hover:scale-105 duration-300">
                    <img className="w-full h-48 md:h-56 rounded-2xl object-cover" src="https://brandstories.co.in/wp-content/uploads/2022/05/Slide2.jpg" alt="Brand Story" />
                    <h3 className="text-lg font-semibold text-center mt-2 text-sky-900">Brand Story</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        Yeh hamari branding journey ka ek hissa hai, jo innovation aur creativity ko darshata hai.
                    </p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 scale-100 hover:scale-105 duration-300">
                    <img className="w-full h-48 md:h-56 rounded-2xl object-cover" src="https://property4you.in/images/Apex-kremlin.webp" alt="Highest Story" />
                    <h3 className="text-lg font-semibold text-center mt-2 text-sky-900">Highest Story</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        Yeh hamari branding journey ka ek hissa hai, jo innovation aur creativity ko darshata hai.
                    </p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 scale-100 hover:scale-105 duration-300">
                    <img className="w-full h-48 md:h-56 rounded-2xl object-cover" src="https://property4you.in/images/Apex-floral.webp" alt="Best Projects" />
                    <h3 className="text-lg font-semibold text-center mt-2 text-sky-900">Best Projects</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        Yeh hamari branding journey ka ek hissa hai, jo innovation aur creativity ko darshata hai.
                    </p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 scale-100 hover:scale-105 duration-300">
                    <img className="w-full h-48 md:h-56 rounded-2xl object-cover" src="https://property4you.in/images/Vrindavan-homes.webp" alt="Building" />
                    <h3 className="text-lg font-semibold text-center mt-2 text-sky-900">Building</h3>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        Yeh hamari branding journey ka ek hissa hai, jo innovation aur creativity ko darshata hai.
                    </p>
                </div>
                {/* aur baaki projects ko same tarah add kare */}
            </div>

            {/* Nationals Channels */}
            <div className="px-4 mt-10">
                <div className="bg-red-600 p-2 flex justify-center">
                    <marquee behavior="" direction="">
                        <h1 className="bg-blue-700 px-4 py-2 rounded-2xl font-bold text-xl md:text-2xl text-white">
                            Nationals Channels
                        </h1>
                    </marquee>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-5">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2 h-64 md:h-[65vh] rounded-2xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="https://property4you.in/images/Property4You-approved-by-Zee-news-aajtak.webp"
                            alt="Zee News"
                        />
                    </div>

                    {/* Right Boxes */}
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 bg-amber-100 rounded-2xl p-4 flex flex-col items-center">
                            <h1 className="font-bold text-yellow-800 text-center">Best Ad Film Makers and Brand Promotion Agency in India</h1>
                            <div className="m-auto w-full flex justify-center">
                                <h1 className="bg-blue-900 p-4 md:p-8 rounded-tl-3xl rounded-br-3xl flex  text-white text-center text-[10px] md:text-[12px] font-semibold hover:scale-105 hover:bg-amber-300 transition duration-300">
                                    <span className="text-orange-400">ADVERTISEMENT</span> MAKING FOR FMCG COMPANIES
                                </h1>
                            </div>
                        </div>
                        <div className="flex-1 bg-amber-100 rounded-2xl p-4 flex flex-col items-center">
                            <h1 className="font-bold text-yellow-800 text-center">Best Ad Film Makers and Brand Promotion Agency in India</h1>
                            <div className="mt-30 w-full flex justify-center">
                                <h1 className="bg-blue-900 p-4 md:p-8 rounded-tl-3xl rounded-br-3xl text-white text-center text-[10px] md:text-[12px] font-semibold hover:scale-105 hover:bg-amber-500 transition duration-300">
                                    <span className="text-red-600">TOP CELEBRITIES</span> ENDORSEMENT SERVICES
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="w-screen bg-black mt-10 px-4 py-10 text-gray-400">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                    {/* Quick Links */}
                    <div>
                        <h1 className="text-white font-bold text-2xl mb-4">Quick Links</h1>
                        <ul className="space-y-2">
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">About Us</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Services</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Best Project</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Barter Media</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contact Us</li>
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h1 className="text-white font-bold text-2xl mb-4">More Links</h1>
                        <ul className="space-y-2">
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Our Candidates</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Gallery</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Media/New</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">CSR</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contact US</li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h1 className="text-white font-bold text-2xl mb-4">Contact Details</h1>
                        <ul className="space-y-2">
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Email</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Services</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Best Project</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Barter Media</li>
                            <li className="relative w-fit cursor-pointer hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-gray-700 my-6" />
                <div className="text-center text-gray-400">
                    <h1 className="text-xl font-semibold text-white hover:text-yellow-400">@PROPERTY 4 YOU</h1>
                    <p className="text-sm mt-2">Copyright © 2008-2024 | All rights reserved | Pooja Movie Creations Group</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
