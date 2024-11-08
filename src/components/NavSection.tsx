import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from './ui/sidebar'

const NavSidebar = () => {
    return (
        <Sidebar side="left" collapsible="icon" variant="sidebar">
            <SidebarHeader className='flex-row'>
            </SidebarHeader>
            <SidebarContent>

            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}

export default NavSidebar