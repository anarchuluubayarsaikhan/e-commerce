import { Calendar, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderTable() {
  return (
    <div>
      <div className="p-12">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="text-base text-[#FFFFFF] bg-[#18BA51] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">
              Өнөөдөр
            </div>
            <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center">
              7 хоног
            </div>
            <div className="text-base text-[#3F4145] bg-[#ECEDF0] w-[94px] h-[36px] text-center rounded-xl flex items-center justify-center gap-1">
              <Calendar size={16} strokeWidth={2.5} />
              Сараар
            </div>
          </div>
          <Input
            type="email"
            placeholder="Дугаар, Имэйл"
            className="w-[300px] rounded-xl text-[#8B8E95]"
          />
        </div>
      </div>
      <div className="text-xl font-semibold ml-[50px]">Захиалга</div>
      <Table className="ml-[35px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-nowrap">
              Захиалгын ID дугаар
            </TableHead>
            <TableHead>Үйлчлүүлэгч</TableHead>
            <TableHead>Огноо</TableHead>
            <TableHead>Цаг</TableHead>
            <TableHead>Төлбөр</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead className="text-center">Дэлгэрэнгүй</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MOCK_DATA.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-semibold">{invoice.id}</TableCell>
              <TableCell>{invoice.user}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.hour}</TableCell>
              <TableCell>{invoice.payment}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell className="flex justify-center">
                {invoice.More}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const MOCK_DATA = [
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
  {
    id: "#12345678",
    user: "Zoloo soko",
    totalAmount: "2023-01-09",
    hour: "10:58",
    payment: "12,000₮",
    status: "Хүргэгдсэн",
    More: [<ChevronRight size={16} strokeWidth={2.75} />],
  },
];
