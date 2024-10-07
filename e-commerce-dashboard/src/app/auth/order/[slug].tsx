import { Car, ChevronDown, ChevronLeft } from "lucide-react";
import React from "react";
import shoes from "../../../../../public/shoes.png";
import shirt from "../../../../../public/shirt.png";
import Image from "next/image";

const OrderDetailPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  return (
    <div className="grid">
      <button className="flex gap-4 w-full bg-white h-[50px] p-3">
        {" "}
        <button>
          <ChevronLeft size={20} strokeWidth={2.75} />
        </button>
        <div className="text-sm text-[#121316]">Захиалгын дэлгэрэнгүй</div>
      </button>
      <div className="flex p-5 gap-6">
        <div className="p-5 bg-white rounded-xl w-full grid gap-6">
          <div className="flex justify-between">
            <div>
              <div className="text-[#121316] text-sm">
                Захиалгын ID дугаар:{" "}
              </div>
              <div className="text-[#121316] text-sm font-semibold">
                #12345678
              </div>
            </div>
            <button className="text-sm flex bg-[#ECEDF0] rounded-full h-[30px] py-1 px-2 hover:bg-gray-300">
              Бэлтгэгдэж байна <ChevronDown size={20} />
            </button>
          </div>
          <div className="">
            <div className="text-[#3F4145] text-sm">Захиалагч: Хувь хүн </div>
            <div className="flex">
              <div className="text-sm text-[#121316] font-semibold">
                Solongo Zoloo-
              </div>
              <div className="text-sm text-[#3F4145]">
                Zoloosoko0526@gmail.com, 88556061
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] rounded-lg flex">
            <Image src={shoes} alt="shoes" className="rounded-lg" />
            <div className="p-4 grid gap-2">
              <div className="font-semibold text-xl text-[#121316]">
                WOMEN'S HORSEBIT MULE
              </div>
              <div>
                <div className="text-xs text-[#3F4145]">2024-01-20</div>
                <div className="text-xs text-[#3F4145]">
                  Бүтээгдэхүүний ID: 30349049903
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-xs text-[#3F4145]">
                  Тоо ширхэг: 3 * ₮225,700
                </div>
                <div className="text-sm text-[#121316] font-semibold">
                  {" "}
                  ₮677,100
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F8] rounded-lg flex">
            <Image src={shirt} alt="shirt" className="rounded-lg" />
            <div className="p-4 grid gap-2">
              <div className="font-semibold text-xl text-[#121316]">
                WOMEN'S HORSEBIT MULE
              </div>
              <div>
                <div className="text-xs text-[#3F4145]">2024-01-20</div>
                <div className="text-xs text-[#3F4145]">
                  Бүтээгдэхүүний ID: 30349049903
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-xs text-[#3F4145]">
                  Тоо ширхэг: 1 * ₮125,700
                </div>
                <div className="text-sm text-[#121316] font-semibold">
                  {" "}
                  ₮125,700
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-5 bg-white rounded-xl w-full">
            <div className="text-[#121316] text-sm py-4">
              Хүргэлтийн мэдээлэл
            </div>
            <div className="w-full bg-gray-300 border-[1px]"></div>
            <div className="text-[#3F4145] text-sm mt-[24px]">Гэр</div>
            <div className="text-[#121316] text-sm font-semibold">
              Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r
              darvar
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl w-full mt-[25px]">
            <div className="text-[#121316] text-sm py-4">
              Төлбөрийн мэдээлэл
            </div>
            <div className="w-full bg-gray-300 border-[1px]"></div>
            <div className="text-[#3F4145] text-sm mt-[24px]">Бүтээгдэхүүн</div>
            <div className="flex mt-[10px] justify-between">
              <div className="text-xs text-[#3F4145]">
                WOMEN'S HORSEBIT MULE Women’s... x2
              </div>
              <div className="text-sm text-[#3F4145]">₮677,100</div>
            </div>
            <div className="flex mt-[10px] justify-between">
              <div className="text-xs text-[#3F4145]">
                WOMEN'S HORSEBIT MULE Women’s... x1
              </div>
              <div className="text-sm text-[#3F4145]">₮ 125,700</div>
            </div>
            <div className="flex mt-[10px] justify-between">
              <div className="text-xs text-[#3F4145]"> Хүргэлт</div>
              <Car size={20} className="text-[#5E6166]" />
              <div className="text-sm text-[#3F4145]">₮ 125,700</div>
            </div>
            <div className="w-full bg-gray-300 border-[1px] mt-[32px]"></div>
            <div className="flex mt-[10px] justify-between">
              <div className="text-sm text-[#3F4145] font-semibold">
                Нийт төлсөн дүн
              </div>
              <div className="text-sm text-[#3F4145] font-semibold">
                ₮807,800
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;