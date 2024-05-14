'use client';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "../Bounded";
import { Shapes } from "../Shapes";

export const ShapesAnimation = ({ }): JSX.Element => {

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
            <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>
                {letter}
            </span>
        ));
    }

    return (
        <Bounded ref={component} component-type='Hero'>
            <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
                <Shapes />

                <div className="col-start-1 md:row-start-1">
                    <h1 aria-label="Yasir Rafiq" className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
                        <span className="block text-slate-300">
                            {renderLetters('Yasir', 'first')}
                        </span>
                        <span className="-mt-[.2em] block text-slate-500">
                            {renderLetters('Rafiq', 'last')}
                        </span>
                    </h1>
                    <span className="job-title block bg-gradient-to-tr from-orange-500 via-orange-200 to-orange-500 bg-clip-text text-2xl font-bold uppercase tracking[.2em] text-transparent opacity-0 md:text-4xl">Fullstack Web Developer</span>
                </div>
            </div>
        </Bounded>
    );
}