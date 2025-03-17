import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function Categories({ categories }) {
  return (
    <div className="flex flex-col gap-9">
      <div className="text-[#FFF] text-[30px] font-semibold leading-9">
        Categories
      </div>
      <ToggleGroup type="single" className="flex gap-2">
        {categories.map((category) => {
          return (
            <ToggleGroupItem
              value={category.categoryName}
              key={categories.categoryName}
              className="text-[#18181B] text-[18px] font-normal leading-7 bg-[#FFFFFF] py-[4px] px-[20px] rounded-full data-[state=on]:text-[#FAFAFA] data-[state=on]:bg-[#EF4444]"
            >
              {category.categoryName}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </div>
  );
}

{
  /* <ToggleGroup type="single">
  <ToggleGroupItem value={category.categoryName}>
    {" "}
    {category.categoryName}
  </ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>; */
}
