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
      <button
        onClick={() => router.push("/auth/dashboard")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3"
      >
        <LayoutGrid size={24} strokeWidth={3} absoluteStrokeWidth />
        Хяналтын самбар
      </button>
      <button
        onClick={() => router.push("/auth/order")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3"
      >
        <Clipboard size={24} strokeWidth={3} />
        Захиaлга
      </button>
      <button
        onClick={() => router.push("/auth/income")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3"
      >
        <Tag size={24} strokeWidth={3} absoluteStrokeWidth />
        Орлого
      </button>
      <button
        onClick={() => router.push("/auth/products")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3"
      >
        <NotepadText size={24} strokeWidth={3} />
        Бүтээгдэхүүн
      </button>
      <button
        onClick={() => router.push("/auth/settings")}
        className="flex gap-4 text-headerBlack text-base hover:bg-gray-300 p-3"
      >
        <Settings size={24} strokeWidth={3} absoluteStrokeWidth />
        Тохиргоо
      </button>
    </div>
  );
}
