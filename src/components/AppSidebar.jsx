import { BookOpen, ChartPie, FolderClosed, ShoppingBag } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Default",
    url: "/default",
    icon: ChartPie,
  },
  {
    title: "eCommerce",
    url: "/ecommerce",
    icon: ShoppingBag,
  },
  {
    title: "projects",
    url: "/projects",
    icon: FolderClosed,
  },
  {
    title: "Online Courses",
    url: "/courses",
    icon: BookOpen,
  },
];

export function AppSidebar({ currentPath = window.location.pathname }) {
  return (
    <Sidebar className="px-3 py-6 bg-sidebar">
      <SidebarHeader className="flex-row gap-4 items-end">
        <Avatar>
          <AvatarImage src="./src/assets/avatar.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>ByeWind</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground text-base font-normal">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.url === currentPath}
                  >
                    <a href={item.url} className="relative pl-3">
                      <item.icon />
                      <span>{item.title}</span>
                      {item.url === currentPath && (
                        <div className=" absolute left-0 h-4 w-1 bg-foreground rounded-2xl" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
