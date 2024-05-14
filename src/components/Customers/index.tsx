'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Bounded from "../Bounded";

export const Customers: React.FC = () => {
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
        const loopDuration = 10; // Increased duration for smoother effect
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

    const companies = ['National Development Complex', 'Attock Gen Limited', 'Millat Equipment Limited', 'Qadri Group of industries', 
    'Tariq Glass Industries', 'Best way Cement', 'Macca Sugar', 'People Steel Mills Ltd', 'Balochistan Glass Ltd'];

    return (
        <Bounded className="bg-neutral-800">
            <h1 className="text-white text-4xl font-bold ">Our Customers</h1>
            <div className="overflow-hidden relative w-full mt-12" ref={logosRef}>
                <div className="flex space-x-16 whitespace-nowrap">
                    {companies.map((comp, index) => (
                        <div key={index} className="min-w-max">
                            <h2 className="text-3xl font-bold tracking-tight text-white">
                                {comp}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </Bounded>
    );
};

export default Customers;
