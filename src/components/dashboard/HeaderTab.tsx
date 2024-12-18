"use client";
import React from "react";
import { HeaderTabProps } from "@/types/dashboard";

export const HeaderTab: React.FC<HeaderTabProps> = ({ 
  children, 
  active 
}) => (
  <button
    className={`text-sm font-medium pb-4 border-b-2 ${
      active
        ? "text-[#10B981] border-[#10B981]"
        : "text-[#6B7280] border-transparent hover:text-[#10B981]"
    }`}
  >
    {children}
  </button>
);
