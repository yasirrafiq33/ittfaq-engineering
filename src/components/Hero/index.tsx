'use client';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "../Bounded";
import { Shapes } from "../Shapes";
import Image from "next/image";

export const Hero = ({ }): JSX.Element => {

    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => { }, component);
        const tl = gsap.timeline();
        tl.fromTo(".name-animation", {
            x: -100, opacity: 0, rotate: -10
        }, {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            delay: 0.5,
            stagger: {
                each: 0.1,
                from: 'random'
            }
        }
        );
        tl.fromTo(".job-title", {
            y: 20,
            opacity: 0,
            scale: 1.2
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)"
        })
        return () => ctx.revert();
    }, [])

    const renderLetters = (name: string, key: string) => {
        if (!name) return null;
        return name.split("").map((letter, index) => (
            <span key={index} className={`name-animation name-animation-${key} inline-block opacity-1`}>
                {letter}
            </span>
        ));
    }

    const getHeroSrc = () => {
        const hero = ["/assets/horizontal-boring.png", "/assets/hero.svg", "/assets/kharad.svg"];
        const randomIndex = Math.floor(Math.random() * hero.length);
        return hero[randomIndex];
    }

    return (
        <Bounded ref={component} component-type='Hero' className="bg-neutral-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="col-start-1 md:row-start-1">
                    <h1 aria-label="Ittfaq Engineering" className="mb-8 text-[clamp(3rem,10vmin,10rem)] font-extrabold leading-none tracking-tighter">
                        <span className="block text-slate-300">
                            {renderLetters('Ittfaq', 'first')}
                        </span>
                        <span className="-mt-[.2em] block text-slate-500">
                            {renderLetters('Engineering', 'last')}
                        </span>
                    </h1>
                    <span className="text-xl job-title block text-white bg-clip-text tracking[.2em] text-transparent opacity-0">
                        Pioneering Global Solutions in Mining, Cement, Sugar Mills, and Defense.
                        Innovating Excellence, Exceeding Standards. Together, We Build the Foundations of Tomorrow.
                    </span>
                </div>
                <div className="relative w-full overflow-hidden hidden sm:sm:block">
                    <Image src={getHeroSrc()} alt="hero" height={350} width={450} className="w-full h-full object-cover" />
                </div>
            </div>
        </Bounded>
    );
}