import React from "react";
import Link from "next/link";

const aboutus = () => (
    <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left: About Us Text */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-gray-700 mb-6">
                    InnovateTech Solutions, founded in 2010, is dedicated to revolutionizing the tech industry with cutting-edge solutions. We have grown into a global leader by consistently delivering top-quality products and exceptional customer service.
                </p>
                <p className="text-gray-700 mb-8">
                    Our passionate team is committed to innovation, integrity, and sustainability, ensuring we meet and exceed our clients' expectations. Partner with InnovateTech Solutions for a future-focused and reliable technology experience.
                </p>
                <button className="bg-gray-100 text-gray-900 px-6 py-2 rounded hover:bg-gray-200 w-fit font-medium shadow">
                    <Link href="/aboutus">
                        Read More
                    </Link>
                </button>
            </div>
            {/* Right: Team Meeting Image */}
            <div className="w-full md:w-1/2 h-96 md:h-auto flex items-center justify-center bg-gray-100">
                <img src="image_06e234.jpg" alt="Team meeting in a modern office" className="object-cover w-full h-full" />
            </div>
        </div>
    </div>
);

export default aboutus;