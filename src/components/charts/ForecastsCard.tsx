"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ForecastsCard = () => (
  <Card className="col-span-3 bg-[#10B981] text-white">
    <CardHeader className="space-y-0 pb-2">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-white" />
        <CardTitle className="text-sm font-medium text-white">FORECASTS</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold">+15%</span>
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <p className="text-sm text-white/90">
          forecasted increase in your sales closed by the end of the current month
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold">+20%</span>
          <ArrowUpRight className="w-6 h-6" />
        </div>
        <p className="text-sm text-white/90">
          forecasted increase in consultations by the end of the current month
        </p>
      </div>
    </CardContent>
  </Card>
);