'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Bounded from "../Bounded";

export const Industries: React.FC = () => {
    const logosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const logos = logosRef.current?.children;
        if (!logos || logos.length === 0) return;

        // Apply hardware acceleration
        gsap.set(logos, {
            willChange: "transform", // Promote layers for GPU acceleration
            x: (i) => i // Initial position
        });

        // Updated animation logic for smoother looping
        const loopDuration = 60; // Increased duration for smoother effect
        const distanceToTravel = window.innerWidth;

        gsap.to(logos, {
            x: `-=${distanceToTravel}`, // Ensures that the movement covers enough distance
            ease: "none",
            duration: loopDuration,
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const xNum = parseFloat(x);
                    return `${xNum % distanceToTravel}px`; // Adjust the modulus operation
                }
            },
            onComplete: () => {
                gsap.set(logos, { x: (i) => 1 });
            }
        });

        return () => gsap.killTweensOf(logos);
    }, []);

    const industries = ['Sugar Mills', 'Cement', 'Oil & Gas', 'Mining', 'Steel Mills', 'Power Generation', 'Defense Sector', 'Refinaries', 'Mechanical Mills'];

    return (
        <Bounded className="bg-neutral-800">
            <h1 className="text-white font-bold">A rapidly expanding enterprise specializing in the production of plant and equipment tailored for diverse engineering and mining sectors.</h1>
            <div className="overflow-hidden relative w-full mt-12" ref={logosRef}>
                <div className="flex space-x-16 whitespace-nowrap">
                    {industries.map((ind, index) => (
                        <div key={index} className="min-w-max">
                            <h2 className="text-3xl font-bold tracking-tight text-white">
                                {ind}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </Bounded>
    );
};

export default Industries;
