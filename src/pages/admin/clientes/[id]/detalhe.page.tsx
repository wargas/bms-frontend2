import { LocationBar, LocationItem } from "@/components/location-bar"
import { Table } from "@/components/table"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

export function Component() {
    const { id } = useParams()

    const { data } = useQuery<any>({
        queryKey: [`clientes/${id}`]
    })

    return (
        <div className="flex flex-col">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/clientes/buscar">Clientes</LocationItem>
                <LocationItem>{data?.nome ?? id}</LocationItem>
            </LocationBar>
            
            <div className="grid grid-cols-12">
                <Field className="col-span-6">
                    <FieldLabel>Nome</FieldLabel>
                    <span>{data?.nome}</span>
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>Nascimento</FieldLabel>
                    <span>{data?.nascimento}</span>
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>CPF</FieldLabel>
                    <span>{data?.documento}</span>
                </Field>

            </div>
            <Item variant={'outline'} className="mt-6 mb-1">
                <ItemContent>
                    <ItemTitle>Contratos</ItemTitle>
                    <ItemDescription>Lista os contratos do cliente</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant={'outline'}>Cadastrar</Button>
                </ItemActions>
            </Item>
            <div className="h-50 w-full">
                <Table
                    onRowDoubleClicked={console.log}
                    rowSelection={{mode: 'singleRow', enableClickSelection: true}}
                    columnDefs={[
                        { field: 'codigo'}, {
                            field: 'endereco_instalacao', 
                            headerName: 'Endereço Instalação',
                            flex: 1,
                            valueFormatter: 
                            prop => `${prop.value.logradouro}, ${prop.value.bairro}, ${prop.value.cidade}`}
                    ]}
                    rowData={data?.contratos || []} />
            </div>
        </div>
    )
}

