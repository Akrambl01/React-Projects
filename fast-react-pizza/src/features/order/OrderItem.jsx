import { formatCurrency } from "../../utils/helpers";

/* eslint-disable */

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  /* eslint-enable */

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="space-y-1">
          <span className="font-bold">{quantity}&times;</span> {name}
          <p className="text-sm capitalize italic text-stone-500">
            {isLoadingIngredients ? "Loading..." : ingredients.join(", " )}
          </p>
        </p>

        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
