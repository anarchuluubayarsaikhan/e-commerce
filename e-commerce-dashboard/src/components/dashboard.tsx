"use client"

import { CalendarArrowDown, ChevronRight, DollarSign } from "lucide-react"
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from "next/image"
const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#121316",
    },
    mobile: {
      label: "Mobile",
      color: "#121316",
    },
  } satisfies ChartConfig

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

export function Dashboard () {
    return (
        <div className="flex flex-col gap-[34px]">
            <div className="flex gap-6">
                <div className="bg-white py-4 px-6 rounded-[12px] w-[573px] flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <DollarSign size={16} strokeWidth={3} />        
                        <div className="text-[#121316] text-base font-semibold ">Орлого</div>
                    </div>
                    <div className="font-bold text-3xl text-buttonPrimary">235,000₮</div>
                    <div className="text-[#5E6166] text-sm font-normal ">Өнөөдөр</div>
                </div>
                <div className="bg-white py-4 px-6 rounded-[12px] w-[573px] flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <CalendarArrowDown size={16} strokeWidth={3} />       
                        <div className="text-[#121316] text-base font-semibold ">Захиалга</div>
                    </div>
                    <div className="font-bold text-3xl text-buttonPrimary">58</div>
                    <div className="text-[#5E6166] text-sm font-normal ">Өнөөдөр</div>
                </div>
            </div>
        <div className="flex gap-6">
        <div className="bg-white py-4 px-6 rounded-[12px] w-[581px] flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="text-[#121316] text-lg font-semibold">Шилдэг бүтээгдэхүүн</div>
                <ChevronRight />
            </div>
            <Table>
                <TableHeader className="bg-tagGrayBg">
                    <TableRow>
                    <TableHead className="font-semibold text-xs text-[#3F4145]">№</TableHead>
                    <TableHead className="font-semibold text-xs text-[#3F4145] pl-[73px]">Бүтээгдэхүүн</TableHead>
                    <TableHead className="font-semibold text-xs text-[#3F4145]">Зарагдсан</TableHead>
                    <TableHead className="font-semibold text-xs text-[#3F4145]">Үнэ</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                       <div>
                            <TableRow>
                                <TableCell className="text-buttonPrimary font-normal text-sm">1</TableCell>
                                <TableCell>
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                            <Image src="/hoodiee.jpeg" alt="Dashboard image" width={40} height={40} className="w-full h-full object-cover"/>
                                        </div>
                                        
                                        <div className="flex flex-col gap-1">
                                            <div className="text-buttonPrimary font-semibold text-sm">WOMEN'S HORSEBIT MULE</div>
                                            <div className="text-[#3F4145] text-sm font-normal">#12345678</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-buttonPrimary font-normal text-sm">200</TableCell>
                                <TableCell className="text-buttonPrimary font-normal text-sm">12000</TableCell>
                            </TableRow>
                       </div>
                        
                      
                </TableBody>
           
                
            </Table>
        </div>
        <div className="bg-white py-4 px-6 rounded-[12px] w-[573px] flex flex-col gap-3">
            <div className="flex justify-between">
                <div className="text-[#121316] text-lg font-semibold">Борлуулалт</div>
                <ChevronRight />
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer>
           
        </div>
        </div>
        </div>
    )
       
}