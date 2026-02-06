import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { type ColDef, type SelectionChangedEvent } from 'ag-grid-community';

import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatters, Table } from "@/components/table";
import { useNavigate } from "react-router";
import { LocationBar, LocationItem } from "@/components/location-bar";


export function Component() {

    const [selecteds, setSelecteds] = useState<any[]>([])
    const navigate = useNavigate()
    const [search, setSearch] = useState<{ nome: string, documento: string }>()

    const clientes = useQuery<any[]>({
        queryKey: [`clientes?nome=${search?.nome}&documento=${search?.documento}`]
    })

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs,] = useState<ColDef[]>([
        { field: "id", headerName: 'ID', maxWidth: 80 },
        { field: "documento", headerName: 'CPF/CNPJ', valueFormatter: formatters.cpf },
        { field: "nome", headerName: 'NOME', flex: 2 },
        { field: "nascimento", headerName: 'NASCIMENTO', valueFormatter: formatters.date },
        { field: "contratos_count", headerName: 'Contratos' },
    ]);

    const onSelectionChanged = useCallback((ev: SelectionChangedEvent) => {
        setSelecteds(ev.selectedNodes?.map(n => n.data) || [])
    }, [])

    function action(data: FormData) {
        setSearch({
            nome: data.get('nome')?.toString() ?? '',
            documento: data.get('documento')?.toString() ?? ''
        })
    }


    return (
        <div className="flex flex-col h-full">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/clientes">Clientes</LocationItem>
                <LocationItem>Buscar</LocationItem>
            </LocationBar>
            <form action={action} className="grid-cols-6 grid gap-4">
                <Field className="col-span-1">
                    <FieldLabel>CPF/CNPJ</FieldLabel>
                    <Input defaultValue={search?.documento ?? ''} name="documento" />
                </Field>

                <Field className="col-span-4">
                    <FieldLabel>Nome</FieldLabel>
                    <Input defaultValue={search?.nome ?? ''} name="nome" />
                </Field>
                <Field className="col-span-1">
                    <FieldLabel>&nbsp;</FieldLabel>
                    <Button variant={'outline'}>Filtrar</Button>
                </Field>
                <div className="col-span-6 flex pt-4 border-t gap-2 justify-end">

                    <Button variant={'outline'}>Cadastrar</Button>
                    <Button onClick={() => navigate(`/clientes/${selecteds[0]?.id}`)} disabled={selecteds.length != 1} variant={'outline'}>Detalhar</Button>
                    <Button disabled={selecteds.length != 1} variant={'outline'}>Editar</Button>
                </div>
            </form>

            <div className="mt-4 flex-1">
                <Table

                    loading={clientes.isLoading} onSelectionChanged={onSelectionChanged}
                    rowSelection={{ mode: 'multiRow', enableClickSelection: true }}
                    rowData={clientes.data || []} columnDefs={colDefs} />
            </div>

        </div>
    )
}