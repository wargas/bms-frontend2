import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function Component() {
    return (
        <div>
            <form action="" className="grid-cols-6 grid gap-4">
                <Field className="col-span-1">
                    <FieldLabel>CPF/CNPJ</FieldLabel>
                    <Input />
                </Field>

                <Field className="col-span-4">
                    <FieldLabel>Nome</FieldLabel>
                    <Input />
                </Field>
                <Field className="col-span-1">
                    <FieldLabel>&nbsp;</FieldLabel>
                    <Button>Filtrar</Button>
                </Field>
            </form>
        </div>
    )
}