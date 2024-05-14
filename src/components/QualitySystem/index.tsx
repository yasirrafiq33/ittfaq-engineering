'use client';
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Bounded from "../Bounded";
import { Shapes } from "../Shapes";
import Image from "next/image";

export const QualitySystem = ({ }): JSX.Element => {

    return (
        <Bounded component-type='Quality System' className="bg-slate-200">
            <h2 className="text-black text-center text-4xl font-bold tracking-tight">Our Quality Management</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
                <div className="col-start-1 md:row-start-1">
                    <span className="text-xl job-title block text-black bg-clip-text tracking[.2em]">
                        Quality management in mechanical manufacturing is crucial for ensuring that all products meet or exceed stringent standards of excellence. It encompasses planning, assurance, control, and continuous improvement to manage and enhance the quality of manufactured goods. By implementing robust quality management systems, manufacturers can significantly reduce defects, optimize processes, and increase customer satisfaction. These systems typically involve rigorous testing and standardization, adhering to international norms such as ISO 9001. Through these practices, manufacturers ensure reliable, high-quality products while fostering a culture of continuous improvement and operational excellence.
                    </span>
                </div>
                <div className="relative w-full overflow-hidden">
                    <Image src='/assets/drawing.png' alt="hero" height={350} width={450} className="w-full h-full object-cover" />
                </div>
            </div>
        </Bounded>
    );
}