import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarProvider, SidebarTrigger, } from "@/components/ui/sidebar";
import menuItems from "@/config/menu";
import { ItemMenu } from "@/components/menu-item";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { NavUser } from "@/components/nav-user";
import { Combobox, ComboboxInput } from "@/components/ui/combobox";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import Api from "@/lib/api";
import { useLocalStorage } from "usehooks-ts";


export function Component() {

    const { theme, setTheme } = useTheme()
    const [user, setUser] = useState<any>(null)
    const { pathname } = useLocation()
    const [token] = useLocalStorage('auth_token', '')
    const navigation = useNavigate()

    async function loadUser() {
        const { data } = await Api.get('me')

        if ('email' in data) {
            setUser(data)

            return;
        }

        navigation('/login')
    }

    useEffect(() => {
        if (!token) {
            navigation('/login')
        }

        if(!user) {
            loadUser()
        }
    }, [pathname])

    if(!user) {
        return <div>carregando...</div>
    }

    return <SidebarProvider>
        <Sidebar>
            <SidebarHeader className="border-b h-14 flex items-center justify-center">
                <span className="font-extrabold text-green-600 text-2xl">BITMAX</span>
            </SidebarHeader>
            <SidebarContent className="gap-0">
                <SidebarGroup>
                    <SidebarGroupLabel>
                        MENU
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <ItemMenu key={item.link + item.label} menu={item} nivel={0} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
        <main className="flex flex-col w-full h-screen overflow-hidden relative pt-14">
            <header className="border-b h-14 flex items-center px-4 gap-4 absolute top-0 left-0 right-0">
                <SidebarTrigger />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to={'/dashboard'}>Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link to={'/clientes'}>Clientes</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>Cadastro</BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="ml-auto"></div>
                <Combobox items={[]}>
                    <ComboboxInput placeholder="Código ou nome do cliente" />
                </Combobox>
                <Button variant={'ghost'} onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
                    {theme == 'dark' && <MoonIcon />}
                    {theme == 'light' && <SunIcon />}
                </Button>
            </header>
            <div className="p-4 absolute top-14 left-0 right-0 bottom-0 overflow-y-auto">

                <Outlet />
            </div>
        </main>
    </SidebarProvider>;
}

export function ErrorBoundary(props: any) {
    return <div>Ocorreu um erro
        {JSON.stringify(props)}
    </div>
}
