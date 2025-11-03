import { useEffect, useState } from "react";
import { AppSidebar } from "./components/AppSidebar";
import Default from "./components/Default";
import ThemeToggle from "./components/ThemeToggle";
import { Separator } from "./components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const RouteMap = {
  default: Default,
  ecommerce: () => <div>eCommerce</div>,
  projects: () => <div>Projects</div>,
  courses: () => <div>Online Courses</div>,
};

function App() {
  const [pathname, setPathname] = useState(window.location.pathname); // in production app i would use react router dom

  useEffect(() => {
    if (!window.location.pathname.slice(1)) {
      window.history.replaceState(null, "", "/default");
    }
    setPathname(window.location.pathname);
  }, []);

  const currentPath = pathname.slice(1);
  const CurrentComp = RouteMap[currentPath] ?? Default;
  return (
    <SidebarProvider>
      <AppSidebar currentPath={pathname} />
      <div className="w-full flex flex-col">
        <div className="p-4 px-6 flex gap-5 items-center justify-between">
          <div className="flex gap-5 items-center">
            <SidebarTrigger size="icon-lg" />
            <div className="flex gap-3 text-sm font-semibold">
              <div className="text-muted-foreground">Dashboards</div>
              <div className="text-muted-foreground">/</div>
              <div className=" capitalize">{currentPath || "default"}</div>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <Separator />
        <div className="flex-1 p-5">
          <CurrentComp />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
