import { LocationBar, LocationItem } from "@/components/location-bar";

export function Component() {

    return (
        <div>

            <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
                <LocationItem url="/contratos">Contratos</LocationItem>
                <LocationItem>Buscar</LocationItem>
            </LocationBar>
            buscar.page.tsx
        </div>
    )
}

