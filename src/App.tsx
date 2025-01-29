import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Route, Routes, useLocation } from 'react-router'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Suspense, lazy } from 'react'
import { setConfig, setCurrentApp } from './store/slices/configSlice.ts'
import { useDispatch, useSelector } from 'react-redux'

import { AppSidebar } from "@/components/side-bar/app-sidebar.tsx"
import MenuBar from './components/menu-bar/menu-bar.tsx'
import { ModeToggle } from './components/theme/mode-toggle'
import { RootState } from './store/store.ts'
import { Separator } from "@/components/ui/separator"
import { ThemeProvider } from './components/theme/theme-provider'
import { setSidebarData } from './store/slices/sidebarSlice.ts'
import { useEffect } from 'react'

const NotFound = lazy(() => import('./components/not-found.tsx'))
const LoginApp = lazy(() => import('./apps/login/Login.tsx'))
const WorkflowApp = lazy(() => import('./apps/workflow/Workflow.tsx'))


async function loadConfig(configPath: string): Promise<Record<string, any>> {
  const response = await fetch(configPath)
  if (!response.ok) {
    throw new Error(`Failed to fetch config: ${response.statusText}`)
  }
  return response.json()
}

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const currentApp = useSelector((state: RootState) => state.config.currentApp)

  useEffect(() => {
    (async () => {
      const sidebarConfig = await loadConfig('/sidebar.conf.json')
      dispatch(setSidebarData(sidebarConfig))

      const appConfig = await loadConfig('/app.conf.json')
      dispatch(setConfig(appConfig))

      const name = location.pathname.substring(1)

      const currentApp = appConfig[name]

      dispatch(setCurrentApp({ name, version: currentApp.defaultVersion }))
    })()
  }, [dispatch])

  if (!currentApp) return <div>Loading...</div>


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <SidebarTrigger className="ml-4" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Applications
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentApp.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto mr-4">
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <MenuBar />
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <Suspense fallback={<div className="container">Loading...</div>}>
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  {/* <Route path="/about" element={<About />} /> */}
                  <Route path="/login" element={<LoginApp />} />
                  <Route path="/workflow" element={<WorkflowApp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>

    </ThemeProvider>
  )
}

export default App
