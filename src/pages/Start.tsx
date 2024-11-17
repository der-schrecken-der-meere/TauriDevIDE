import { FunctionComponent, HTMLAttributes, ReactNode } from "react"
import { Button } from "@/components/ui/button";
import { FilePlus, Folder } from "lucide-react"
import { NavLink } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/use-navigation";

const Start = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {

    useNavigation({
        filename: "Welcome",
    });

    return (
        <div className="p-6 h-full">
            <Card className={cn("h-full overflow-hidden", className)} {...props}>
                <CardContent className="h-full pt-6">
                    <div className="text-xl font-medium text-center"><span>Welcome.</span><br/><span>Select your option.</span></div>
                    <div className="flex items-stretch gap-4 mt-8 flex-wrap justify-center">
                    <StartDialogOption
                            Icon={Folder}
                            buttonText="Open Folder"
                            title="Create new Project"
                            description="Creates a new project from scratch and guides you through the setup."
                            href="/"
                    />
                    <StartDialogOption
                            Icon={Folder}
                            buttonText="Open Folder"
                            title="Open existing Project"
                            description="Opens the selected folder and checks if all necessary files exists."
                            href="/"
                    />
                    <StartDialogOption
                            Icon={FilePlus}
                            buttonText="Create File"
                            title="Create tauri.conf.json"
                            description="Create and edit tauri.conf.json."
                            href="/tauri_conf_json"
                    />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const StartDialogOption = ({
    title,
    description,
    Icon,
    buttonText,
    href,
}: {
    title?: ReactNode,
    description?: ReactNode,
    Icon: FunctionComponent,
    buttonText?: ReactNode,
    href: string,
}) => {
    return (
        <div className="border rounded-md flex flex-col items-center py-4 px-4 gap-2 max-w-60">
            <span>{title}</span>
            <Button asChild variant="outline">
                <NavLink to={href}>
                    <Icon/>
                    {buttonText}
                </NavLink>
            </Button>
            <div className="text-muted-foreground text-sm">{description}</div>
        </div>
    );
}

export default Start;