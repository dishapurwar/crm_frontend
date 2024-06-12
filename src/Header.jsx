

import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <header className="flex justify-between bg-black">
                {/* logo */}
                <div className="flex items-center gap-1">
                    <img src="/images/logo1.png" className="w-24 h-auto" alt="" />
                </div>
                {/* user widget */}
                <Link
                    to={user ? "/account" : "/login"}
                    className="flex items-center gap-2 py-2 px-4 text-white text-sm focus:outline-none"
                >
                    {/* navbar */}
                    <div className="flex gap-4 py-2 px-4 bg-black ">
                        <Link
                            to="/"
                            className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none "
                        >
                            Home
                        </Link>
                        {user && (
                            <>
                                <Link
                                    to="/customers"
                                    className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none"
                                >
                                    Create Customer
                                </Link>
                                <Link
                                    to="/orders"
                                    className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none"
                                >
                                    Create Order
                                </Link>
                                <Link
                                    to="/audience"
                                    className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none rounded-full"
                                >
                                    Create Audience
                                </Link>
                                <Link
                                    to="/campaignform"
                                    className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none"
                                >
                                    Create Campaign
                                </Link>
                                <Link
                                    to="/campaigns"
                                    className="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 via-yellow-500 from-purple-500 to-red-500 text-transparent bg-clip-text text-sm font-normal focus:outline-none"
                                >
                                    Campaign List
                                </Link>
                            </>
                        )}
                    </div>
                    {/* User icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    {/* User name */}
                    {!!user && (
                        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                            {user.name}
                        </div>
                    )}
                </Link>
            </header>
        </div>
    );
}
