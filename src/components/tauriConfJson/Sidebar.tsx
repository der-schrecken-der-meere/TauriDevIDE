import { ReactNode, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { buttonVariants } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CollapsibleProps } from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

type AttributeProps = {
    name: ReactNode
    value: ReactNode
}

const Group = ({
    children,
    className,
    attributes = [],
    attributeNameWidth = 100,
    ...props
}: CollapsibleProps & { attributes?: AttributeProps[], attributeNameWidth?: number }) => {
    const [open, setOpen] = useState(false);

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className={cn("w-full rounded-sm border-2", className)}
            {...PushSubscriptionOptions}
            {...props}
        >
            <table className="w-full border-separate border-spacing-0">
                <thead className="[&_th]:muted">
                    <tr>
                        <th className="sr-only">Icons</th>
                        <th className="sr-only">Attribute name</th>
                        <th className="sr-only">Attribute value</th>
                    </tr>
                    <CollapsibleTrigger asChild>
                        <tr className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "cursor-pointer table-row [&_th]:border-inherit")}>
                            <th className="px-2 w-8">
                                {open
                                    ? <ChevronUp className="w-4 h-4" />
                                    : <ChevronDown className="w-4 h-4" />
                                }
                            </th>
                            <th colSpan={2} className="text-start">{children}</th>
                        </tr>
                    </CollapsibleTrigger>
                </thead>
                <CollapsibleContent asChild>
                    <tbody
                        className="bg-muted [&_td]:border-background [&_td]:border-t-[1px] [&_tr:last-child_td]:border-b-[1px] [&_tr_td:nth-child(2)]:w-[var(--attr-name-w)] [&_td]:py-1 [&_td]:text-sm"
                        style={{
                            "--attr-name-w": `${attributeNameWidth}px`
                        } as React.CSSProperties}
                    >
                        {attributes.map((attr) => (
                            <Attribute name={attr.name} value={attr.value} />
                        ))}
                    </tbody>
                </CollapsibleContent>
            </table>
        </Collapsible>
    );
};

const Attribute = ({
    name,
    value,
}: AttributeProps) => {
    return (
        <tr>
            <td className="border-l-[1px]"></td>
            <td className="border-r-[0px]">{name}</td>
            <td className="border-r-[1px] border-l-[1px] px-4">{value}</td>
        </tr>
    )
}

export { Group, Attribute };