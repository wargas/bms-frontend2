import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm } from "react-hook-form";

export function Component() {
    const { register, handleSubmit, setValue } = useForm<{ tipo: string }>()

    function onSubmit(data: {tipo:string}) {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
                <Field className="col-span-2">
                    <FieldLabel>Tipo</FieldLabel>
                    <ToggleGroup defaultValue="f" variant={'outline'} type="single">
                        <ToggleGroupItem onClick={() => setValue('tipo', 'f')} className="flex-1" value="f">Física</ToggleGroupItem>
                        <ToggleGroupItem onClick={() => setValue('tipo', 'j')} className="flex-1" value="j">Jurídica</ToggleGroupItem>
                    </ToggleGroup >
                </Field>
                <input {...register('tipo')} type="hidden"  />

                <Field className="col-span-10">
                    <FieldLabel>Nome</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>Apelido</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>CPF</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>RG</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-3">
                    <FieldLabel>Data Nascimento</FieldLabel>
                    <Input />
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