import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { useMemo } from "react";
import { useTheme } from "./theme-provider";
import { themeQuartz } from 'ag-grid-community';

type Props = {} & AgGridReactProps

export function Table(props: Props) {

    const { theme } = useTheme()

    const aGtheme = useMemo(() => themeQuartz
        .withParams({
            accentColor: "#20A527",
            backgroundColor: theme == 'dark' ? "#000" : '#FFF',
            foregroundColor: theme == 'dark' ? "#FFF" : '#000',
            browserColorScheme: theme,
            fontFamily: {
                googleFont: "Geist Variable"
            },
            headerFontSize: 14,

        }), [theme])

    return <AgGridReact 
        domLayout="normal"  
        theme={aGtheme} {...props}  />
}

export const formatters = {
    date: (p:any) => String(p.value).split('-').reverse().join('/'),
    cpf: (p:any) => String(p.value).replace(/\D/g, "").padStart(11, '0').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}