import React from "react";

export default function BgCard({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>): React.ReactNode {
  return (
    <div
      className={`border border-neutral-600 rounded-lg p-6 bg-neutral-900 ${className} `}
    >
      {children}
    </div>
  );
}
