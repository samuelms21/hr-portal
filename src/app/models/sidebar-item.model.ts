export interface SidebarItem {
  title: string;
  route: string;
  icon?: string;
  show?: boolean;
  children?: SidebarItem[]
}
