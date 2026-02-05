import { useApp } from "@/components/app-provider"
import { LocationBar, LocationItem } from "@/components/location-bar"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

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

            <Button>Alterar</Button>
        </div>
    )
}