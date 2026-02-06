import { InputDate } from "@/components/input-date";
import { LocationBar, LocationItem } from "@/components/location-bar";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Api from "@/lib/api";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

type FormData = {
    rg: string,
    pessoa: '1' | '2',
    nascimento: string,
    apelido: string,
    documento: string,
    nome: string
}

export function Component() {
    const { id } = useParams()

    const { register, formState, watch, handleSubmit, setValue } = useForm<FormData>({
        defaultValues: {
            pessoa: '1',
            nome: '',
            apelido: '',
            documento: '',
            rg: '',
            nascimento: '',
        }
    })

    async function onSubmit(values: FormData) {
        await Api.request({
            method: id ? 'PUT' : 'POST',
            data: {
                ...values,
                documento: values.documento.replace(/\D/g, ''),
                nascimento: values.nascimento.split('/').reverse().join('-')
            },
            url: id ? `/clientes/${id}` : `/clientes`
        })

        console.log(values.nascimento)
    }

    const pessoa = watch('pessoa')


    return (
        <div>
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/clientes">Clientes</LocationItem>
                <LocationItem>Cadastrar</LocationItem>
            </LocationBar>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
                <Field className="col-span-2">
                    <FieldLabel>Tipo</FieldLabel>
                    <ToggleGroup defaultValue={pessoa} variant={'outline'} type="single">
                        <ToggleGroupItem onClick={() => setValue('pessoa', '1')} className="flex-1" value="1">Física</ToggleGroupItem>
                        <ToggleGroupItem onClick={() => setValue('pessoa', '2')} className="flex-1" value="2">Jurídica</ToggleGroupItem>
                    </ToggleGroup >
                </Field>
                <input {...register('pessoa')} type="hidden" />

                <Field className="col-span-10">
                    <FieldLabel>{pessoa == '1' ? 'Nome' : 'Razão Social'}</FieldLabel>
                    <Input {...register('nome')} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{pessoa == '1' ? 'Apelido' : 'Fantasia'}</FieldLabel>
                    <Input {...register('apelido')} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{pessoa == '1' ? 'CPF' : 'CNPJ'}</FieldLabel>
                    <Input {...register('documento')} mask={pessoa == '1' ? '999.999.999-99' : '99.999.999/9999-99'} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{pessoa == '1' ? 'RG' : 'IE'}</FieldLabel>
                    <Input {...register('rg')} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>Data Nascimento</FieldLabel>
                    <InputDate {...register('nascimento')} />
                </Field>
                <div className="col-span-12 pt-4 flex justify-end">
                    <Button type="submit">
                        {formState.isSubmitting && <Spinner />}
                        Salvar Cliente
                    </Button>
                </div>
            </form>
        </div>
    )
} 