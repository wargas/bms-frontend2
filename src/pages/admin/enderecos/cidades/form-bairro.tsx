import { useModal } from "@/components/modal/hook-modal";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import Api from "@/lib/api";
import { useForm } from "react-hook-form";

export function FormBairo() {
    const { close, options: { data: cidade } } = useModal()
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            cidade_id: cidade.id,
            nome: '',
        }
    })

    async function onSubmit(values: any) {
        const { data } = await Api.post(`cidades/${cidade.id}/bairros`, values)

        close(data)
    }

    return (
        <>
            <form className="p-4 flex flex-col gap-4">
                <Field>
                    <FieldLabel>UF</FieldLabel>
                    <Input value={cidade.uf} disabled />
                </Field>
                <Field>
                    <FieldLabel>Cidade</FieldLabel>
                    <Input value={cidade.nome} disabled />
                </Field>
                <Field>
                    <FieldLabel>Nome</FieldLabel>
                    <Input {...register('nome')} />
                </Field>
            </form>
            <DrawerFooter>
                <Button onClick={handleSubmit(onSubmit)}>
                    {formState.isSubmitting && <Spinner />}
                    Salvar</Button>

            </DrawerFooter>
        </>)
}