import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/provider/themeProvider";
import { SidebarProvider } from "./components/ui/sidebar";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const Start = lazy(() => import("./pages/Start"));
const TauriConfJson = lazy(() => import("./pages/TauriConfJson"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "start",
                element: (
                    <Suspense fallback={<div>Loading</div>}>
                        <Start className="w-full h-full flex flex-col items-center justify-center" />
                    </Suspense>
                ),
            },
            {
                path: "tauri_conf_json",
                element: (
                    <Suspense fallback={<div>Loading</div>}>
                        <TauriConfJson />
                    </Suspense>
                ),
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
