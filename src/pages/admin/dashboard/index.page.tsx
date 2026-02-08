import { useApp } from "@/components/app-provider"
import { modal } from "@/components/modal"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ModalTeste } from "./modal.teste"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function Component() {
    const app = useApp()

    const [open, setOpen]= useState(false)

    useEffect(() => {
        app.setBreadcrumb([{ label: 'Dashboard', url: '/dashboard' }])

        console.log(app.breadcrumb)
    }, [])
    return (
        <div>
            {/* <LocationBar>
                <LocationItem url="/dashboard">Dashboard</LocationItem>
            </LocationBar> */}

            <Button onClick={() => modal(ModalTeste, { title: 'TESTE' })}>Alterar</Button>
            <Button onClick={() => setOpen(true)}>Modal</Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Dialog de teste</DialogTitle>
                    </DialogHeader>
                    <div className="h-90 cursor-grab">
                        <Combobox items={['PE', 'CE', 'PI', 'BA']}>
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
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}