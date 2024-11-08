import FunctionSidebar from "./components/FunctionSidebar";
import { ThemeProvider } from "./components/provider/themeProvider";
import { SidebarProvider } from "./components/ui/sidebar";
import Preloader from "./Preloader";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <Preloader/>
                <main className="w-full">
                </main>
                <FunctionSidebar />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
