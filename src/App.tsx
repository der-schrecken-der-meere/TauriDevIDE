import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/provider/themeProvider";
import StartDialog from "./components/StartDialog";
import { SidebarProvider } from "./components/ui/sidebar";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "start",
                element: <StartDialog className="w-full h-full flex flex-col items-center justify-center" />
            }
        ]
    }
])

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <RouterProvider router={router} />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
