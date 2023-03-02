import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
interface props {
    image: any;
    title: string;
    text: string;
    linkTo: string;
}

function SingleService({ image, title, text, linkTo }: props) {
    return (
        <div className="flex flex-col items-center gap-3 w-[375px] border border-blue-200 rounded-lg px-6 py-8 font-semibold justify-center text-center  hover:!text-white hover:-translate-y-3 transition-all duration-500 shadow shadow-bottom relative before:bg-purplegrad before:bg-cover before:bg-center before:absolute before:inset-0 before:opacity-0 before:hover:opacity-100 before:transition-all before:duration-700 before:rounded-lg">
            <Image className="relative" width={80} src={image} alt="" />
            <h4 className="text-[22px] text-[#050748] relative">{title}</h4>
            <p className="text-[17px] relative">{text}</p>
            <Link href={linkTo} className="flex items-center gap-1 relative">
                <span className="font-extrabold text-[#050748]">
                    En savoir plus
                </span>
                <FiChevronRight className="" />
            </Link>
        </div>
    );
}

export default SingleService;
