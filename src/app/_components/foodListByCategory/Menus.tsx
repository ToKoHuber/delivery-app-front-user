import { Categories } from "./Categories";
import { MenubyCategories } from "./Menu";

export function Menus({ categories, foods }) {
  return (
    <div className="w-[1440px]">
      <Categories categories={categories} />
      <MenubyCategories categories={categories} foods={foods} />
    </div>
  );
}
