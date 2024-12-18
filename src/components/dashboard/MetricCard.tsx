"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { MetricCardProps } from "@/types/dashboard";

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  trend 
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="text-xs font-medium text-[#6B7280]">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-semibold text-[#111827]">{value}</div>
      <div
        className={`flex items-center text-sm mt-2 ${
          trend === "increase" ? "text-[#10B981]" : "text-[#EF4444]"
        }`}
      >
        {trend === "increase" ? (
          <ArrowUpRight className="w-4 h-4" />
        ) : (
          <ArrowDownRight className="w-4 h-4" />
        )}
        <span className="ml-1">{change}% {trend}</span>
      </div>
    </CardContent>
  </Card>
);