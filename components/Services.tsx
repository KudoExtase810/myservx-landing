import SingleService from "./SingleService";
import AppImg from "../assets/app.svg";
import DevelopmentImg from "../assets/development.svg";
import BrandingImg from "../assets/branding.svg";
function Services() {
    // the linkTo property must include "/"
    const Services = [
        {
            image: BrandingImg,
            title: "Marketing Des Reseaux Sociaux",
            text: "On utilise les reseaux sociaux pour vous faire de la publicité et augmenter votre visibilité sur le marché !",
            linkTo: "/",
        },
        {
            image: DevelopmentImg,
            title: "Avoir une Marque & Une Identité",
            text: "Avec une site web vous allez vous créer une marque et vous donner une crédibilité auprés de vos clients",
            linkTo: "/",
        },
        {
            image: AppImg,
            title: "Créer des sites E-commerce",
            text: "L'e-commerce est très important car il permet aux entreprises de vendre en ligne et aux consommateurs d'acheter facilement, où qu'ils soient.",
            linkTo: "/",
        },
    ];
    return (
        <section className="bg-white pt-36">
            <header className="text-center mb-12">
                <span className="font-medium bg-purplegrad bg-clip-text text-transparent">
                    SERVICES POPULAIRES
                </span>
                <h2 className="text-[40px] font-black text-[#050748]">
                    Nous aidons les marques avec
                </h2>
            </header>
            <div className="flex gap-6 justify-center pb-24 bp2:gap-4 bp2:flex-wrap">
                {Services.map((service, index) => (
                    <SingleService
                        key={index}
                        image={service.image}
                        title={service.title}
                        text={service.text}
                        linkTo={service.linkTo}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;
