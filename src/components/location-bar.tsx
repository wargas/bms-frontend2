import type { ComponentProps } from "react";
import React, { useEffect } from "react";
import { useApp } from "./app-provider";

export function LocationBar({ children }: ComponentProps<"div">) {
    const app = useApp()

    useEffect(() => {
        const items:any[] = []
        React.Children.map(children, (child) => {
            if(React.isValidElement(child)) {
                items.push({
                    label: (child.props as any)?.children,
                    url: (child.props as any)?.url
                })
            }
        })

       
        
        app.setBreadcrumb(items)
    }, [children])

    return <></>
}

export function LocationItem({  }: { url?: string} & ComponentProps<"div">) {
    return <></>
}