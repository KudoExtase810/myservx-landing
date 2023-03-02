import Image from "next/image";
import img1 from "../assets/ProjectImages/image-1.webp";
import img2 from "../assets/ProjectImages/image-2.webp";
import img3 from "../assets/ProjectImages/image-3.webp";
import img4 from "../assets/ProjectImages/image-4.webp";
import img5 from "../assets/ProjectImages/image-5.webp";
import img6 from "../assets/ProjectImages/image-6.webp";
import logo from "../assets/Logo-white.png";
import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
function Footer() {
    return (
        <footer className="bg-[#111]">
            <div className="border-b border-[#a2a2a2] flex justify-center gap-14 pt-20 pb-24 w-max mx-auto bp2:gap-8 bp5:grid bp5:grid-cols-2 bp7:flex bp7:flex-col bp7:items-start bp7:mx-3 bp7:border-none">
                <div className="flex flex-col items-start gap-6 text-[#a2a2a2] text-[17px] font-bold w-[400px] bp7:items-center bp7:mx-auto bp7:text-center bp7:w-screen bp12:max-w-[400px]">
                    <a href="/" className="ml-2 mb-4 ">
                        <Image src={logo} alt="MyServX" width={100} />
                    </a>
                    <p>
                        <span className="block mb-2">
                            Vous avez une super idée ou un projet à réaliser ?
                        </span>
                        <span>Nous sommes là pour vous faire décoller !</span>
                    </p>
                    <div className="flex gap-4">
                        <FaFacebook
                            size={20}
                            className="hover:text-[#ff1f8e] transition-all duration-[400ms]"
                        />
                        <FaTwitter
                            size={20}
                            className="hover:text-[#ff1f8e] transition-all duration-[400ms]"
                        />
                        <FaLinkedin
                            size={20}
                            className="hover:text-[#ff1f8e] transition-all duration-[400ms]"
                        />
                        <FaInstagram
                            size={20}
                            className="hover:text-[#ff1f8e] transition-all duration-[400ms]"
                        />
                    </div>
                </div>
                <div className="">
                    <header className="text-[#e6e6e6] text-[20px] font-semibold mb-8">
                        Nous contacter
                    </header>
                    <ul className="text-[#a2a2a2] flex flex-col items-start gap-4">
                        <li className="flex items-start gap-4 ">
                            <FaRegEnvelope size={24} className="mt-[3px]" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[18px]">
                                    Email
                                </span>
                                <a href="">contact@myservx.fr</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 ">
                            <FaPhoneAlt size={24} className="mt-[9px]" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[18px]">
                                    Phone
                                </span>
                                <a href="">+33 613 940 182</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 ">
                            <ImLocation2 size={24} className="mt-[7px]" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[18px]">
                                    Address
                                </span>
                                <address className="max-w-[185px]">
                                    19 Quai de Rive Neuve, 13007 Marseille
                                </address>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <header className="text-[#e6e6e6] text-[20px] font-medium mb-8">
                        Company
                    </header>
                    <span className="text-blue-100">Contact</span>
                </div>
                <div>
                    <header className="text-[#e6e6e6] text-[20px] font-medium mb-8">
                        Instagram
                    </header>
                    <div className="grid grid-cols-3 gap-1 w-fit text-[#a2a2a2]">
                        {[img1, img2, img3, img4, img5, img6].map(
                            (img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    width={undefined}
                                    alt="some picture"
                                    className="cursor-pointer w-[100px] bp4:w-[72px] bp5:w-[100px] bp6:w-[80px] bp7:w-[100px]"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            <p className="py-12 mx-auto text-center font-bold text-[#a2a2a2] bp7:border-t bp7:border-[#a2a2a2] bp7:w-4/5">
                © 2023 MyServX Tous droits réservés.
            </p>
        </footer>
    );
}

export default Footer;
