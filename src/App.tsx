import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/provider/themeProvider";
import { SidebarProvider } from "./components/ui/sidebar";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { NavigationProvider } from "./components/provider/navigationProvider";

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
], {
    future: {
        v7_partialHydration: true,
        v7_normalizeFormMethod: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_skipActionErrorRevalidation: true,
    }
})

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <NavigationProvider>
                    <RouterProvider router={router} future={{ v7_startTransition: true }} />
                </NavigationProvider>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
