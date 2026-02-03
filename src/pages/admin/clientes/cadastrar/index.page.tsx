import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function Component() {
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <Field className="col-span-2">
                    <FieldLabel>Tipo</FieldLabel>
                    <ToggleGroup variant={'outline'} type="single">
                        <ToggleGroupItem className="flex-1" value="f">Física</ToggleGroupItem>
                        <ToggleGroupItem className="flex-1" value="j">Jurídica</ToggleGroupItem>
                    </ToggleGroup >
                </Field>

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
                    <Button>
                        <Spinner />
                        Salvar Cliente
                        </Button>
                </div>
            </div>
        </div>
    )
} 