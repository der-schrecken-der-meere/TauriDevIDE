import { FunctionComponent, HTMLAttributes, ReactElement, ReactNode, useCallback } from "react"
import { Button } from "./ui/button"
import { FilePlus, Folder } from "lucide-react"

const StartDialog = (props: HTMLAttributes<HTMLDivElement>) => {

    const onCreateClick = useCallback(() => {

    }, []);

    return (
        <div {...props}>
            <div className="text-xl font-medium">Welcome. Select your option.</div>
            <div className="flex items-stretch gap-4 mt-8 flex-wrap justify-center">
               <StartDialogOption
                    Icon={Folder}
                    buttonText="Open Folder"
                    title="Create new Project"
                    description="Creates a new project from scratch and guides you through the setup."
                    onClick={onCreateClick}
               />
               <StartDialogOption
                    Icon={Folder}
                    buttonText="Open Folder"
                    title="Open existing Project"
                    description="Opens the selected folder and checks if all necessary files exists."
               />
               <StartDialogOption
                    Icon={FilePlus}
                    buttonText="Create File"
                    title="Create tauri.conf.json"
                    description="Opens the selected folder and checks if all necessary files exists."
               />
            </div>
        </div>
    )
}

const StartDialogOption = ({
    title,
    description,
    onClick,
    Icon,
    buttonText,
}: {
    title?: ReactNode,
    description?: ReactNode,
    Icon: FunctionComponent,
    buttonText?: ReactNode,
    onClick?: () => void,
}) => {
    return (
        <div className="border rounded-md flex flex-col items-center py-4 px-4 gap-2 max-w-60">
            <span>{title}</span>
            <Button onClick={onClick} variant="ghost" size="sm">
                <Icon/>
                {buttonText}
            </Button>
            <div className="text-muted-foreground text-sm">{description}</div>
        </div>
    );
}

export default StartDialog