import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // Toggle dropdown (desktop & mobile)
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between py-3">


                {/* Desktop Menu  */}
                <div className="hidden md:flex space-x-6" ref={dropdownRef}>
                    {["New Cars", "Used Cars", "Sell a Car", "Chola Vehicles", "Auction", "Apply Loan", "More", "Refer a customer"].map((item, index) => (
                        <div key={index} className="relative">
                            <button onClick={() => toggleDropdown(item)} className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                                {item} <FiChevronDown />
                            </button>
                            {openDropdown === item && (
                                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
                                    {item === "New Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sedans</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">SUVs</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hatchbacks</a>
                                        </>
                                    )}
                                    {item === "Used Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Certified Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Budget Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Luxury Cars</a>
                                        </>
                                    )}
                                    {item === "Chola Vehicles" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Certified Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Budget Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Luxury Cars</a>
                                        </>
                                    )}
                                    {item === "Used Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Certified Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Budget Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Luxury Cars</a>
                                        </>
                                    )}
                                    {item === "Used Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Certified Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Budget Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Luxury Cars</a>
                                        </>
                                    )}
                                    {item === "More" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Insurance</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Roadside Assistance</a>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                {/* CTA Button */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hidden md:block">
                    Pay Loan EMI
                </button>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-3" ref={dropdownRef}>
                    {["New Cars", "Used Cars", "More"].map((item, index) => (
                        <div key={index}>
                            <button onClick={() => toggleDropdown(item)} className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 py-2">
                                {item} <FiChevronDown />
                            </button>
                            {openDropdown === item && (
                                <div className="ml-4 bg-gray-100 rounded-md py-2">
                                    {item === "New Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sedans</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">SUVs</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Hatchbacks</a>
                                        </>
                                    )}
                                    {item === "Used Cars" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Certified Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Budget Cars</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Luxury Cars</a>
                                        </>
                                    )}
                                    {item === "More" && (
                                        <>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Insurance</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Roadside Assistance</a>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Mobile CTA Button */}
                    <button className="bg-blue-600 text-white w-full py-2 rounded-md shadow-md hover:bg-blue-700">
                        Pay Loan EMI
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
