import { Result } from "../app/data/data";

interface Props {
  list: Result[];
  onChange: React.Dispatch<React.SetStateAction<Result[]>>;
}

function sortBy(value: string, list: Result[]) {
  return [
    ...list.sort((a, b) => {
      if (value === "price-low-high") {
        return a.offer.displayPrice.amount - b.offer.displayPrice.amount;
      }
      if (value === "price-high-low") {
        return b.offer.displayPrice.amount - a.offer.displayPrice.amount;
      }
      // assume both values are the same
      return 0;
    }),
  ];
}

export const SortNavigation = ({ list, onChange }: Props) => {
  return (
    <nav>
      <label htmlFor="price-sort" className="font-semibold">
        Sort by{" "}
      </label>
      <select
        id="price-sort"
        data-testid="price-sort"
        onChange={(event) => {
          onChange(sortBy(event.target.value, list));
        }}
      >
        <option value=""></option>
        <option value="price-high-low">Price high-low</option>
        <option value="price-low-high">Price low-high</option>
      </select>
    </nav>
  );
};
