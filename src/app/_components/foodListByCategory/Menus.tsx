import { Categories } from "./Categories";
import { MenubyCategories } from "./Menu";

export function Menus({ categories, foods }) {
  return (
    <div className="w-[1264px] mt-8">
      <Categories categories={categories} />
      <MenubyCategories categories={categories} foods={foods} />
    </div>
  );
}
