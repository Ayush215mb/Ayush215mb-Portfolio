import React from "react";

export default function BgCard({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>): React.ReactNode {
  return (
    // <div
    //   className={`border border-neutral-600 rounded-lg p-6 bg-neutral-800 ${className} `}
    // >
    <div
      className={`border border-neutral-600 rounded-lg p-6 bg-white/10 ${className} `}
    >
      {children}
    </div>
  );
}
