import Customtext from "../ui/CustomText";

export default function Footer() {
  return (
    <footer className="w-full  flex justify-center items-center flex-col pb-10">
      <div className="flex items-center">
        <Customtext>Made by</Customtext>{" "}
        <Customtext link={true} href="https://www.glevoidd.in/">
          glevoidd.in
        </Customtext>
      </div>
      <div className="flex items-center">
        <Customtext>The Source code is available on </Customtext>
        <Customtext
          link={true}
          href="https://github.com/Ayush215mb/Ayush215mb-Portfolio"
        >
          Github
        </Customtext>
      </div>
    </footer>
  );
}
