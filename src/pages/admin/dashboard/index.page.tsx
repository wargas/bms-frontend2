import { useApp } from "@/components/app-provider"
import { LocationBar, LocationItem } from "@/components/location-bar"
import { modal } from "@/components/modal"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { ModalTeste } from "./modal.teste"

export function Component() {
    const app = useApp()

    useEffect(() => {
        app.setBreadcrumb([{ label: 'Dashboard', url: '/dashboard' }])

        console.log(app.breadcrumb)
    }, [])
    return (
        <div>
            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
            </LocationBar>

            <Button onClick={() => modal(ModalTeste, {title: 'TESTE'})}>Alterar</Button>
        </div>
    )
}