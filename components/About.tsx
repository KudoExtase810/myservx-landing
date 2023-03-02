import Image from "next/image";
import Agencyphoto from "../assets/agencyphoto.webp";
import worker from "../assets/StatsImages/worker.svg";
import computer from "../assets/StatsImages/computers.svg";
function About() {
    return (
        <section className="flex gap-7 bg-[#171717] font-semibold justify-center pb-28 pt-48 text-[17px] items-center bp5:flex-col bp5:items-center overflow-hidden">
            <div className="max-w-[30%] bp3:max-w-[48%] bp5:max-w-[76%]">
                <div className="mb-12 relative bp5:text-center">
                    <div className="absolute -top-[120px] w-max bp5:static bp5:mx-auto">
                        <span className="bg-purplegrad bg-clip-text text-transparent">
                            UNE AGENCE DE CRÉATIVITÉ
                        </span>
                        <h2 className="text-gray-100 text-5xl font-black my-4 bp10:text-4xl bp13:text-3xl">
                            À propos de l'agence
                        </h2>
                    </div>
                    <p className="text-gray-300">
                        MyServX est plus qu'une simple entreprise pour nous,
                        c'est notre passion. Nous nous engageons à créer des
                        sites web sécurisés et émouvants qui reflètent l'essence
                        de nos clients.
                    </p>
                </div>
                <div className="flex gap-5 mb-8 items-start">
                    <div className="w-[70px] h-[70px] bg-white relative flex-shrink-0">
                        <Image
                            className="absolute w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src={computer}
                            width={undefined}
                            alt=""
                        />
                    </div>
                    <div>
                        <h3 className="text-white mb-4 text-2xl">
                            Gestion de projet rationalisée
                        </h3>
                        <p className="text-gray-300">
                            Nous gérons les projets web en veillant à ce que
                            toutes les étapes du projet soient bien organisées
                            et suivies pour assurer un résultat final de qualité
                            et dans les délais impartis.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 items-start">
                    <div className="w-[70px] h-[70px] bg-white relative flex-shrink-0">
                        <Image
                            className="absolute w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            src={worker}
                            width={undefined}
                            alt=""
                        />
                    </div>
                    <div>
                        <h3 className="text-white mb-4 text-2xl">
                            Une équipe d'experts dédiée
                        </h3>
                        <p className="text-gray-300">
                            Notre équipe d'experts en sécurité et création est
                            le mélange parfait d'originalité, de compétence et
                            de professionnalisme pour des sites web sécurisés et
                            créatifs qui dépassent les limites.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    className="rounded-lg hover:scale-[102%] transition-all duration-500 bp4:w-[500px] bp5:w-[600px] bp5:mt-8 bp7:w-[90%] bp7:mx-auto bp12:w-[95%]"
                    width={undefined}
                    height={undefined}
                    src={Agencyphoto}
                    alt="A group of people working in an office"
                />
            </div>
        </section>
    );
}

export default About;
