import Preloader from '@/Preloader'
import NavSidebar from '../NavSection'
import { SidebarTrigger } from '../ui/sidebar'
import { Card, CardContent } from '../ui/card'
import FunctionSidebar from '../FunctionSidebar'
import { getWD } from '@/lib/utils'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const MainLayout = () => {

    const wd = getWD();
    const navigate = useNavigate();

    useEffect(() => {
        if (!wd) navigate("/start");
    }, []);

    return (
        <>
            <Preloader />
            <NavSidebar />
            <main className="flex-1 relative p-7">
                <SidebarTrigger className="absolute left-2 top-2" />
                <Card className="h-full overflow-hidden">
                    <CardContent className="h-full">
                        <Outlet />
                    </CardContent>
                </Card>
            </main>
            <FunctionSidebar />
        </>
    )
}

export default MainLayout