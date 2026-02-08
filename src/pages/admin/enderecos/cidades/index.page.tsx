import { LocationBar, LocationItem } from "@/components/location-bar";
import { modal } from "@/components/modal";
import { Table } from "@/components/table";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { FormCidade } from "./form-cidade";
import Api from "@/lib/api";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import type { ColDef, SelectionChangedEvent } from "ag-grid-community";


export function Component() {
    const [selected, setSelected] = useState<any>()
    const navigate = useNavigate()
    const refTable = useRef(null)

    const columns = [
        { field: 'id', width: 60 },
        { field: 'uf', width: 60, editable: true, },
        { field: 'nome', flex: 1, editable: true, onCellValueChanged: onChangeCell },
        { field: 'codigo_ibge', editable: true, headerName: 'IBGE', onCellValueChanged: onChangeCell },
        { field: 'bairros', valueFormatter: (v: any) => JSON.stringify(v.value?.length) }
    ] satisfies ColDef[]

    const query = useQuery<any[]>({
        queryKey: ['/cidades']
    })

    async function onHandleOpenForm() {
        const response = await modal(FormCidade, {
            data: {},
            title: 'Editar Cidade'
        })

        console.log(response)

        if (response) {
            await query.refetch()
        }
    }

    async function onChangeCell({ data }: any) {
        await Api.put(`cidades/${data.id}`, {
            uf: data.uf,
            nome: data.nome,
            codigo_ibge: data.codigo_ibge
        })

        await query.refetch()
    }



    function selecionChangedHandle(event: SelectionChangedEvent<any, any>): void {
        setSelected(null)

        event.selectedNodes?.forEach(node => {
            setSelected(node.data)
        })
    }

    return (
        <div className="flex flex-col h-full gap-4">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem>Cidades</LocationItem>

            </LocationBar>
            <div className="flex justify-end gap-2">
                <Button disabled={!selected} variant={'destructive'}>Excluir</Button>
                <Button
                    disabled={!selected} onClick={() => navigate(`/enderecos/cidades/${selected.id}/bairros`)}
                    variant={'outline'}>Bairros</Button>
                <Button onClick={onHandleOpenForm} variant={'outline'}>Cadastrar</Button>
            </div>
            <div className="h-full flex-1 w-full">
                <Table
                    onSelectionChanged={selecionChangedHandle}
                    ref={refTable}
                    rowSelection={{
                        'mode': 'singleRow',
                        enableClickSelection: true
                    }}
                    loading={query.isFetching || query.isLoading}
                    columnDefs={columns}
                    rowData={query?.data || []} />
            </div>
        </div>
    )
}

