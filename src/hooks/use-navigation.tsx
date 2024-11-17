import { NavigationProviderContext } from "@/components/provider/navigationProvider"
import { useContext, useEffect } from "react";

type useNavigationProps = {
    filename?: string
}

const useNavigation = ({
    filename,
}: useNavigationProps) => {
    const context = useContext(NavigationProviderContext);

    if (context === undefined)
        throw new Error("useNavigation must be used within a NavigationProvider");

    useEffect(() => {
        if (filename) context.setCurrentFile(filename);
    }, []);

    return context;
}

export { useNavigation };