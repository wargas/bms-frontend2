import type { ComponentProps } from "react";
import React, { useContext, useState } from "react";

type Breadcrumb = { label: string, url?: string }
type Props = {
    breadcrumb: Breadcrumb[],
    setBreadcrumb: (data: Breadcrumb[]) => void
}

export const AppContext = React.createContext<Props>({  } as Props)

export const AppProvider = ({ children }: ComponentProps<"div">) => {
    const [breadcrumb, setBreadcrumb] = useState<Breadcrumb[]>([])

    return <AppContext.Provider value={{ breadcrumb, setBreadcrumb }}>{children}</AppContext.Provider>
}

export function useApp() {
    const context = useContext(AppContext);

    return context
}