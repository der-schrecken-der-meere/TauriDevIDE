import Preloader from '@/Preloader'
import NavSidebar from '../NavSection'
import { getWD } from '@/lib/utils'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { HorizontalNavigation } from '../Navigation'

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
            <main className="w-full flex flex-col">
                <HorizontalNavigation />
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout