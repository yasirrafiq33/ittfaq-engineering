import Image from "next/image";
import Bounded from "../Bounded";

export const Machines: React.FC = () => {
    const machines = [
        {
            name: 'Horizontal Boring Machine',
            description: 'The Horizontal Boring Machine offers versatile precision in boring, drilling, and milling large workpieces, ideal for complex operations in heavy-duty manufacturing.',
            image: '/machines/boring.png'
        },
        {
            name: 'Lathe Machine',
            description: 'A fundamental tool in metalworking, the Lathe Machine is used for machining cylindrical parts, providing precise control over cutting operations for symmetrical products.',
            image: '/assets/hero.svg'
        },
        {
            name: 'Kharad Machine',
            description: 'Similar to a standard lathe, the Kharad Machine specializes in turning, facing, and threading operations, essential for detailed and precise metalwork fabrication.',
            image: '/assets/kharad.svg'
        },
        {
            name: 'CNC',
            description: 'CNC machines, or Computer Numerical Control machines, automate control of machining tools with a computer, enhancing the precision, efficiency, and repeatability of complex tasks.',
            image: '/machines/cnc.svg'
        },
        {
            name: 'Pillar Verma',
            description: 'The Pillar Verma, a robust vertical drilling machine, is noted for its ability to handle heavy-duty drilling tasks with exceptional accuracy and stability.',
            image: '/machines/pillar-verma.svg'
        },
        {
            name: 'Radial Drill',
            description: 'Radial Drills offer enhanced versatility and range of motion, ideal for drilling large and heavy pieces of material with variable angles and depths.',
            image: '/machines/radialdrill.png'
        }
    ];
    return (
        <Bounded className="bg-slate-200">
            <h2 className="text-black text-center text-4xl font-bold tracking-tight">Our Machinery</h2>
            <h2 className="text-black text-center mt-4 tracking-tight">Our facility boasts a comprehensive setup, featuring a range of primary machines essential for all manufacturing and fabrication requirements.</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 overflow-hidden relative w-full mt-12 place-items-center">
                {machines.map((machine, index) => (
                    <div className="flip-card" key={index}>
                        <div className="flip-card-inner">
                            <div className="flex flip-card-front justify-center items-center h-full">
                                <Image src={machine.image} alt={machine.name} width={250} height={300} />
                            </div>
                            <div className="flip-card-back p-12">
                                <h2 className="text-black text-center text-4xl font-bold tracking-tight">{machine.name}</h2>
                                <p className="text-black text-center mt-2 px-8">{machine.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Bounded>
    );
};

export default Machines;
