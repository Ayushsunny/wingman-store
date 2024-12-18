import React from "react";
import {
  Home,
  BarChart2,
  MessageSquare,
  Settings,
} from "lucide-react";

import { NavItem } from "@/components/dashboard/NavItem";
import { HeaderTab } from "@/components/dashboard/HeaderTab";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ConsultationsChart } from "@/components/charts/ConsultationsChart";
import { VsPeriodChart } from "@/components/charts/VsPeriodChart";
import { ForecastsCard } from "@/components/charts/ForecastsCard";
import { OrdersTable } from "@/components/OrdersTable";
import Logo from "@/assets/Logo.png";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <aside className="w-[72px] bg-[#0E4B3E] flex flex-col items-center py-6 space-y-8">
        <Image
            src={Logo}
            alt="Logo"
            width={32}
            height={32}
            className="object-contain bg-[#0E4B3E]"
          />
      
        <nav className="space-y-6">
          <NavItem href="/" icon={<Home size={24} />} />
          <NavItem href="/sales" icon={<BarChart2 size={24} />} />
          <NavItem href="/chats" icon={<MessageSquare size={24} />} />
        </nav>
        <div className="mt-auto">
          <NavItem icon={<Settings size={24} />} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-[#E5E7EB] px-8 py-4 bg-white">
          <nav className="flex space-x-8">
            <HeaderTab active>Summary</HeaderTab>
            <HeaderTab>Sales</HeaderTab>
            <HeaderTab>Chats</HeaderTab>
          </nav>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-semibold text-[#111827]">At a glance</h1>
            <select className="border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm text-[#374151] bg-white">
              <option>7 days</option>
              <option>30 days</option>
              <option>90 days</option>
            </select>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
    
            <MetricCard
              title="CONSULTATIONS"
              value="24"
              change={15}
              trend="increase"
            />
            <MetricCard
              title="ORDERS PLACED"
              value="12"
              change={15}
              trend="decrease"
            />
            <MetricCard
              title="CONVERSION"
              value="50%"
              change={15}
              trend="decrease"
            />
            <MetricCard
              title="TOTAL SALES VALUE"
              value="$2,400"
              change={15}
              trend="increase"
            />
            <MetricCard
              title="AVG ORDER VALUE"
              value="$240"
              change={15}
              trend="increase"
            />
            <MetricCard
              title="COMMISSION PAID"
              value="$240"
              change={15}
              trend="increase"
            />
          </div>

          {/* Insights Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#111827]">Insights</h2>
            <div className="grid grid-cols-12 gap-6">
              <ConsultationsChart />
              <VsPeriodChart />
              {/* Forecasts Card */}
              <ForecastsCard />
            </div>
          </section>

          <OrdersTable />
        </div>
      </main>
    </div>
  );
}