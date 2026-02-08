import { useModal } from "@/components/modal/hook-modal";
import { Button } from "@/components/ui/button";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { DrawerFooter } from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import Api from "@/lib/api";
import { useForm } from "react-hook-form";

export function FormCidade() {
    const { close } = useModal()
    const { register, setValue, handleSubmit, formState } = useForm({
        defaultValues: {
            nome: '',
            uf: 'PE',
            codigo_ibge: ''
        }
    })

    async function onSubmit(values: any) {
        const {data} = await Api.post(`cidades`, values)

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
                    <FieldLabel>UF</FieldLabel>
                    <Combobox onValueChange={v => setValue('uf', String(v))} items={['PE', 'CE', 'PI', 'BA']}>
                        <ComboboxInput showTrigger placeholder="Selecione uma UF" />
                        <ComboboxContent>
                            <ComboboxEmpty>Nenhum item</ComboboxEmpty>
                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>{item ?? ''}</ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                </Field>
                <Field>
                    <FieldLabel>IBGE</FieldLabel>
                    <Input {...register('codigo_ibge')} />
                </Field>

            </form>
            <DrawerFooter>
                <Button onClick={handleSubmit(onSubmit)}>
                    {formState.isSubmitting && <Spinner />}
                    Salvar</Button>
            </DrawerFooter>
        </>)
}