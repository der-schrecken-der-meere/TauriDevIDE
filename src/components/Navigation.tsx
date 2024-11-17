import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { useNavigation } from "@/hooks/use-navigation";

const HorizontalNavigation = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {

    const { currentFile } = useNavigation({});

    return (
        <div className={cn("flex items-center border-b py-1 px-2 gap-2", className)} {...props}>
            <SidebarTrigger />
            <span className="text-muted-foreground">{currentFile}</span>
        </div>
    )
}

export { HorizontalNavigation };