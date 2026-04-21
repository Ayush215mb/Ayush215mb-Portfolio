import { NavbarOptions } from "@/constants/navbarOptions";
export default function NavbarText({
  activeBar,
  setActiveBar,
}: {
  activeBar: NavbarOptions;
  setActiveBar: React.Dispatch<React.SetStateAction<NavbarOptions>>;
}) {
  const options: NavbarOptions[] = ["Home", "Projects", "Blogs"];

  return (
    <>
      {options.map((item) => (
        <li
          key={item}
          onClick={() => setActiveBar(item)}
          className={` cursor-pointer px-4 ${
            activeBar === item
              ? "text-white bg-neutral-700 rounded-2xl"
              : "hover:text-white"
          }`}
        >
          {item}
        </li>
      ))}
    </>
  );
}
