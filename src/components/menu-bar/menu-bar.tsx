import { AddBox } from "./add-box"
import { AddNode } from "./add-node"
import { Button } from "../ui/button"
import { RootState } from "@/store/store"
import { SearchForm } from "./search-form"
import { VersionSwitcher } from "@/components/menu-bar/version-switcher"
import { useSelector } from "react-redux"

export default function MenuBar() {
  const currentApp = useSelector((state: RootState) => state.config.currentApp)
  const config = useSelector((state: RootState) => state.config.config)

  if (!config || !currentApp) return null

  const appConfig = config[currentApp.name]
  if (!appConfig) return null

  const menuItems = appConfig.menuItems

  const componentsMap: Record<string, React.ElementType> = {
    "version-switcher": VersionSwitcher,
    "add-box": AddBox,
    "add-node": AddNode,
    "search-form": SearchForm,
  }

  return (
    <div className="py-2 container mx-auto">
      <div className="grid items-center auto-rows-min gap-x-16 gap-y-4 md:grid-cols-3">
        {menuItems.map((item) => {
          const Component = componentsMap[item]
          return Component ? <Component key={item} /> : null
        })}
      </div>

    </div>
  )
}