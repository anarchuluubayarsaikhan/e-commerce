"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowDown,
  BookMarked,
  Calendar,
  ChevronDown,
  DollarSign,
  LayoutGrid,
  LayoutList,
  Pencil,
  Plus,
  Search,
  Settings,
  Shapes,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { ProductUpload } from "./productUpload";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function ProductDash() {
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <div className="flex w-full bg-slate-400">
        <div className="max-w-56 flex flex-col gap-4 py-4 bg-slate-100">
          <div className="flex gap-2">
            <LayoutGrid className="w-6" />
            <div className="text-base font-semibold text-nowrap">
              Хяналтын самбар
            </div>
          </div>
          <div className="flex gap-2">
            <BookMarked className="w-6" />
            <div className="text-base font-semibold">Захиалга</div>
          </div>
          <div className="flex gap-2">
            <DollarSign />
            <div className="text-base font-semibold">Орлого</div>
          </div>
          <div className="flex gap-2">
            <LayoutList />
            <div className="text-base font-semibold">Бүтээгдэхүүн</div>
          </div>
          <div className="flex gap-2">
            <Settings />
            <div className="text-base font-semibold">Тохиргоо</div>
          </div>
        </div>
        <div className="w-ful">
          <div className="flex gap-4 py-4">
            <p className="text-sm font-medium p-4 hover:font-semibold hover:border-b-2 border-black hover:cursor-pointer">
              Бүтээгдэхүүн
            </p>
            <p className="text-sm font-medium p-4 hover:font-semibold hover:border-b-2 border-black hover:cursor-pointer">
              Ангилал
            </p>
          </div>
          <div className="flex flex-col gap-6 pl-6 ml-6">
            <Button className="w-[280px] rounded-xl text-base font-semibold px-4 py-3">
              <div className="text-base font-semibold flex gap-1 px-7 py-2">
                <Plus /> Бүтээгдэхүүн нэмэх
              </div>
            </Button>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="flex gap-2 py-2 px-3">
                  <Shapes className="size-6 text-iconPrimary"/>
                  <p>Ангилал</p>
                  <ChevronDown className="size-6 text-iconPrimary"/>
                </div>
                <div  className="flex gap-2 py-2 px-3">
                  <DollarSign className="size-6 text-iconPrimary"/>
                  <p>Үнэ</p>
                  <ChevronDown className="size-6 text-iconPrimary"/>
                </div>
                <div  className="flex gap-2 py-2 px-3">
                  <Calendar className="size-6 text-iconPrimary"/>
                  <p>Сараар</p>
                  <ChevronDown className="size-6 text-iconPrimary"/>
                </div>
              </div>
              <div className="w-[419px] flex gap-2 items-center p-2 bg-white rounded-lg">
                <Search className="size-6 text-iconPrimary"/>
                <Input placeholder="Бүтээгдэхүүний нэр, SKU, UPC" />
              </div>
            </div>
            <Table className="flex-1">
              <TableHeader className="border-b-2 border-[#ECEDF0 ]">
                <TableRow>
                  <TableHead className="w-[68px]"></TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[156px] hover:cursor-pointer">
                    Бүтээгдэхүүн
                  </TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[214px] hover:cursor-pointer">
                    Ангилал
                  </TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[156px] hover:cursor-pointer">
                    Үнэ
                  </TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[156px] hover:cursor-pointer">
                    Үлдэгдэл
                  </TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[156px] hover:cursor-pointer">
                    Зарагдсан
                  </TableHead>
                  <TableHead className="text-xs text-[#3F4145] font-semibold py-3 px-6 w-[156px] hover:cursor-pointer">
                     Нэмсэн огноо
                  </TableHead>
                  <TableHead className="w-[104px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="w-[68px] px-6 py-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell className="w-[156px] px-6 py-4">
                      <div className="flex gap-3">
                        <div className="bg-primaryGreen rounded-full size-10"></div>
                        <div className="flex flex-col gap-1">
                          {invoice.invoice}
                          <p>0001</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-[214px] px-6 py-4">
                      {invoice.paymentStatus}
                    </TableCell>
                    <TableCell className="w-[156px] px-6 py-4">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell className="w-[156px] px-6 py-4">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell className="w-[156px] px-6 py-4">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell className="w-[156px] px-6 py-4">
                      {invoice.totalAmount}
                    </TableCell>
                    <TableCell className="flex gap-3 p-5 w-[104px]">
                      <Trash2 className="w-5 h-5 text-[#1C20243D] hover:text-[red] hover:cursor-pointer" />
                      <Pencil className="w-5 h-5 text-[#1C20243D] hover:text-blue-600 hover:cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <ProductUpload open={false} />
        </div>
      </div>
    </div>
  );
}
