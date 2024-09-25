import { redirect } from "next/navigation";

const page = () => {
  redirect("/auth/order");
};

export default page;
