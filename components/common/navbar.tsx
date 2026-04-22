"use client";

import React, { useEffect, useState } from "react";
import NavbarText from "@/components/ui/NavbarText";
import { NavbarOptions } from "@/constants/navbarOptions";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-center">
      <nav className=" border border-neutral-600 rounded-2xl py-1 bg-white/10 ">
        <ul className="flex flex-row justify-around gap-4 text-gray-300 px-1 ">
          <NavbarText pathname={pathname} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
