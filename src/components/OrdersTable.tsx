"use client";
import React, { useState } from "react";
import { ExternalLink, ChevronUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ordersData } from "@/data/mockData";

type SortConfig = {
    key: string;
    direction: 'asc' | 'desc';
};

export const OrdersTable = () => {
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: 'asc' });

    const sortData = (key: string) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    const getSortedData = () => {
        if (!sortConfig.key) return ordersData;

        return [...ordersData].sort((a, b) => {
            if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    };

    const SortIcon = ({ columnKey }: { columnKey: string }) => {
        if (sortConfig.key !== columnKey) return null;
        return sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold text-[#111827] mb-6">Orders</h2>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-[#E5E7EB]">
                            <TableHead 
                                className="text-[#6B7280] font-medium cursor-pointer"
                                onClick={() => sortData('productName')}
                            >
                                <div className="flex items-center gap-1">
                                    Product
                                    <SortIcon columnKey="productName" />
                                </div>
                            </TableHead>
                            <TableHead 
                                className="text-[#6B7280] font-medium cursor-pointer"
                                onClick={() => sortData('date')}
                            >
                                <div className="flex items-center gap-1">
                                    Date
                                    <SortIcon columnKey="date" />
                                </div>
                            </TableHead>
                            <TableHead 
                                className="text-[#6B7280] font-medium cursor-pointer"
                                onClick={() => sortData('timeSpent')}
                            >
                                <div className="flex items-center gap-1">
                                    Time spent
                                    <SortIcon columnKey="timeSpent" />
                                </div>
                            </TableHead>
                            <TableHead 
                                className="text-[#6B7280] font-medium cursor-pointer"
                                onClick={() => sortData('orderValue')}
                            >
                                <div className="flex items-center gap-1">
                                    Order Value
                                    <SortIcon columnKey="orderValue" />
                                </div>
                            </TableHead>
                            <TableHead 
                                className="text-[#6B7280] font-medium cursor-pointer"
                                onClick={() => sortData('commission')}
                            >
                                <div className="flex items-center gap-1">
                                    Commission
                                    <SortIcon columnKey="commission" />
                                </div>
                            </TableHead>
                            <TableHead className="text-[#6B7280] font-medium"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {getSortedData().map((order, i) => (
                            <TableRow key={i} className="border-b border-[#E5E7EB]">
                                <TableCell className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#E5E7EB] rounded-full" />
                                        <span className="font-medium text-[#111827]">{order.productName}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="text-[#374151]">{order.date}</div>
                                    <div className="text-sm text-[#6B7280]">{order.time}</div>
                                </TableCell>
                                <TableCell className="text-[#374151]">{order.timeSpent}</TableCell>
                                <TableCell className="text-[#374151]">${order.orderValue}</TableCell>
                                <TableCell className="text-[#374151]">${order.commission}</TableCell>
                                <TableCell>
                                    <button className="text-[#6366F1] text-sm font-medium flex items-center gap-1">
                                        View Chat
                                        <ExternalLink size={16} />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </section>
    );
};