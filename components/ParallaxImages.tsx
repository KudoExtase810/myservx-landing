import img1 from "../assets/headerImages/img1.png";
import img2 from "../assets/headerImages/img2.png";
import img3 from "../assets/headerImages/img3.webp";
import img4 from "../assets/headerImages/img4.webp";
import img5 from "../assets/headerImages/img5.webp";
import img6 from "../assets/headerImages/img6.webp";
import Image from "next/image";
import { useRef, useEffect } from "react";
function ParallaxImages() {
    const imgRefs:any = {
        r1: useRef(),
        r2: useRef(),
        r3: useRef(),
        r4: useRef(),
        r5: useRef(),
        r6: useRef(),
    };
    useEffect(() => {
        const parallax = (e: MouseEvent) => {
            const x = e.clientX;
            const center = window.innerWidth / 2;
            const distanceFromCenter = x - center;

            // calculate the amount to move the images
            // divided by a smaller amount to make it move faster compared to the others
            const moveAmount1 = distanceFromCenter / 20; //faster
            const moveAmount2 = distanceFromCenter / 30;
            const moveAmount3 = distanceFromCenter / 20; //faster
            const moveAmount4 = distanceFromCenter / 30;
            const moveAmount5 = distanceFromCenter / 20; //faster
            const moveAmount6 = distanceFromCenter / 30;

            // update the transform property for each image
            imgRefs.r1.current.style.transform = `translateX(${moveAmount1}px)`;
            imgRefs.r1.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r2.current.style.transform = `translateX(${-moveAmount2}px)`;
            imgRefs.r2.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r3.current.style.transform = `translateX(${moveAmount3}px)`;
            imgRefs.r3.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r4.current.style.transform = `translateX(${-moveAmount4}px)`;
            imgRefs.r4.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r5.current.style.transform = `translateX(${moveAmount5}px)`;
            imgRefs.r5.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r6.current.style.transform = `translateX(${-moveAmount6}px)`;
            imgRefs.r6.current.style.transition = "transform 0.3s ease-out";
        };

        const resetParallax = () => {
            // reset the transform property and add a transition effect
            imgRefs.r1.current.style.transform = "translateX(0)";
            imgRefs.r1.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r2.current.style.transform = "translateX(0)";
            imgRefs.r2.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r3.current.style.transform = "translateX(0)";
            imgRefs.r3.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r4.current.style.transform = "translateX(0)";
            imgRefs.r4.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r5.current.style.transform = "translateX(0)";
            imgRefs.r5.current.style.transition = "transform 0.3s ease-out";
            imgRefs.r6.current.style.transform = "translateX(0)";
            imgRefs.r6.current.style.transition = "transform 0.3s ease-out";
        };

        window.addEventListener("mousemove", parallax);
        window.addEventListener("mouseup", resetParallax);

        return () => {
            window.removeEventListener("mousemove", parallax);
            window.removeEventListener("mouseup", resetParallax);
        };
    }, []);

    return (
        <div className="absolute grid grid-cols-3 w-fit -right-[600px] top-0 -z-10 scale-90 bp1:-right-[300px] bp4:-bottom-[120px] bp5:inset-0 bp5:top-[100px] bp5:scale-100 ">
            <Image
                className="relative -right-[580px] -bottom-[250px] bp1:-right-[300px] bp7:right-[70px]"
                src={img1}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r1}
            />
            <Image
                className="relative bp1:-bottom-[70px] bp7:right-[70px]"
                src={img2}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r2}
            />
            <Image
                className="relative -top-[180px] -left-[220px] bp7:right-[70px] bp7:-top-0"
                src={img3}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r3}
            />
            <Image
                className="relative -right-[490px] -top-[140px] bp8:-top-[110px] bp8:-right-[460px] bp1:-top-[40px] bp5:-top-0 bp5:right-0 bp7:right-[70px]"
                src={img4}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r4}
            />
            <Image
                className="relative -right-[190px] -top-[250px] bp8:-right-[220px] bp1:-top-[200px] bp5:-top-0 bp5:right-0 bp7:right-[70px]"
                src={img5}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r5}
            />
            <Image
                className="relative right-[130px] -top-[450px] bp1:-top-[250px] bp5:-top-0 bp5:right-0 bp7:right-[70px]"
                src={img6}
                width={undefined}
                height={undefined}
                alt=""
                ref={imgRefs.r6}
            />
        </div>
    );
}

export default ParallaxImages;
