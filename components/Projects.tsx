import SingleProject from "./SingleProject";
import img1 from "../assets/ProjectImages/image-1.webp";
import img2 from "../assets/ProjectImages/image-2.webp";
import img3 from "../assets/ProjectImages/image-3.webp";
import img4 from "../assets/ProjectImages/image-4.webp";
import img5 from "../assets/ProjectImages/image-5.webp";
import img6 from "../assets/ProjectImages/image-6.webp";
export type link = `/${string}`;
export interface Project {
    image: any;
    title: string;
    description: string;
    linkTo: link;
}
function Projets() {
    const projects: Project[] = [
        {
            image: img1,
            title: "Application Ios",
            description: "ios, design, Responsive",
            linkTo: "/",
        },
        {
            image: img2,
            title: "Sites de Blog",
            description: "Publication courante d'articles",
            linkTo: "/",
        },
        {
            image: img3,
            title: "Sites de E-Commerce",
            description: "Application Web Et mobile de E-Commerce",
            linkTo: "/",
        },
        {
            image: img4,
            title: "Customisation d'icones",
            description: "Application Web & Mobile de Customisation d'icones",
            linkTo: "/",
        },
        {
            image: img5,
            title: "Smart Watch",
            description: "Application de gestion de taches sur Smart Watch",
            linkTo: "/",
        },
        {
            image: img6,
            title: "Gestion de Flyers",
            description: "Application Web et Mobile de gestion de Flyers",
            linkTo: "/",
        },
    ];
    return (
        <section className="mb-48">
            <header className="text-center mb-8">
                <span className="font-medium bg-pruplegradtwo bg-clip-text text-transparent">
                    NOTRE TRAVAIL
                </span>
                <h2 className="font-black text-[#050748] text-[40px]">
                    Nos Derniers Projets Réalisés
                </h2>
            </header>
            <div className="grid grid-cols-3 place-items-center gap-6 w-fit mx-auto bp4:grid-cols-2 bp10:gap-3 bp6:gap-1 bp7:grid-cols-1">
                {projects.map((project, index) => (
                    <SingleProject
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        linkTo={project.linkTo}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projets;
