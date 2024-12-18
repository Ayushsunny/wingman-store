"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { vsPeriodData } from "@/data/mockData";

export const VsPeriodChart = () => (
    <Card className="col-span-3">
        <CardHeader className="space-y-0 pb-2">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6B7280]" />
                <CardTitle className="text-sm font-medium text-[#6B7280]">VS PAST PERIOD</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={vsPeriodData}
                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        barGap={0}
                    >
                        <CartesianGrid
                            stroke="#E5E7EB"
                            strokeDasharray="5 5"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            domain={[0, 20]}
                            ticks={[0, 5, 10, 15, 20]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <Bar
                            dataKey="consultations"
                            fill="#E5E7EB"
                            barSize={20}
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="ordersClosed"
                            fill="#0E4B3E"
                            barSize={20}
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#E5E7EB] rounded-full" />
                    <span className="text-sm text-[#6B7280]">Consultations</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#0E4B3E] rounded-full" />
                    <span className="text-sm text-[#6B7280]">Orders closed</span>
                </div>
            </div>
        </CardContent>
    </Card>
);