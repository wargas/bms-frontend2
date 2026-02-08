import { LocationBar, LocationItem } from "@/components/location-bar";
import { modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { FormPlano } from "./form-plano";

export function Component() {
    function onHandleOpenForm(_: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        modal(FormPlano, { title: 'Editar Plano'})
    }

    return (
        <div className="flex flex-col h-full">
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem>Planos</LocationItem>

            </LocationBar>
            <div className="flex justify-end gap-2">
                
                <Button onClick={onHandleOpenForm} variant={'outline'}>Cadastrar</Button>
            </div>
        </div>
    )
}

