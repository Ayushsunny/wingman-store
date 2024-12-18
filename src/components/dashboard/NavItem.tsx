"use client";
import React from "react";
import Link from "next/link";
import { NavItemProps } from "@/types/dashboard";

export const NavItem: React.FC<NavItemProps> = ({ 
  href = "#", 
  icon 
}) => (
  <Link
    href={href}
    className="text-white/60 p-3 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
  >
    {icon}
  </Link>
);