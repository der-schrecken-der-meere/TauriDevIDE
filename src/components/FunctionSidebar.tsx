import { ModeToggle } from './ModeToggle'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from './ui/sidebar'

const FunctionSidebar = () => {
    return (
        <Sidebar side="right" collapsible="none" variant="sidebar" data-variant="sidebar" data-side="right" className='h-svh hidden sm:block'>
            <SidebarHeader className='flex-row'>
                <ModeToggle className='ml-auto' variant="ghost" />
            </SidebarHeader>
            <SidebarContent>

            </SidebarContent>
            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}

export default FunctionSidebar