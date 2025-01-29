import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { ComponentProps } from "react"
import { NavMain } from "@/components/side-bar/nav-main"
import { NavUser } from "@/components/side-bar/nav-user"
import { RootState } from '@/store/store'
import { TeamSwitcher } from "@/components/side-bar/team-switcher"
import { useSelector } from 'react-redux'

// import data from '@/config/sidebar.conf.json';


export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const data = useSelector((state: RootState) => state.sidebar.data)

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
