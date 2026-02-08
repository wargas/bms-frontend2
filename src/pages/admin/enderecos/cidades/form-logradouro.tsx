import { useModal } from "@/components/modal/hook-modal";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import Api from "@/lib/api";
import { useForm } from "react-hook-form";

export function FormLogradouro() {
    const { close, options: { data: bairro } } = useModal()
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            bairro_id: bairro.id,
            nome: '',
            cep: '',
        }
    })

    async function onSubmit(values: any) {
        const { data } = await Api.post(`cidades/${bairro.cidade_id}/bairros/${bairro.id}/logradouros/`, values)

        close(data)
    }

    return (
        <>
            <form className="p-4 flex flex-col gap-4">
                <Field>
                    <FieldLabel>UF</FieldLabel>
                    <Input value={bairro?.uf} disabled />
                </Field>
                <Field>
                    <FieldLabel>Cidade</FieldLabel>
                    <Input value={bairro?.cidade} disabled />
                </Field>
                <Field>
                    <FieldLabel>Bairro</FieldLabel>
                    <Input value={bairro.nome} disabled />
                </Field>
                <Field>
                    <FieldLabel>Nome do Logradouro</FieldLabel>
                    <Input {...register('nome')} />
                </Field>
                <Field>
                    <FieldLabel>CEP</FieldLabel>
                    <Input mask="99999-999" {...register('cep')} />
                </Field>
            </form>
            <DrawerFooter>
                <Button onClick={handleSubmit(onSubmit)}>
                    {formState.isSubmitting && <Spinner />}
                    Salvar</Button>

            </DrawerFooter>
        </>)
}