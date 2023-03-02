"use client";
import Image from "next/image";
import ParallaxImages from "@/components/ParallaxImages";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import CustomCursor from "@/components/CustomCursor";
import vanillaCursor from "../assets/cursorIcon.png";
import customCursor from "../assets/customCursorIcon.png";
import { gsap } from "gsap";
export default function Home() {
    // GSAP
    const h1Ref = useRef();
    const headerBtnRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            h1Ref.current,
            { y: "28%", opacity: "0" },
            { y: "0", opacity: "1", duration: 1.2 }
        );
        gsap.fromTo(
            headerBtnRef.current,
            { y: "200%", opacity: "0" },
            { y: "0", opacity: "1", duration: 1.2, delay: 0.6 }
        );
    }, []);

    ///

    const [hovered, setHovered] = useState(false); // for the link below (line 40)
    const [isOnMobile, setIsOnMobile] = useState(false); // check whether the user is on mobile or not in order to show the cursor switch accordingly
    useEffect(() => {
        const userAgent = navigator.userAgent;
        setIsOnMobile(
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                userAgent
            )
        );
    }, []);

    // allows the user to choose whether to use the custom cursor or not and stores the choice in localstorage

    const [useCustomCursor, setUseCustomCursor] = useState(false);

    useEffect(() => {
        // get the value from localstorage

        const storedValue = localStorage.getItem("useCustomCursor");
        if (storedValue) {
            setUseCustomCursor(JSON.parse(storedValue));
        }
    }, []);

    function handleToggle() {
        // changes the value when the switch button is clicked

        const newValue = !useCustomCursor;
        setUseCustomCursor(newValue);
        localStorage.setItem("useCustomCursor", JSON.stringify(newValue));
        location.reload();
    }

    return (
        <>
            <header className="font-opensans ml-32 relative pb-[320px] overflow-hidden bp2:flex bp2:flex-col bp2:justify-center bp2:text-center bp2:ml-0 bp2:items-center">
                <h1
                    ref={h1Ref}
                    className="text-[70px] w-[800px] mb-10 font-semibold leading-snug bp2:w-auto bp11:text-[60px] bp7:max-w-[90%] bp7:!text-[40px] "
                >
                    Une <strong className="text-[#0038e3]">créativité</strong>{" "}
                    sans limite, une{" "}
                    <strong className="text-[#0038e3]">sécurité</strong> sans
                    faille pour votre site web.
                </h1>
                <button
                    ref={headerBtnRef}
                    type="button"
                    className="bg-[#074DF8] text-white py-4 px-12 rounded-md font-semibold"
                >
                    Explorer
                </button>
                <ParallaxImages />
            </header>
            <Services />
            <About />
            <Stats />
            <Projects />
            <Technologies />
            <div className="flex justify-center items-center gap-6 mb-10 bp7:flex-col">
                <span className="text-[#050748] text-[30px] font-opensans font-semibold">
                    Vote Idée. Sera Réalisée.
                </span>
                <Link
                    onMouseOver={() => setHovered(true)}
                    onMouseOut={() => setHovered(false)}
                    href="/"
                    className="relative bg-bluegradient text-white flex items-center gap-2 px-6 py-4 rounded-[64px] overflow-hidden"
                >
                    <span>Confiez Nous Votre Projet</span>
                    <FaChevronRight />
                    <span
                        id="hover-blob"
                        className={`absolute w-[200px] h-[200px] rounded-full bg-white bg-opacity-30 -right-[120px] top-0 transition-all duration-500 ${
                            hovered && "-right-[70px]"
                        }`}
                    ></span>
                </Link>
            </div>
            <Footer />

            {/* only use the custom cursor if the user is not on mobile and when the user choses to */}
            {!isOnMobile && useCustomCursor && <CustomCursor />}
            {/* only display the cursor switch if the user is not on mobile */}
            {!isOnMobile && (
                <button
                    type="button"
                    className="fixed bottom-5 right-5 rounded-full w-[80px] h-[80px] bg-gray-400 flex justify-center items-center"
                    onClick={handleToggle}
                >
                    {useCustomCursor ? (
                        <Image
                            src={vanillaCursor}
                            width={60}
                            alt="switch to normal cursor"
                        />
                    ) : (
                        <Image
                            src={customCursor}
                            width={60}
                            alt="switch to normal cursor"
                        />
                    )}
                </button>
            )}
        </>
    );
}
