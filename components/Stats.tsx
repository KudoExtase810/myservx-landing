import Image from "next/image";
import computers from "../assets/StatsImages/computers.svg";
import team from "../assets/StatsImages/team.svg";
import worker from "../assets/StatsImages/worker.svg";
import customerservice from "../assets/StatsImages/customer-service.svg";
function Stats() {
    return (
        <section className="bg-gray-200 flex items-center justify-center py-32 gap-10 font-medium mb-20 bp2:grid bp2:grid-cols-2 bp2:place-items-center bp12:flex bp12:flex-col bp12:gap-12">
            <div className="flex gap-5 items-center bp12:w-[280px]">
                <div className="w-[80px] h-[80px] bg-white rounded-tl-[50%] rounded-tr-[10px] rounded-br-[50%] rounded-bl-[10px] rotate-90 relative">
                    <Image
                        src={team}
                        width={undefined}
                        alt=""
                        className="absolute w-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                    />
                </div>
                <div>
                    <span className="block font-black text-[45px] text-[#050748]">
                        5+
                    </span>
                    <span className="text-lg font-opensans">
                        Membres d'équipe
                    </span>
                </div>
            </div>
            <div className="flex gap-5 items-center bp12:w-[280px]">
                <div className="w-[80px] h-[80px] bg-white rounded-tl-[50%] rounded-tr-[10px] rounded-br-[50%] rounded-bl-[10px] rotate-90 relative">
                    <Image
                        src={computers}
                        width={undefined}
                        alt=""
                        className="absolute w-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                    />
                </div>
                <div>
                    <span className="block font-black text-[45px] text-[#050748]">
                        6+
                    </span>
                    <span className="text-lg font-opensans">
                        Projets Realisé
                    </span>
                </div>
            </div>
            <div className="flex gap-5 items-center bp12:w-[280px]">
                <div className="w-[80px] h-[80px] bg-white rounded-tl-[50%] rounded-tr-[10px] rounded-br-[50%] rounded-bl-[10px] rotate-90 relative">
                    <Image
                        src={worker}
                        width={undefined}
                        alt=""
                        className="absolute w-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                    />
                </div>
                <div>
                    <span className="block font-black text-[45px] text-[#050748]">
                        0.1K
                    </span>
                    <span className="text-lg font-opensans">
                        Heures Travaillées
                    </span>
                </div>
            </div>
            <div className="flex gap-5 items-center bp12:w-[280px]">
                <div className="w-[80px] h-[80px] bg-white rounded-tl-[50%] rounded-tr-[10px] rounded-br-[50%] rounded-bl-[10px] rotate-90 relative">
                    <Image
                        src={customerservice}
                        width={undefined}
                        alt=""
                        className="absolute w-3/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                    />
                </div>
                <div>
                    <span className="block font-black text-[45px] text-[#050748]">
                        24/7
                    </span>
                    <span className="text-lg font-opensans">Disponibilité</span>
                </div>
            </div>
        </section>
    );
}

export default Stats;
