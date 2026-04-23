import CustomButton from "@/components/ui/CustomButton";
import { ArrowRightIcon } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 514 258"
        fill="none"
      >
        <path
          d="M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="my-6 text-8xl font-medium tracking-tighter tabular-nums">
        404
      </h1>

      <CustomButton Submit={true} href="/">
        <div className="flex">
          Go to Home
          <ArrowRightIcon />
        </div>
      </CustomButton>
    </div>
  );
}
