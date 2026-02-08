import { LocationBar, LocationItem } from "@/components/location-bar";
import { Table } from "@/components/table";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { type ColDef } from 'ag-grid-community'
import { modal } from "@/components/modal";
import { FormLogradouro } from "../../../form-logradouro";
import { Button } from "@/components/ui/button";
import Api from "@/lib/api";


export function Component() {
    const params = useParams()

    const columns:ColDef[] = [
        {field: 'id', width: 80},
        {field: 'nome', flex: 1, editable: true, onCellValueChanged},
        {field: 'cep', editable: true, onCellValueChanged},
        {field: 'instalacoes_count', type: 'number', headerName: 'Instalações'}
    ]

    const queryCidade = useQuery<any>({
        queryKey: [`/cidades/${params.cidade_id}`]
    })

    const queryBairro = useQuery<any>({
        queryKey: [`cidades/${params.cidade_id}/bairros/${params.bairro_id}`]
    })

    const queryLogradouro = useQuery<any[]>({
        queryKey: [`cidades/${params.cidade_id}/bairros/${params.bairro_id}/logradouros`]
    })

    async function onCellValueChanged({ data }: any) {
        await Api.put(`logradouros/${data.id}`, {
            nome: data.nome,
            cep: data.cep
        })

        await queryLogradouro.refetch()
    }

    async function handleCadastrar() {
        const response = await modal(FormLogradouro, {
            title: 'Editar Logradouro',
            data: {
                ...queryBairro.data,
                uf: queryCidade?.data?.uf ?? '',
                cidade: queryCidade?.data?.nome ?? '',
            }
        })

        if(response) {
            queryLogradouro.refetch()
        }
    }
    return (
        <div className="flex flex-col h-full ">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/enderecos/cidades">Cidades</LocationItem>
                <LocationItem url={`/enderecos/cidades/${params.cidade_id}/bairros`}>{queryCidade.data?.nome ?? ''}</LocationItem>
                <LocationItem>{queryBairro?.data?.nome || ''}</LocationItem>

            </LocationBar>
            <div className="flex mb-4 justify-end">
                <Button variant={'outline'} onClick={handleCadastrar}>Cadastrar</Button>
            </div>
            <Table columnDefs={columns} rowData={queryLogradouro?.data || []} />
        </div>
    )
}

