import { VersionSwitcher } from "@/components/menu-bar/version-switcher";
import { SearchForm } from "./search-form";
import { AddBox } from "./add-box";


export default function MenuBar() {
  return (
    <div className="py-2 container mx-auto">
      <div className="grid items-center auto-rows-min gap-x-16 gap-y-4 md:grid-cols-3">
        <VersionSwitcher />
        <AddBox />
        <SearchForm className="" />
      </div>

    </div>
  )
}