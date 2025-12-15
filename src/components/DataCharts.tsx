"use client";

import { BarChart3, Clock, Shield } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import React from "react";

// --- Chart Data ---

const yieldData = [
  { name: "Bank Deposit", yield: 0.5, duration: 0 },
  { name: "T-Bills (6M)", yield: 4.0, duration: 6 },
  { name: "Corp. Bond (5Y)", yield: 5.5, duration: 60 },
  { name: "Solventis Notes", yield: 7.5, duration: 3 },
];

const durationRiskData = [
  { name: "Solventis Notes", duration: 3, risk: 2 },
  { name: "T-Bills", duration: 6, risk: 1 },
  { name: "Corp. Bonds", duration: 60, risk: 3 },
  { name: "Private Equity", duration: 120, risk: 5 },
];

const cashFlowData = [
  { step: "Subscription", days: 0, value: 100 },
  { step: "Holding Period", days: 45, value: 100 },
  { step: "Settlement", days: 90, value: 107.5 },
];

// --- Chart Configurations ---

const chartConfigYield = {
  yield: {
    label: "Target APR (%)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const chartConfigDuration = {
  duration: {
    label: "Duration (Months)",
    color: "hsl(var(--chart-1))",
  },
  risk: {
    label: "Risk Score (1-5)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const chartConfigCashFlow = {
  value: {
    label: "Capital Value (%)",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;


// --- Individual Chart Components ---

const YieldComparisonChart = () => (
  <ChartContainer config={chartConfigYield} className="min-h-[200px] w-full">
    <BarChart accessibilityLayer data={yieldData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
      <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
      <XAxis
        dataKey="name"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        className="text-xs"
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}%`}
        className="text-xs"
      />
      <Tooltip
        content={({ payload, label }) => {
          if (payload && payload.length) {
            return (
              <div className="p-2 bg-card border rounded-md shadow-lg text-sm">
                <p className="font-semibold">{label}</p>
                <p className="text-[hsl(var(--chart-1))]">{`Yield: ${payload[0].value}% APR`}</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Bar dataKey="yield" fill="var(--color-yield)" radius={4} />
    </BarChart>
  </ChartContainer>
);

const DurationRiskChart = () => (
  <ChartContainer config={chartConfigDuration} className="min-h-[200px] w-full">
    <BarChart accessibilityLayer data={durationRiskData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
      <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
      <XAxis
        dataKey="name"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        className="text-xs"
      />
      <YAxis
        dataKey="duration"
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}M`}
        className="text-xs"
        yAxisId="left"
        stroke="var(--color-duration)"
      />
      <YAxis
        dataKey="risk"
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `Risk ${value}`}
        className="text-xs"
        yAxisId="right"
        orientation="right"
        stroke="var(--color-risk)"
      />
      <Tooltip
        content={({ payload, label }) => {
          if (payload && payload.length) {
            return (
              <div className="p-2 bg-card border rounded-md shadow-lg text-sm">
                <p className="font-semibold">{label}</p>
                <p className="text-[hsl(var(--chart-1))]">{`Duration: ${payload.find(p => p.dataKey === 'duration')?.value} Months`}</p>
                <p className="text-[hsl(var(--chart-3))]">{`Risk Score: ${payload.find(p => p.dataKey === 'risk')?.value}/5`}</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Bar dataKey="duration" fill="var(--color-duration)" radius={[4, 4, 0, 0]} yAxisId="left" />
      <Bar dataKey="risk" fill="var(--color-risk)" radius={[4, 4, 0, 0]} yAxisId="right" />
    </BarChart>
  </ChartContainer>
);

const CashFlowTimelineChart = () => (
  <ChartContainer config={chartConfigCashFlow} className="min-h-[200px] w-full">
    <LineChart accessibilityLayer data={cashFlowData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
      <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
      <XAxis
        dataKey="step"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        className="text-xs"
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}%`}
        className="text-xs"
      />
      <Tooltip
        content={({ payload, label }) => {
          if (payload && payload.length) {
            const data = cashFlowData.find(d => d.step === label);
            return (
              <div className="p-2 bg-card border rounded-md shadow-lg text-sm">
                <p className="font-semibold">{label}</p>
                <p className="text-[hsl(var(--chart-4))]">{`Capital: ${payload[0].value}%`}</p>
                <p className="text-muted-foreground">{`Day: ${data?.days}`}</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Line
        dataKey="value"
        type="monotone"
        stroke="var(--color-value)"
        strokeWidth={2}
        dot={{
          fill: "var(--color-value)",
          r: 4,
        }}
        activeDot={{
          r: 6,
          fill: "var(--color-value)",
          stroke: "var(--color-value)",
          strokeWidth: 2,
        }}
      />
    </LineChart>
  </ChartContainer>
);


interface ChartWrapperProps {
    title: string;
    description: string;
    icon: React.ElementType;
    children: React.ReactNode;
}

const ChartWrapper = ({ title, description, icon: Icon, children }: ChartWrapperProps) => (
  <div className="p-6 border rounded-lg shadow-xl bg-card h-full flex flex-col transition-all duration-300 hover:border-accent/50">
    <div className="flex items-center space-x-3 mb-4">
      <Icon className="w-6 h-6 text-accent" />
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    <div className="flex-grow flex items-center justify-center">
        {children}
    </div>
  </div>
);


export function DataCharts() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            <ChartWrapper
              title="Yield Comparison"
              icon={BarChart3}
              description="A bar chart illustrating the target yield of Solventis Yield Notes (7.5% APR) relative to conservative benchmarks."
            >
                <YieldComparisonChart />
            </ChartWrapper>
            <ChartWrapper
              title="Duration vs. Risk Profile"
              icon={Clock}
              description="A comparison positioning Solventis Yield Notes firmly in the low-risk, short-duration quadrant."
            >
                <DurationRiskChart />
            </ChartWrapper>
            <ChartWrapper
              title="Cash Flow Timeline"
              icon={Shield}
              description="A timeline chart showing the capital flow from subscription to automated settlement of Principal + Yield."
            >
                <CashFlowTimelineChart />
            </ChartWrapper>
        </div>
    )
}