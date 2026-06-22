import Customtext from "@/components/ui/CustomText";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "Blogs written by Ayush Yadav",
  alternates: {
    canonical: "https://www.glevoidd.in/blogs",
  },
  openGraph: {
    title: "Blogs | Ayush Yadav",
    description: "Blogs written by Ayush Yadav",
    url: "https://www.glevoidd.in/blogs",
  },
};

export default function Blogpage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Customtext subHeading={true}>COMING SOON</Customtext>
    </div>
  );
}
