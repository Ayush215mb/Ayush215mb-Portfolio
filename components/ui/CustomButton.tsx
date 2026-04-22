import React from "react";
import Customtext from "./CustomText";

export default function CustomButton({
  children,
  liveLink,
  UtubeLink,
  Patent,
  href,
  Submit,
}: {
  children?: React.ReactNode;
  liveLink?: boolean;
  UtubeLink?: boolean;
  href?: string;
  Patent?: boolean;
  Submit?: boolean;
}) {
  if (liveLink)
    return (
      <a href={href} target="_blank">
        <button className="md:px-4 md:py-2 p-2 border border-neutral-700 rounded-l-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
          <Customtext BtnText={true}>Live Link</Customtext>
          <Customtext emoji={true}>🔗</Customtext>
        </button>
      </a>
    );

  if (UtubeLink)
    return (
      <a href={href} target="_blank">
        <button className="md:px-4 md:py-2 p-2 border border-neutral-700  rounded-r-lg hover:bg-neutral-700 hover:border-white cursor-pointer flex gap-2 hover:scale-105 ">
          <Customtext BtnText={true}>Youtube Link</Customtext>
          <Customtext emoji={true}>🎥</Customtext>
        </button>
      </a>
    );

  if (Patent)
    return (
      <a href={href} target="_blank">
        <button className="px-4 py-2 border border-neutral-700 rounded-r-lg hover:bg-neutral-700 hover:border-white cursor-pointer  flex gap-2 hover:scale-105 ">
          <Customtext BtnText={true}>Patent </Customtext>
          <Customtext emoji={true}>📄</Customtext>
        </button>
      </a>
    );
  return <div>{children}</div>;
}
