import { OrderTabs } from "./OrderTabs";
import { OrderTable } from "./OrderTable";

const OrderPage = () => {
  return (
    <div className="w-full">
      <OrderTabs />
      <OrderTable />
    </div>
  );
};

export default OrderPage;
