"use client";
import CircleSVG from "@/assets/circle.svg";
import { cn } from "@/utils/helper";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending, action, data, method } = useFormStatus();

  return (
    <button
      className={cn(
        `flex items-center shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`,
        pending && "cursor-not-allowed opacity-50"
      )}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      Get SUI
      {pending && <CircleSVG />}
    </button>
  );
}
