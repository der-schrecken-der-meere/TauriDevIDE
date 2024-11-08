import FunctionSidebar from "./components/FunctionSidebar";
import NavSidebar from "./components/NavSection";
import { ThemeProvider } from "./components/provider/themeProvider";
import { Card, CardContent } from "./components/ui/card";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import WebView from "./components/WebView";
import Preloader from "./Preloader";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <Preloader/>
                <NavSidebar />
                <main className="flex-1 relative p-7">
                    <SidebarTrigger className="absolute left-2 top-2"/>
                    <Card className="h-full overflow-hidden">
                        <CardContent className="h-full">
                            <WebView className="h-full w-full"/>
                        </CardContent>
                    </Card>
                </main>
                <FunctionSidebar />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
