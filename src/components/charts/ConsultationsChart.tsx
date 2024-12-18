"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { consultationsData } from "@/data/mockData";

export const ConsultationsChart = () => (
    <Card className="col-span-6">
        <CardHeader className="space-y-0 pb-2">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6B7280]" />
                <CardTitle className="text-sm font-medium text-[#6B7280]">CONSULTATIONS</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <div className="h-[300px] relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] -rotate-90">
                    CONSULTATIONS
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] rotate-90">
                    EXPERTS ONLINE
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={consultationsData}
                        margin={{ top: 20, right: 50, left: 50, bottom: 5 }}
                    >
                        <CartesianGrid
                            stroke="#E5E7EB"
                            strokeDasharray="5 5"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            domain={[0, 60]}
                            ticks={[0, 10, 20, 30, 40, 50, 60]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            domain={[0, 20]}
                            ticks={[0, 5, 10, 15, 20]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <Bar
                            yAxisId="right"
                            dataKey="expertsOnline"
                            fill="#FDE68A"
                            barSize={40}
                            z={0}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="answered"
                            stroke="#10B981"
                            strokeWidth={2}
                            dot={false}
                            z={2}
                        />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="incoming"
                            stroke="#6366F1"
                            strokeWidth={2}
                            dot={false}
                            strokeDasharray="3 3"
                            z={1}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border-2 border-[#6366F1] rounded-full" />
                    <span className="text-sm text-[#6B7280]">Incoming</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#10B981] rounded-full" />
                    <span className="text-sm text-[#6B7280]">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#FDE68A] rounded-full opacity-30" />
                    <span className="text-sm text-[#6B7280]">Experts online</span>
                </div>
            </div>
        </CardContent>
    </Card>
);