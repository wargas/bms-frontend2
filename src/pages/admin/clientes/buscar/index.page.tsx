import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AgGridReact, } from 'ag-grid-react';
import { themeQuartz } from 'ag-grid-community';

import { useMemo, useState } from "react";
import { useTheme } from "@/components/theme-provider";


export function Component() {

    const { theme } = useTheme()

    const [rowData, ] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, ] = useState<any>([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

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

    return (
        <div className="flex flex-col h-full">
            <form action="" className="grid-cols-6 grid gap-4">
                <Field className="col-span-1">
                    <FieldLabel>CPF/CNPJ</FieldLabel>
                    <Input />
                </Field>

                <Field className="col-span-4">
                    <FieldLabel>Nome</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-1">
                    <FieldLabel>&nbsp;</FieldLabel>
                    <Button variant={'outline'}>Filtrar</Button>
                </Field>
                <div className="col-span-6 flex pt-4 border-t gap-2 justify-end">
                    <Button variant={'outline'}>Detalhar</Button>
                    <Button disabled variant={'outline'}>Editar</Button>
                </div>
            </form>

            <div className="mt-4 flex-1">
                
                <AgGridReact domLayout="normal" theme={aGtheme} rowSelection={{ mode: 'multiRow' }} rowData={rowData} columnDefs={colDefs} />
            </div>

        </div>
    )
}