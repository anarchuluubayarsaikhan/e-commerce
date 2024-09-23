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
  BookMarked,
  DollarSign,
  LayoutGrid,
  LayoutList,
  Pencil,
  Plus,
  Settings,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { ProductUpload } from "./productUpload";
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
      <div className="flex w-full">
        <div className="max-w-56 flex flex-col gap-4 p-4 bg-slate-300">
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
        <div className="w-full">
          <div className="flex gap-4 py-4">
            <p className="text-sm font-medium p-4 hover:font-semibold hover:border-b-2 border-black hover:cursor-pointer">Бүтээгдэхүүн</p>
            <p className="text-sm font-medium p-4 hover:font-semibold hover:border-b-2 border-black hover:cursor-pointer">Ангилал</p>
          </div>
          <div className="flex flex-col gap-6 ml-6">
            <Button className="w-[280px] rounded-2xl text-white bg-primaryBlack ">
              + Бүтээгдэхүүн нэмэх
            </Button>
            <Table className="flex-1">
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell>{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell>{invoice.totalAmount}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell>{invoice.totalAmount}</TableCell>
                    <TableCell className="flex gap-3">
                      <Trash2 />
                      <Pencil />
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
