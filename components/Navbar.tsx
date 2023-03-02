"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { useState, useEffect } from "react";
function Navbar() {
    const [hovered, setHovered] = useState(false); // used to achieve the navigation blob button animation
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex justify-between px-6 items-center h-[90px] mb-32 sticky top-0 bg-white bg-opacity-0 z-30 transition-all duration-500 ${
                scrollY > 0 &&
                "shadow-md shadow-bottom !h-[78px] !bg-opacity-100"
            }`}
        >
            <Link href="/">
                <Image
                    width={undefined}
                    height={undefined}
                    src={Logo}
                    alt="MyServX logo"
                />
            </Link>
            <div className="flex gap-6 h-full items-center bp2:hidden">
                <ul className="flex gap-5 h-full items-center font-medium">
                    <li className="group transition-all duration-300 ease-in-out">
                        <Link
                            href="/accueil"
                            className="py-[32px] px-2 bg-left-bottom bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out"
                        >
                            ACCUEIL
                        </Link>
                    </li>
                    <li className="group transition-all duration-300 ease-in-out">
                        <Link
                            href="/agence"
                            className="py-[32px] px-2 bg-left-bottom bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out"
                        >
                            L'AGENCE
                        </Link>
                    </li>
                    <li className="group transition-all duration-300 ease-in-out">
                        <Link
                            href="/services"
                            className="py-[32px] px-2 bg-left-bottom bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out"
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li className="group transition-all duration-300 ease-in-out">
                        <Link
                            href="/portfolio"
                            className="py-[32px] px-2 bg-left-bottom bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out"
                        >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className="group transition-all duration-300 ease-in-out">
                        <Link
                            href="/blog"
                            className="py-[32px] px-2 bg-left-bottom bg-gradient-to-r from-violet-500 to-violet-500 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-out"
                        >
                            BLOG
                        </Link>
                    </li>
                </ul>
                <div role="navigation" className="flex gap-3">
                    <button type="button" className="hover:animate-phone-ring">
                        <FaPhoneAlt
                            className="bg-pinkgradient p-3 rounded-full"
                            color="white"
                            size={46}
                        />
                    </button>
                    <Link
                        href=""
                        className="bg-pruplegradtwo py-3 px-5 rounded-[48px] relative overflow-hidden text-white"
                        onMouseOver={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        Demander un devis
                        <span
                            id="hover-blob"
                            className={`absolute w-[200px] h-[200px] rounded-full bg-white bg-opacity-25 -right-[120px] top-0 transition-all duration-500 ${
                                hovered && "-right-[70px]"
                            }`}
                        ></span>
                    </Link>
                </div>
            </div>
            {/* only to make responsiveness easier */}
            <button
                type="button"
                className="hidden bp2:block hover:animate-phone-ring"
            >
                <FaPhoneAlt
                    className="bg-pinkgradient p-3 rounded-full"
                    color="white"
                    size={46}
                />
            </button>
        </nav>
    );
}

export default Navbar;
