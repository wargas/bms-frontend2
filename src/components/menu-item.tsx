import { CaretRightIcon } from "@phosphor-icons/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "./ui/sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { type MenuItemProps } from "@/config/menu";
import { Link } from "react-router";

export function ItemMenu({ menu: { label, link, icon: Icon, children }, nivel }: { menu: MenuItemProps, nivel: number }) {
    const [opened, setOpened] = useState(false)
    const MenuItem = nivel == 0 ? SidebarMenuItem : SidebarMenuSubItem;
    const MenuButton = nivel == 0 ? SidebarMenuButton : SidebarMenuSubButton;

    const hasSub = children && children?.length > 0

    if (!hasSub) return (
        <MenuItem>
            <MenuButton asChild>
                <Link to={link!}>
                    {Icon && <Icon />}
                    <span className="flex-1">{label}</span>
                </Link>
            </MenuButton>
        </MenuItem>
    )

    return <Collapsible open={opened} onOpenChange={setOpened} key={link + label} className="group/collapsible" asChild>
        <MenuItem>
            <CollapsibleTrigger asChild>
                <MenuButton>
                    {Icon && <Icon />}
                    <span className="flex-1">{label}</span>
                    {hasSub && (
                        <CaretRightIcon className={cn("ml-auto transition-transform duration-90", { 'rotate-450': opened })} />
                    )}
                </MenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenuSub className={cn('transition-all',{ 'h-0 overflow-hidden': !opened,  })}>
                    {children?.map((sub) => (
                        <ItemMenu key={sub.label + sub.link} menu={sub} nivel={nivel + 1} />
                    ))}
                </SidebarMenuSub>
            </CollapsibleContent>

        </MenuItem>
    </Collapsible>
}