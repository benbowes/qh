export const SortNavigation = () => (
  <nav>
    <label htmlFor="price-sort" className="font-semibold">
      Sort by{" "}
    </label>
    <select id="price-sort">
      <option value="price-high-low">Price high-low</option>
      <option value="price-low-high">Price low-high</option>
    </select>
  </nav>
);
