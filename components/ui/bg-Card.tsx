"use client";
import React from "react";
import { motion } from "motion/react";
import fadeIn from "@/motion/variants";
export default function BgCard({
  children,
  className,
  delay,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>): React.ReactNode {
  return (
    <motion.div
      variants={fadeIn({ direction: "up", delay: delay ?? 0.2 })}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className={`border border-neutral-600 rounded-lg p-4 md:p-6 bg-white/10 ${className} `}
    >
      {children}
    </motion.div>
  );
}
