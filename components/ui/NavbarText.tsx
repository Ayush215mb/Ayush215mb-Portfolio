import { NavbarOptions } from "@/constants/navbarOptions";
import Link from "next/link";
export default function NavbarText({ pathname }: { pathname: string }) {
  const options: NavbarOptions[] = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      {options.map((item) => (
        <Link key={item.name} href={`${item.path}`}>
          <li
            className={` cursor-pointer px-4 ${
              pathname === item.path
                ? "text-white bg-neutral-700 rounded-2xl"
                : "hover:text-white"
            }`}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
}
