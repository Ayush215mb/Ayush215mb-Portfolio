import React from "react";

export default function Projectslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center flex-col gap-16">
      {children}
    </div>
  );
}
