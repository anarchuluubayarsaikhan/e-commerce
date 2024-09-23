import { Heart } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: number;
  imageUrl: string;
};

export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <div className="relative">
      <img src={imageUrl} loading="lazy" className="w-full rounded-xl" />
      <Heart color="black" className="absolute top-4 right-4" />

      <h5 className="mt-2 text-[#000000]">{title}</h5>
      <label className="font-semibold text-[#000000]">{price}₮</label>
    </div>
  );
}
