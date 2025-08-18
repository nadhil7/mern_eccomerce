import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo or Brand Name */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">YourBrand</h1>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6 mb-4 md:mb-0">
                        <li>
                            <a href="#" className="hover:text-gray-400 transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition-colors duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition-colors duration-300">Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer