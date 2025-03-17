import { ProductCard } from "./ProductCard";

export function MenubyCategories({ categories, foods }) {
  //   console.log("printing cat data", categories);
  return (
    <div className="mt-[54px]">
      {categories.map((category) => {
        return (
          <div className="flex flex-col gap-[54px] mb-[54px]">
            <h2 className="text-[#FFF] text-[30px] font-semibold leading-9">
              {category.categoryName}
            </h2>
            <div className="flex gap-9">
              {foods
                .filter(
                  (food) => food.category.categoryName === category.categoryName
                )
                .map((food) => (
                  <ProductCard key={food._id} food={food} />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
