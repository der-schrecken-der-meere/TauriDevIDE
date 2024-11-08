import FunctionSidebar from "./components/FunctionSidebar";
import { ThemeProvider } from "./components/provider/themeProvider";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <main className="w-full">
                </main>
                <FunctionSidebar />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
