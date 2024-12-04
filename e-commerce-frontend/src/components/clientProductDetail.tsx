"use client";
import { Edit, Ellipsis, Heart, Star, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik, FormikErrors } from "formik";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { Productdetail } from "./usercard";
import { ClientHeaders } from "./clientheader";
import { Footerclient } from "./footer";
import { postfetcherwithtoken } from "@/utils/fetcherpost";
import { deleteFetch } from "@/utils/deletefetcher";
import { Savedproducts } from "./saved";
import { toast } from 'sonner';
interface FormValues {
  value: string;
}
const Products = [
  {
    size: "S",
    stock: "5",
  },
  {
    size: "M",
    stock: "6",
  },
  {
    size: "L",
    stock: "7",
  },
  {
    size: "XL",
    stock: "8",
  },
  {
    size: "2XL",
    stock: "9",
  },
];
const images = [
  {
    name: "",
    imagePath: "/clientProductImage/image1175.png",
  },
  {
    name: "",
    imagePath: "/clientProductImage/image1176.png",
  },
  {
    name: "",
    imagePath: "/clientProductImage/image1177.png",
  },
  {
    name: "",
    imagePath: "/clientProductImage/image1178.png",
  },
];

export function ProductDetail({ id }: { id: string }) {
  const [oneProduct, setOneproduct] = useState<Productdetail[]>([]);

  function getoneproduct() {
    fetcherwithtoken(`products${id}`)
      .then((res) => res.json())
      .then((data) => setOneproduct(data));
  }

  useEffect(() => {
    getoneproduct();
  }, []);

  const [visible, SetVisible] = useState(false);
  const [selected, setSelected] = useState("");

  const [number, SetNumber] = useState(1);

  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: (values) => {
      console.log(values);
      alert(`title: ${values.title}`);
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.title) {
        errors.value = "title is required";
      }
      return errors;
    },
  });
  const [data, setData] = useState([]);
  const postProduct = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + `/postProducts`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    postProduct();
  }, []);
  const nemeh = (leftquantity: number) => {
    SetNumber(number < leftquantity ? number + 1 : leftquantity);
  };
  const hasah = (leftquantity: number) => {
    SetNumber((preNumber) => (preNumber > 1 ? number - 1 : preNumber));
  };
  console.log(id);

  const [selectImagePath, SetSelectImagePath] = useState("");

  type Basketproduct = {
    _id: string;
    price: number;
    name: string;
    imageurl: string;
    numberofproducts: number;
  };

  const [basketprods, setBasketprods] = useState<Basketproduct[]>([]);

  function addtobasket(
    _id: string,
    price: number,
    name: string,
    imageurl: string
  ) {
    const basket = {
      _id: _id,
      price: price,
      name: name,
      imageurl: imageurl,
      numberofproducts: number,
    };
    const existingCart: Array<any> = JSON.parse(localStorage.getItem('basketproducts') || '[]')
    const existingCartIndex = existingCart.findIndex((cart)=> cart._id ===_id)

    if (existingCartIndex !==-1){
      existingCart[existingCartIndex].numberofproducts+= number
    }
    else{
      existingCart.push(basket)
    }
    localStorage.setItem('basketproducts', JSON.stringify(existingCart));
    toast('Таны сонгосон барааг сагсанд амжилттай нэмлээ');
  }
  const [savedproducts, setSavedproducts] = useState<Savedproducts[]>([]);
  function getsavedproducts() {
    fetcherwithtoken("savedproducts")
      .then((res) => res.json())
      .then((data) => setSavedproducts(data));
  }
  const inWishlist = savedproducts.some((saved) => saved._id === id);

  const [selectedid, setSelectedid] = useState("");

  console.log(inWishlist);
  useEffect(() => {
    getsavedproducts();
  }, []);

  function saveproduct(
    _id: string,
    imageurl: string,
    price: number,
    information: string
  ) {
    setSelectedid(_id);

    if (!inWishlist) {
      postfetcherwithtoken("saveproduct", {
        _id: id,
        imageurl: imageurl,
        information: information,
        price: price,
      }).then((res) => {
        if (res) {
          getsavedproducts();
          return;
        }
      });
    } else {
      deleteFetch(`saveproduct${id}`).then((res) => {
        if (res.ok) {
          return getsavedproducts();
        }
      });
    }
  }

  return (
    <div className="flex flex-col gap-16">
      <ClientHeaders />
      <form onSubmit={formik.handleSubmit}>
        {oneProduct.map((oneProd) => (
          <div className="max-w-[1040px] mx-auto items-center mt-[52px] flex flex-col gap-5 h-screen">
            <div className="flex gap-5">
              <div className="flex gap-5">
                <div className="w-[67px] flex flex-col gap-2 py-[100px]">
                  <div
                    className="w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125"
                    key={oneProd._id}
                  >
                    <Image
                      src={oneProd.imageurl[0]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[0])}
                    />
                  </div>
                  <div
                    className={`w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125 ${
                      oneProd.imageurl.length < 2 ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src={oneProd.imageurl[1]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[1])}
                    />
                  </div>
                  <div
                    className={`w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125 ${
                      oneProd.imageurl.length < 3 ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src={oneProd.imageurl[2]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[2])}
                    />
                  </div>
                  <div
                    className={`w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125 ${
                      oneProd.imageurl.length < 4 ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src={oneProd.imageurl[3]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[3])}
                    />
                  </div>
                  <div
                    className={`w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125 ${
                      oneProd.imageurl.length < 5 ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src={oneProd.imageurl[4]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[4])}
                    />
                  </div>
                  <div
                    className={`w-[67px] h-[67px] hover:border-2 hover:border-primaryBlack hover:scale-125 ${
                      oneProd.imageurl.length < 6 ? "hidden" : "block"
                    }`}
                  >
                    <Image
                      src={oneProd.imageurl[4]}
                      width={67}
                      height={67}
                      alt="Jijig zurag"
                      onClick={() => SetSelectImagePath(oneProd.imageurl[5])}
                    />
                  </div>
                </div>
                <Image
                  src={
                    selectImagePath === ""
                      ? oneProd.imageurl[0]
                      : selectImagePath
                  }
                  width={422}
                  height={511}
                  alt=""
                  className="rounded-2xl shadow-2xl "
                />
              </div>
              <div className="w-[509px] py-[100px] flex-1 flex flex-col gap-4">
                <div className="w-[418px]">
                  <div className="flex flex-col gap-2">
                    <Button
                      variant={"outline"}
                      className="w-14 py-1 px-3 rounded-full"
                    >
                      Шинэ
                    </Button>
                    <div>
                      {oneProd.name}
                      {/* {data.map((product) => (
                    <div key={product._id} className="text-2xl font-bold flex gap-2 items-center">
                      {product.name}
                    </div>
                  ))} */}
                    </div>
                    <button
                      onClick={() =>
                        saveproduct(
                          oneProd._id,
                          oneProd.imageurl[0],
                          oneProd.price,
                          oneProd.information
                        )
                      }
                    >
                      <Heart
                        strokeWidth={1}
                        fill={inWishlist ? "black" : "none"}
                        stroke="black"
                      />
                    </button>
                    <p className="text-base font-normal">
                      {oneProd.information}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-normal">Хэмжээний заавар</p>
                    <div className="flex gap-1">
                      {Products.map((product) => (
                        <Button
                          type="button"
                          key={product.size}
                          variant="ghost"
                          className={`rounded-full  border text-xs w-8 h-8 text-black ${
                            selected === product.size
                              ? "bg-primaryBlack text-white hover:bg-primaryBlack hover:text-white"
                              : ""
                          }`}
                          onClick={() => setSelected(product.size)}
                          disabled={!oneProd.size.includes(product.size)}
                        >
                          {product.size}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Button
                      variant={"outline"}
                      className="rounded-full text-2xl"
                      type="button"
                      onClick={() => hasah(oneProd.leftquantity)}
                    >
                      -
                    </Button>
                    <div className="w-8 h-8 items-center flex justify-center">
                      {number}
                    </div>
                    <Button
                      variant={"outline"}
                      className="rounded-full text-2xl"
                      type="button"
                      onClick={() => nemeh(oneProd.leftquantity)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-10 w-[509px]">
                  <div className="flex flex-col gap-4 w-[175px]">
                    <p className="text-xl font-bold">
                      {Number(oneProd.price) * number}
                    </p>
                    <Button
                      type="button"
                      className="bg-primaryBlue px-9 py-2 rounded-[20px] text-sm font-medium hover:bg-blue-900"
                      onClick={() =>
                        addtobasket(
                          oneProd._id,
                          oneProd.price,
                          oneProd.name,
                          oneProd.imageurl[0],
                        )
                      }
                      disabled={selected.length > 0 ? false : true}
                    >
                      Сагсанд нэмэх
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </form>
      <Footerclient />
    </div>
  );
}
