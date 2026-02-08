import { useModal } from "@/components/modal/hook-modal";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import Api from "@/lib/api";
import { useForm } from "react-hook-form";

export function FormPlano() {
    const { close } = useModal()
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            nome: '',
            descricao: '',
            valor: '',
            tipo_conexao: '',
            radius: 1
        }
    })

    async function onSubmit(values: any) {
        const {data} = await Api.post(`planos`, values)

        close(data)
    }

    return (
        <>
            <form className="p-4 flex flex-col gap-4">
                <Field>
                    <FieldLabel>Nome</FieldLabel>
                    <Input {...register('nome')} />
                </Field>
               
                <Field>
                    <FieldLabel>Descrição</FieldLabel>
                    <Input {...register('descricao')} />
                </Field>

                 <Field>
                    <FieldLabel>Valor</FieldLabel>
                    <Input money {...register('valor')} />
                </Field>

                <Field>
                    <FieldLabel>Conexão</FieldLabel>
                    <Input {...register('tipo_conexao')} />
                </Field>

                <Field>
                    <FieldLabel>Radius</FieldLabel>
                    <Input {...register('radius')} />
                </Field>

            </form>
            <DrawerFooter>
                <Button onClick={handleSubmit(onSubmit)}>
                    {formState.isSubmitting && <Spinner />}
                    Salvar</Button>
            </DrawerFooter>
        </>)
}