export interface SidebarItem {
  title: string;
  route: string;
  icon?: string;
  children?: SidebarItem[]
}
