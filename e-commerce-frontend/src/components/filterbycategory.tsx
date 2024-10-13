"use client"
import CategoryPage from "@/app/category/page"
import { Checkbox } from "./ui/checkbox"
import { useEffect, useState } from "react"
import { useQueryState,parseAsArrayOf, parseAsString } from 'nuqs'
import { useSearchParams } from 'next/navigation'
    


const categories = [
    {labelname:"Малгай",
     id: "малгай"
    },
    {labelname:"Усны сав",
    id: "усны сав"
    },
    {labelname:"T-shirt",
    id: "т-shirt"
    },
    {labelname:"Hoodie",
    id: "hoodie"
    },
    {labelname:"Tee",
    id: "tee"
    },
    {labelname:"Цүнх",
    id: "цүнх"
    },
]

const sizes = [
    {labelname:"Free",
    id: "Free"
    },
    {labelname:"S",
    id: "S"
    },
    {labelname:"M",
    id: "M"
    },
    {labelname:"L",
    id: "L"
    },
    {labelname:"XL",
    id: "XL"
    },
    {labelname:"2XL",
    id: "2XL"
    },
    {labelname:"3XL",
    id: "3XL"
    },
]

export function Filterbycategory() {
    const [categoryarray, setCategoryarray] = useState<String[]>([])
    console.log 
    const [sizearray, setSizearray] = useState<String[]>([])
    const [allcategories, setAllcategories] = useState<String[]>([])
    const [categoryname, setCategoryName] = useQueryState('category',parseAsArrayOf(parseAsString))
    const [sizename, setSizeName] = useQueryState('size')
    const searchParams = useSearchParams()
    const categoryvalue = searchParams.get('category')
    console.log(categoryname)
    const sizevalue = searchParams.get('size')
    console.log(sizevalue)

    function categoriesarray (labelname:string | "") {
        if (categoryarray.includes(labelname)){
            const filteredcategory = categoryarray.filter ((cat) => cat !==labelname )
            setCategoryarray(filteredcategory)
        }
        else {
            setCategoryarray(cat => [...cat, labelname])
        }
    }
    function sizearrayadd (labelname:string | "" ) {
        setSizeName(labelname)
        if (sizearray.includes(labelname)){
            const filteredsize = sizearray.filter ((size) => size !==labelname )
        
        }
        else {
        setSizearray(s => [...s, labelname])
        }
    }

    function getfilteredproducts () {
        fetch (`http://localhost:4000/filterdedproducts?category=${categoryvalue}&size=${sizevalue}`)
    }

    useEffect (()=> {
        getfilteredproducts ()
    },[categoryname, sizename]
        
    )
        
    

   

    return (
        <div className="flex flex-col gap-12">
           <div className="flex flex-col gap-4">
            <div className="text-base font-bold text-black">Ангилал</div>
            <div className="flex flex-col gap-[17px]">
                {categories.map((category)=> 
                        <div className="flex gap-2" key={category.labelname}>
                        <Checkbox id="terms" onClick={()=> categoriesarray(category.labelname)} checked={categoryarray.includes(category.labelname)}/>
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {category.labelname}
                        </label>
                        </div>
                    )}
            </div>   
           </div>
           <div className="flex flex-col gap-4">
           <div className="text-base font-bold text-black">Хэмжээ</div>
                <div className="flex flex-col gap-[17px]">
                    {sizes.map ((size)=>
                    <div className="flex gap-2" key={size.labelname}>
                    <Checkbox id="terms" onClick={()=> sizearrayadd(size.labelname)} checked={sizearray.includes(size.labelname)}/>
                    <label
                        htmlFor="terms"
                        className="font-medium text-sm text-[#09090B]"
                    >
                        {size.labelname}
                    </label>
                        </div>
                    )}
                </div>
                
               
           </div>
        </div>
       
    )
}