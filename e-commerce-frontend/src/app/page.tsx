import { Header } from "@/components/header";
import { Listitem } from "@/components/listitem";
import { ProductDash } from "@/components/productDash";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Listitem />
    </div>
  )

}
