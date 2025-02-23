"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", systolic: 186, diastolic: 80 },
    { month: "February", systolic: 305, diastolic: 200 },
    { month: "March", systolic: 237, diastolic: 120 },
    { month: "April", systolic: 73, diastolic: 190 },
    { month: "May", systolic: 209, diastolic: 130 },
    { month: "June", systolic: 214, diastolic: 140 },
]

const chartConfig = {
    systolic: {
        label: "Systolic",
        color: "hsl(var(--chart-1))",
    },
    diastolic: {
        label: "Diastolic",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function Chart() {
    return (
        <div className="bg-transparent shadow-none border-0">
            <div className="w-full">
                <ChartContainer className="w-full" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 22,
                            right: 22,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="systolic"
                            type="monotone"
                            stroke="var(--color-systolic)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-systolic)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                        <Line
                            dataKey="diastolic"
                            type="monotone"
                            stroke="var(--color-diastolic)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-diastolic)",
                            }}
                            activeDot={{
                                r: 6,
                            }}

                        />
                    </LineChart>
                </ChartContainer>
            </div>

        </div>
    )
}
