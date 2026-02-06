import { InputDate } from "@/components/input-date";
import { useModal } from "@/components/modal/hook-modal";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function ModalTeste() {
    const modal = useModal()
    return <>

        <div className="p-4 flex flex-col gap-4">
            <Field>
                <FieldLabel>Nome</FieldLabel>
                <Input />
            </Field>
            <Field>
                <FieldLabel>CPF</FieldLabel>
                <Input mask="999.999.999-99" />
            </Field>
             <Field>
                <FieldLabel>Nascimento</FieldLabel>
                <InputDate name="data" />
            </Field>
        </div>
        <DrawerFooter>
            <Button onClick={() => modal.close({})}>Fechar</Button>
        </DrawerFooter>
    </>
}