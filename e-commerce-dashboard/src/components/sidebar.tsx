"use client";
import {
  Clipboard,
  LayoutGrid,
  NotepadText,
  Settings,
  Tag,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function SideBAr() {
  const router = useRouter();
  return (
    <div className="bg-[#FFFFFF] w-[250px] flex flex-col gap-1 py-10">
      <div
        onClick={() => router.push("/auth/dashboard")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3 hover:cursor-pointer"
      >
        <LayoutGrid size={24} strokeWidth={3} absoluteStrokeWidth />
        Хяналтын самбар
      </div>
      <div
        onClick={() => router.push("/auth/order")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3 hover:cursor-pointer"
      >
        <Clipboard size={24} strokeWidth={3} />
        Захиaлга
      </div>
      <div
        onClick={() => router.push("/auth/income")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3 hover:cursor-pointer"
      >
        <Tag size={24} strokeWidth={3} absoluteStrokeWidth />
        Орлого
      </div>
      <div
        onClick={() => router.push("/auth/products")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3 hover:cursor-pointer"
      >
        <NotepadText size={24} strokeWidth={3} />
        Бүтээгдэхүүн
      </div>
      <div
        onClick={() => router.push("/auth/settings")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3 hover:cursor-pointer"
      >
        <Settings size={24} strokeWidth={3} absoluteStrokeWidth />
        Тохиргоо
      </div>
    </div>
  );
}
