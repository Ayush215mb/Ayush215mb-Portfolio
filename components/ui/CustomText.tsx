import React from "react";

export default function Customtext({
  children,
  heading,
  subHeading,
  bold,
  BtnText,
  emoji,
  link,
  href,
}: {
  children: React.ReactNode;
  heading?: boolean;
  subHeading?: boolean;
  bold?: boolean;
  BtnText?: boolean;
  emoji?: boolean;
  link?: boolean;
  href?: string;
}) {
  if (heading)
    return (
      <h1 className="text-sm md:text-lg text-white font-bold">{children}</h1>
    );

  if (subHeading)
    return <h3 className="text-xs md:text-sm text-white">{children}</h3>;

  if (bold)
    return (
      <span className="text-xs md:text-sm text-white font-bold ">
        {children}
      </span>
    );

  if (link)
    return (
      <a href={href} target="_blank">
        {" "}
        <span className="text-xs md:text-sm text-white font-bold underline cursor-pointer">
          {children}
        </span>{" "}
      </a>
    );

  if (BtnText)
    return (
      <span className="text-xs md:text-sm text-white font-bold text-nowrap ">
        {children}
      </span>
    );

  if (emoji) return <span className="text-xs md:text-base">{children}</span>;
  return (
    <p className=" text-xs md:text-sm text-gray-300 text-wrap ">{children}</p>
  );
}
