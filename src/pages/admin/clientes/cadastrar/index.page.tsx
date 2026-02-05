import { InputDate } from "@/components/input-date";
import { LocationBar, LocationItem } from "@/components/location-bar";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm } from "react-hook-form";

export function Component() {
    const { register, watch, handleSubmit, setValue } = useForm<{
        rg: string,
        tipo: 'f' | 'j',
        nascimento: string
    }>({
        defaultValues: {
            tipo: 'f',
        }
    })

    function onSubmit(data: { tipo: string }) {
        console.log(data)
    }

    const tipo = watch('tipo')

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
                    <ToggleGroup defaultValue={tipo} variant={'outline'} type="single">
                        <ToggleGroupItem onClick={() => setValue('tipo', 'f')} className="flex-1" value="f">Física</ToggleGroupItem>
                        <ToggleGroupItem onClick={() => setValue('tipo', 'j')} className="flex-1" value="j">Jurídica</ToggleGroupItem>
                    </ToggleGroup >
                </Field>
                <input {...register('tipo')} type="hidden" />

                <Field className="col-span-10">
                    <FieldLabel>{tipo == 'f' ? 'Nome' : 'Razão Social'}</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{tipo == 'f' ? 'Apelido' : 'Fantasia'}</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{tipo == 'f' ? 'CPF' : 'CNPJ'}</FieldLabel>
                    <Input mask={tipo == 'f' ? '999.999.999-99' : '99.999.999/9999-99'} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>{tipo == 'f' ? 'RG' : 'IE'}</FieldLabel>
                    <Input {...register('rg')} />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>Data Nascimento</FieldLabel>
                    <InputDate {...register('nascimento')} />
                </Field>
                <div className="col-span-12 pt-4 flex justify-end">
                    <Button type="submit">
                        {/* <Spinner /> */}
                        Salvar Cliente
                    </Button>
                </div>
            </form>
        </div>
    )
} 