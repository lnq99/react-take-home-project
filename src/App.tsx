import { ThemeProvider } from './components/theme/theme-provider'
import { ModeToggle } from './components/theme/mode-toggle'

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import { AppSidebar } from "@/components/side-bar/app-sidebar.tsx"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import MenuBar from './components/menu-bar/menu-bar.tsx';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarData } from './store/slices/sidebarSlice.ts';
import { RootState } from './store/store.ts';
import { setConfig, setCurrentApp } from './store/slices/configSlice.ts';


const NotFound = lazy(() => import('./components/not-found.tsx'));
const LoginV1 = lazy(() => import('./apps/login/v1/Login.tsx'));
const LoginV2 = lazy(() => import('./apps/login/v2/Login.tsx'));


async function loadConfig(configPath: string): Promise<Record<string, any>> {
  const response = await fetch(configPath);
  if (!response.ok) {
    throw new Error(`Failed to fetch config: ${response.statusText}`);
  }
  return response.json();
}

function App() {
  const dispatch = useDispatch();
  const currentApp = useSelector((state: RootState) => state.config.currentApp);

  useEffect(() => {
    (async () => {
      const sidebarConfig = await loadConfig('/sidebar.conf.json');
      dispatch(setSidebarData(sidebarConfig));

      const appConfig = await loadConfig('/app.conf.json');
      dispatch(setConfig(appConfig));

      dispatch(setCurrentApp({ name: 'login', version: 'v1' }));
    })();
  }, [dispatch]);

  if (!currentApp) return <div>Loading...</div>;


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
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2"> */}
            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
            {/* </div> */}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <Suspense fallback={<div className="container">Loading...</div>}>
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  {/* <Route path="/about" element={<About />} /> */}
                  {/* <Route path="/products" element={<Products />} /> */}
                  {/* <Route path="/products/:slug" element={<ProductDetails />} /> */}
                  <Route path="/login" element={currentApp.version === 'v1' ? <LoginV1 /> : <LoginV2 />} />
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
