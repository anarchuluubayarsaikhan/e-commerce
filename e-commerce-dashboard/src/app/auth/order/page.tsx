import { OrderTabs } from "./OrderTabs";
import { OrderTable } from "./OrderTable";
import { Header } from "@/components/header";

const OrderPage = () => {
  return (
    <div className="w-full">
      <OrderTabs />
      <OrderTable />
    </div>
  );
};

export default OrderPage;
