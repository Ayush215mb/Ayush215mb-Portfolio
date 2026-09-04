"use client";

import React, { useEffect, useState } from "react";
import NavbarText from "@/components/ui/NavbarText";
import { NavbarOptions } from "@/constants/navbarOptions";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

type CursorPosition = { left: number; width: number; opacity: number };

const Navbar = () => {
    const pathname = usePathname();
    const [positions, setPositions] = useState<CursorPosition>({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const [isHovering, setIsHovering] = useState(false);

    return (
        <header className="flex justify-center">
            <nav className=" border border-neutral-600 rounded-2xl py-1 bg-white/10 ">
                <ul
                    onMouseEnter={() => setIsHovering(true)}

                    onMouseLeave={() => {
                        setIsHovering(false);
                        setPositions((prev) => ({ ...prev, opacity: 0 }));
                    }}
                    className=" relative flex flex-row justify-around gap-4 text-gray-300 px-1 "
                >
                    <NavbarText
                        pathname={pathname}
                        setPositions={setPositions}
                        isHovering={isHovering}
                    />
                    <Cursor positions={positions} />
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

const Cursor = ({ positions }: { positions: CursorPosition }) => {
    return (
        <motion.li
            animate={positions}
            className=" absolute z-0  bg-neutral-700 rounded-2xl h-full "
        />
    );
};
