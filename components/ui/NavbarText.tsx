import { NavbarOptions } from "@/constants/navbarOptions";
import Link from "next/link";
import React, { useRef } from "react";
export default function NavbarText({
    pathname,
    setPositions,
    isHovering,
}: {
    pathname: string;
    setPositions: React.Dispatch<
        React.SetStateAction<{ left: number; width: number; opacity: number }>
    >;
    isHovering: boolean;
}) {
    const options: NavbarOptions[] = [
        { name: "About", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
    ];

    return (
        <>
            {options.map((item) => (
                <li
                    key={item.name}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        const parent = el.parentElement; // the <ul>
                        if (!parent) return;

                        const elRect = el.getBoundingClientRect();
                        const parentRect = parent.getBoundingClientRect();

                        setPositions({
                            left: elRect.left - parentRect.left,
                            width: elRect.width,
                            opacity: 1,
                        });
                    }}

                    className={` relative z-10 block cursor-pointer px-4  ${
                        !isHovering && pathname === item.path
                            ? "text-white bg-neutral-700 rounded-2xl"
                            : "hover:text-white"
                    }`}
                >
                    <Link href={`${item.path}`} aria-label={item.name}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </>
    );
}
