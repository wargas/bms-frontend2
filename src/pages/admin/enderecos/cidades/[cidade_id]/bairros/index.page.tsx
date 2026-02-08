import { LocationBar, LocationItem } from "@/components/location-bar";
import { Table } from "@/components/table";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { type ColDef, type SelectionChangedEvent } from 'ag-grid-community'
import { Button } from "@/components/ui/button";
import { modal } from "@/components/modal";
import { FormBairo } from "../../form-bairro";
import Api from "@/lib/api";
import { useState } from "react";

export function Component() {

    const [selected, setSelected] = useState<any>()
    const params = useParams()
    const navigate = useNavigate()

    const columns = [
        { field: 'id', width: 80 },
        { field: 'nome', flex: 1, editable: true, onCellValueChanged },
        { field: 'logradouros', valueFormatter: v => v.value?.length }
    ] satisfies ColDef[]

    const queryCidade = useQuery<any>({
        queryKey: [`/cidades/${params.cidade_id}`]
    })

    const queryBairros = useQuery<any[]>({
        queryKey: [`cidades/${params.cidade_id}/bairros`]
    })

    async function handleCadastrar() {
        const response = await modal(FormBairo, {
            title: 'Editar Bairro',
            data: queryCidade.data
        })

        if(response) {
            queryBairros.refetch()
        }
    }

    async function onCellValueChanged({ data }: any) {
        await Api.put(`bairros/${data.id}`, {
            nome: data.nome,
        })

        await queryBairros.refetch()
    }

    function selecionChangedHandle(event: SelectionChangedEvent<any, any>): void {
            setSelected(null)
    
            event.selectedNodes?.forEach(node => {
                setSelected(node.data)
            })
        }

    return (
        <div className="flex flex-col h-full">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/enderecos/cidades">Cidades</LocationItem>
                <LocationItem>{queryCidade.data?.nome ?? ''}</LocationItem>
                <LocationItem>Bairros</LocationItem>

            </LocationBar>

            <div className="flex justify-end mb-4 gap-2">
                <Button disabled={!selected} variant={'outline'} onClick={() => navigate(String(selected.id))}>Logradouros</Button>
                <Button variant={'outline'} onClick={handleCadastrar}>Cadastrar</Button>
            </div>

            <Table
                onSelectionChanged={selecionChangedHandle}
                onRowValueChanged={console.log}
                rowSelection={{
                    'mode': 'singleRow',
                    enableClickSelection: true,
                }} columnDefs={columns} rowData={queryBairros.data ?? []} />

        </div>
    )
}

