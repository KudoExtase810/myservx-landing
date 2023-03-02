import Image from "next/image";
import Link from "next/link";
import { Project } from "./Projects"; // typescript type
function SingleProject({ image, title, description, linkTo }: Project) {
    return (
        <div className="max-w-[350px] bp10:scale-90 bp7:scale-100">
            <div className="w-[350px] h-[360px] mb-4">
                <Link href={linkTo} className="">
                    <Image
                        width={undefined}
                        height={undefined}
                        src={image}
                        alt=""
                        className="rounded-lg hover:scale-95 transition-all duration-500"
                    />
                </Link>
            </div>
            <h4 className="text-[#050748] text-[22px] font-semibold mb-2">
                {title}
            </h4>
            <p className="font-medium text-[17px] h-[60px]">{description}</p>
        </div>
    );
}

export default SingleProject;
