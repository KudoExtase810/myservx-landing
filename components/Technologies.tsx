import React from "react";
import Image from "next/image";
import nodeimg from "../assets/techno/nodeimg.webp";
import laravelimg from "../assets/techno/laravelimg.webp";
import mobileimg from "../assets/techno/mobileimg.webp";
import {
    FaFacebook,
    FaTwitter,
    FaFacebookMessenger,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { HiTag } from "react-icons/hi";
function Technologies() {
    return (
        <section className="mb-[4.6cm]">
            <header className="text-center mb-14">
                <span className="bg-purplegrad bg-clip-text text-transparent">
                    TECHNOLOGIES
                </span>
                <h2 className="text-[40px] text-[#050748] font-black max-w-[780px] text-center mx-auto">
                    Les Frameworks avec lesquels nous travaillons
                </h2>
            </header>
            <div className="flex gap-6 justify-center flex-wrap">
                <div className="w-[376px] border border-[#ececec] overflow-hidden rounded-lg hover:-translate-y-3 transition-all ease-in-out duration-500 shadow-md shadow-bottom bp4:w-[420px] bp11:max-w-[450px] bp12:scale-95 bp14:scale-90">
                    <Image
                        src={nodeimg}
                        width={undefined}
                        alt=""
                        className="mb-12"
                    />
                    <div className="flex justify-between items-center rounded-[100px] py-[10px] px-4 bg-fushiagradient text-white relative -top-[68px] w-[90%] mx-auto ">
                        <span className="flex gap-1 items-center">
                            <HiTag />
                            Nodejs
                        </span>
                        <BiTime />
                    </div>
                    <div className="h-[225px] w-[90%] mx-auto mb-6">
                        <h4 className="text-[22px] text-[#050748] font-semibold mb-5">
                            Chaque projet qui contient un serveur est géré avec
                            Nodejs!
                        </h4>
                        <p className="font-medium text-[17px] mb-5">
                            Pourquoi nous travaillons avec Node.js ? Vous
                            connaissez l'architecture micro-service ? Venez le
                            decouvrir ici
                        </p>
                    </div>
                    <div className="flex justify-start font-bold items-center pt-7 pb-5 gap-3 border-t border-[#dadada] text-[#6A6A8E] w-[90%] mx-auto">
                        <span>Partages</span>
                        <a href="">
                            <FaFacebook size={20} />
                        </a>
                        <a href="">
                            <FaTwitter size={20} />
                        </a>
                        <a href="">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="">
                            <FaFacebookMessenger />
                        </a>
                    </div>
                </div>
                <div className="w-[376px] border border-[#ececec] overflow-hidden rounded-lg hover:-translate-y-3 transition-all ease-in-out duration-500 shadow-md shadow-bottom bp4:w-[420px] bp11:max-w-[450px] bp12:scale-95 bp14:scale-90">
                    <Image
                        src={laravelimg}
                        width={undefined}
                        alt=""
                        className="mb-12"
                    />
                    <div className="flex justify-between items-center rounded-[100px] py-[10px] px-4 bg-fushiagradient text-white relative -top-[68px] w-[90%] mx-auto ">
                        <span className="flex gap-1 items-center">
                            <HiTag />
                            Laravel
                        </span>
                        <BiTime />
                    </div>
                    <div className="h-[225px] w-[90%] mx-auto mb-6">
                        <h4 className="text-[22px] text-[#050748] font-semibold mb-5">
                            Nous Travaillons aussi avec Laravel
                        </h4>
                        <p className="font-medium text-[17px] mb-5">
                            Nos clients exigent parfois des technologies bien
                            specifiques comme le framework Laravel car ils
                            préférent l'architecture MVC, venez decouvrir quel
                            est le MVC
                        </p>
                    </div>
                    <div className="flex justify-start font-bold items-center pt-7 pb-5 gap-3 border-t border-[#dadada] text-[#6A6A8E] w-[90%] mx-auto">
                        <span>Partages</span>
                        <a href="">
                            <FaFacebook size={20} />
                        </a>
                        <a href="">
                            <FaTwitter size={20} />
                        </a>
                        <a href="">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="">
                            <FaFacebookMessenger />
                        </a>
                    </div>
                </div>
                <div className="w-[376px] border border-[#ececec] overflow-hidden rounded-lg hover:-translate-y-3 transition-all ease-in-out duration-500 shadow-md shadow-bottom bp4:w-[420px] bp11:max-w-[450px] bp12:scale-95 bp14:scale-90">
                    <Image
                        src={mobileimg}
                        width={undefined}
                        alt=""
                        className="mb-12"
                    />
                    <div className="flex justify-between items-center rounded-[100px] py-[10px] px-4 bg-fushiagradient text-white relative -top-[68px] w-[90%] mx-auto ">
                        <span className="flex gap-1 items-center">
                            <HiTag />
                            Applications Mobiles
                        </span>
                        <BiTime />
                    </div>
                    <div className="h-[225px] w-[90%] mx-auto mb-6">
                        <h4 className="text-[22px] text-[#050748] font-semibold mb-5">
                            Nous réalisons aussi des applications mobiles IOS &
                            Android
                        </h4>
                        <p className="font-medium text-[17px] mb-5">
                            Vous savez que les applications mobiles sont devenus
                            aussi essentiels que les sites web ? et qu'il existe
                            plusieurs façons d'en faire !
                        </p>
                    </div>
                    <div className="flex justify-start font-bold items-center pt-7 pb-5 gap-3 border-t border-[#dadada] text-[#6A6A8E] w-[90%] mx-auto">
                        <span>Partages</span>
                        <a href="/">
                            <FaFacebook size={20} />
                        </a>
                        <a href="/">
                            <FaTwitter size={20} />
                        </a>
                        <a href="/">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="/">
                            <FaEnvelope size={20} />
                        </a>
                        <a href="/">
                            <FaFacebookMessenger />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;
