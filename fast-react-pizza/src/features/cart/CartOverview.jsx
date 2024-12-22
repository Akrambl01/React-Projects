import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotoalCartPrice, getTotoalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotoalCartQuantity);
  const totalCartPrice = useSelector(getTotoalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
