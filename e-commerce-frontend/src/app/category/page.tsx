"use client";
import { ClientHeaders } from "@/components/clientheader";
import { ProductCard } from "@/components/product-card";
import { Checkbox } from "@/components/ui/checkbox";
import { UserCard } from "@/components/usercard";
import { Productdetail, UserCardIndex } from "@/components/usercardindexing";
import { UserCards } from "@/components/usercards";
import { fetcherwithtoken } from "@/utils/fetcherget";
import { useEffect, useState } from "react";
import { useQueryState,parseAsArrayOf, parseAsString } from 'nuqs'
import { useSearchParams } from 'next/navigation'
import { string } from "zod";


const CategoryPage = () => {
  const [productdetails, setProductdetails] = useState<Productdetail[]>([]);
  console.log(productdetails);
  function getproductdetails() {
    fetcherwithtoken("getproductdetails")
      .then((res) => res.json())
      .then((data) => setProductdetails(data));
  }
  useEffect(() => {
    getproductdetails();
  }, []);


  const [productdetail, setProductdetail] = useState<Productdetail[]>([]);
  console.log(productdetails);
  function getproductdetail() {
    fetcherwithtoken("getproductdetails")
      .then((res) => res.json())
      .then((data) => setProductdetail(data));
  }
  useEffect(() => {
    getproductdetail();
  }, []);

  

  const [categoryarray, setCategoryarray] = useState<String[]>([])
    const [sizearray, setSizearray] = useState<string[]>([])
    // const [allcategoriesarray, setAllcategories] = useState<string[]>([])
    const [categoryname, setCategoryName] = useQueryState('subcategory',parseAsArrayOf(parseAsString))
    const [sizename, setSizeName] = useQueryState('size',parseAsArrayOf(parseAsString))
    const searchParams = useSearchParams()
   

    let allcategories:string[] = []
    let allsizes:string[] = []
    


    function addtocategoriesarray (value:string | "") {
      if (categoryname !== allcategories) {
        if (!allcategories.includes(value)){
          allcategories.push(value)
          console.log(allcategories)
        }
        else {
          allcategories = allcategories.filter ((allcat)=> allcat !==value)
         
        }
        setCategoryName(allcategories)
      }
    }


    function addtosizearray (name:string | "" ) {
      if (sizename !== allsizes) {
        if (!allsizes.includes(name)){
          allsizes.push(name)
          console.log(allsizes)
          setSizeName(allsizes)
        }
        else {
          allsizes = allsizes.filter ((allsize)=> allsize !==name)
          setSizeName(allsizes)
        }
        setSizeName(allsizes)
      }
    }

    const categoryvalue = searchParams.get('subcategory')
    const sizevalue = searchParams.get('size')
    console.log(categoryvalue,sizevalue)

    function getfilteredproducts () {
        fetch (`http://localhost:4000/filterdedproducts?subcategory=${categoryvalue ?? ""}&size=${sizevalue ?? ""}`
        ).then((res)=> res.json()).then((data)=> setProductdetail(data))
    }

    useEffect (()=> {
        getfilteredproducts ()
    },[categoryvalue, sizevalue]
        
    )
        
  return (
    <main className="flex flex-col gap-8">
      <ClientHeaders/>
      <div className="flex gap-4">
        <section className="grid gap-5 grid-cols-4 max-w-[1440px] mx-auto px-5 p-16">
          <div className="block">
            <h4 className="text-base text-[#000000] font-semibold">Ангилал</h4>
            <div className="grid gap-2 mt-[15px]">
              {MOCK_TYPE_DATA.map((item) => (
                <div className="flex gap-2" key={item.id}  >
                  <Checkbox id="terms" onClick={()=> addtocategoriesarray(item.value)} checked={categoryname?.includes(item.value)}/>
                  <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                      {item.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="block mt-[50px]">
              <h4 className="text-base text-[#000000] font-semibold">Хэмжээ</h4>
              <div className="grid gap-2 mt-[15px]">
                <div className="grid gap-2 items-center">
                  {MOCK_SIZE_DATA.map((item) => (
                    <div className="flex gap-2" key={item.id} >
                    <Checkbox id="terms"  checked={sizename?.includes(item.name)} onClick={()=> addtosizearray(item.name)}/>
                    <label
                        htmlFor="terms"
                        className="font-medium text-sm text-[#09090B]"
                    >
                        {item.name}
                    </label>
                        </div>
                  ))}
                </div>
                
              </div>

            </div>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-y-28 gap-x-5">
          {productdetail.map((proddet)=> 
            <UserCard proddet = {proddet}/>
          )}
          
        </div>
        
        
      </div>
      
    </main>
  );
};

export default CategoryPage;

const MOCK_TYPE_DATA = [
  { value: "dress", name: "Даашинз", id: "1" },
  { value: "coat", name: "Хүрэм", id: "2" },
  { value: "shirt", name: "Цамц", id: "3" },
  { value: "trousers", name: "Өмд", id: "4" },
  { value: "jacket", name: "Хантааз", id: "5" }
];

const MOCK_SIZE_DATA = [
  { slug: "hat", name: "Free", id: "1" },
  { slug: "hat", name: "S", id: "2" },
  { slug: "hat", name: "M", id: "3" },
  { slug: "hat", name: "L", id: "4" },
  { slug: "hat", name: "XL", id: "5" },
  { slug: "hat", name: "2XL", id: "6" },
  { slug: "hat", name: "3XL", id: "7" },
];
