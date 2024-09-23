"use client";
import { ProductCard } from "@/components/product-card";
import { Checkbox } from "@/components/ui/checkbox";

const CategoryPage = () => {
  return (
    <main>
      <section className="grid gap-5 grid-cols-4 max-w-[1440px] mx-auto px-5 p-16">
        <div className="block">
          <h4 className="text-base text-[#000000] font-semibold">Ангилал</h4>
          <div className="grid gap-2 mt-[15px]">
            {MOCK_TYPE_DATA.map((item) => (
              <div key={item.id} className="flex gap-1 items-center">
                <Checkbox id={item.id} />
                <label htmlFor={item.id}>{item.name}</label>
              </div>
            ))}
          </div>
          <div className="block mt-[50px]">
            <h4 className="text-base text-[#000000] font-semibold">Хэмжээ</h4>
            <div className="grid gap-2 mt-[15px]">
              <div className="flex gap-2 items-center">
                <Checkbox />
                <div className="text-center text-[#09090B]">S</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-3 col-span-3">
          {MOCK_DATA.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;

const MOCK_TYPE_DATA = [
  { slug: "hat", name: "Малгай", id: "1" },
  { slug: "bottle", name: "Усны сав", id: "2" },
  { slug: "T-shirt", name: "T-shirt", id: "3" },
  { slug: "Hoodie", name: "Hoodie", id: "4" },
  { slug: "bag", name: "Tee", id: "5" },
  { slug: "bag", name: "Цүнх", id: "6" },
];

const MOCK_SIZE_DATA = [
  { slug: "hat", name: "Free" },
  { slug: "hat", name: "S" },
  { slug: "hat", name: "M" },
  { slug: "hat", name: "L" },
  { slug: "hat", name: "XL" },
  { slug: "hat", name: "2XL" },
  { slug: "hat", name: "3XL" },
];

const MOCK_DATA = [
  {
    id: "1",
    imageUrl: "/image.png",
    title: "All Smiles Nalgene",
    price: 120000,
  },
  {
    id: "2",
    imageUrl: "/notebook.png",
    title: "The Prompt Magazine",
    price: 120000,
  },
  {
    id: "3",
    imageUrl: "/women.png",
    title: "Independent Corners Tee",
    price: 120000,
  },
  {
    id: "1",
    imageUrl: "/image.png",
    title: "All Smiles Nalgene",
    price: 120000,
  },
  {
    id: "2",
    imageUrl: "/notebook.png",
    title: "The Prompt Magazine",
    price: 120000,
  },
  {
    id: "3",
    imageUrl: "/women.png",
    title: "Independent Corners Tee",
    price: 120000,
  },
];
