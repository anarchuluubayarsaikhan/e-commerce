"use client"
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent } from "./ui/popover";
import { TableBody, TableCell } from "./ui/table";
import { useState } from "react";

export function ProductDetail({ open }: { open: boolean }) {
    const [visible, SetVisible] = useState(false);
  return (
    <div className="max-w-[1040px] mt-[52px] flex gap-5">
      <div className="flex gap-5">
        <div className="w-[67px] flex flex-col gap-2 py-[100px]">
          <div className="w-[67px] h-[67px] bg-yellow-300 rounded-sm shadow-xl hover:border-2 hover:border-primaryBlack hover:scale-125"></div>
          <div className="w-[67px] h-[67px] bg-yellow-300 rounded-sm shadow-xl hover:border-2 hover:border-primaryBlack hover:scale-125"></div>
          <div className="w-[67px] h-[67px] bg-yellow-300 rounded-sm shadow-xl hover:border-2 hover:border-primaryBlack hover:scale-125"></div>
          <div className="w-[67px] h-[67px] bg-yellow-300 rounded-sm shadow-xl hover:border-2 hover:border-primaryBlack hover:scale-125"></div>
        </div>
        <div className="w-[509px] h-[521px] bg-green-400 rounded-2xl skew-y-0"></div>
      </div>
      <div className="w-[509px] py-[100px] pr-[93px flex flex-col gap-4">
        <div className="w-[418px]">
          <div className="flex flex-col gap-2">
            <Button variant={"outline"} className="w-14 py-1 px-3 rounded-full">
              Шинэ
            </Button>
            <div className="text-2xl font-bold flex gap-2 items-center">
              Wildflower Hoodie
              <Heart />
            </div>
            <p className="text-base font-normal">
              Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-normal">Хэмжээний заавар</p>
            <div className="flex gap-1">
              {/* <div className="flex">
                <Input type="radio" value="size" name="size" className="text-primaryBlack"/>
                <Input type="radio" value="size" name="size" />
                <Input type="radio" value="size" name="size" />
                <Input type="radio" value="size" name="size" />
                <Input type="radio" value="size" name="size" />
                <span className="sr-only">White</span>
                <span className="size-8 rounded-full border border-black border-opacity-10 bg-white"></span>
              </div> */}

              <Button className="w-8 h-8 rounded-full">S</Button>
              <Button
                variant={"outline"}
                className="w-8 h-8 text-black rounded-full"
              >
                M
              </Button>
              <Button
                variant={"outline"}
                className="w-8 h-8 text-black rounded-full"
              >
                L
              </Button>
              <Button
                variant={"outline"}
                className="w-8 h-8 text-black rounded-full"
              >
                XL
              </Button>
              <Button
                variant={"outline"}
                className="w-8 h-8 text-black rounded-full"
              >
                2XL
              </Button>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Button variant={"outline"} className="rounded-full text-2xl">
              -
            </Button>
            <div className="w-8 h-8 items-center flex justify-center">1</div>
            <Button variant={"outline"} className="rounded-full text-2xl">
              +
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 w-[175px]">
            <p className="text-xl font-bold">120’000₮</p>
            <Button
              variant={"destructive"}
              className="bg-primaryBlue px-9 py-2 rounded-[20px] text-sm font-medium hover:bg-primaryBlue"
            >
              Сагсанд нэмэх
            </Button>
          </div>
          <div>
            <div className="flex gap-4">
              <p className="text-sm font-normal">Үнэлгээ</p>
              <div className="text-sm font-normal text-primaryBlue border-b-2 border-primaryBlue w-[97px] hover:cursor-pointer" onClick={()=> SetVisible(true)}>
                бүгдийг харах
              </div>
            </div>
            <div>
              <div className="flex">
                <Star className="size-5 fill-yellow-400 text-yellow-400 border-0" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 opacity-50 text-yellow-400 border-0 " />
                <p className="w-[54px] text-sm font-normal">4.6 (24)</p>
              </div>
            </div>
            <Popover open={open}>
                <PopoverContent>
                    <TableBody>
                        <TableCell>
                            <div>
                                Saraa
                                <Star />
                            </div>
                            <div>Ваав материал ёстой гоё  байна 😍</div>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableBody>
                    
                </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
