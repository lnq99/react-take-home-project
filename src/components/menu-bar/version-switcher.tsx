import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { setCurrentApp } from '@/store/slices/configSlice';

import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function VersionSwitcher() {
  const dispatch = useDispatch();
  const currentApp = useSelector((state: RootState) => state.config.currentApp);
  const config = useSelector((state: RootState) => state.config.config);

  if (!config || !currentApp) return null;

  const appConfig = config[currentApp.name];
  if (!appConfig) return null;

  const versions = Object.keys(appConfig.versions);
  // const defaultVersion = appConfig.defaultVersion;

  const handleVersionChange = (version: string) => {
    dispatch(setCurrentApp({ name: currentApp.name, version }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Version</span>
            <span className="">{currentApp.version}</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width]"
        align="start"
      >
        {versions.map((version) => (
          <DropdownMenuItem
            key={version}
            onSelect={() => {
              handleVersionChange(version)
              // setSelectedVersion(version)
            }}
          >
            {version}
            {version === currentApp.version && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
