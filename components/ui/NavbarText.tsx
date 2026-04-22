import { NavbarOptions } from "@/constants/navbarOptions";
import Link from "next/link";
export default function NavbarText({
  activeBar,
  setActiveBar,
}: {
  activeBar: NavbarOptions;
  setActiveBar: React.Dispatch<React.SetStateAction<NavbarOptions>>;
}) {
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
            onClick={() => setActiveBar(item)}
            className={` cursor-pointer px-4 ${
              activeBar.name === item.name
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
