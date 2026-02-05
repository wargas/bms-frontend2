import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useRef, useState } from "react";
import { parse } from "date-fns";

export function InputDate({value:prevValue, onChange, ...props}: React.ComponentProps<"input">) {

    const [selected, setSelected] = useState<Date>()
    const [month, setMonth] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(prevValue)
    const inputRef = useRef<HTMLInputElement>(null)


    function onSelectDate(ev: Date | undefined) {
        setOpen(false)
        setSelected(ev)
        setMonth(ev)

        if (ev && onChange) {
            const changeEvent = {
                target: { name: props.name, value: ev.toLocaleDateString() }
            } as React.ChangeEvent<HTMLInputElement>

            setValue(ev.toLocaleDateString())

            onChange(changeEvent)
        }

    }

    function onChangeHandle(ev: React.ChangeEvent<HTMLInputElement>) {
        setValue(ev.target.value)

        const parsed = parse(ev.target.value, 'dd/MM/yyyy', new Date())

        
        if(parsed) {
            setSelected(parsed)
            setMonth(parsed)
        }

        if(onChange) {
            onChange(ev)
        }
    }



    return <InputGroup>
        <InputGroupInput onChange={onChangeHandle} value={value} ref={inputRef} {...props} mask="99/99/9999" />
        <InputGroupAddon align={'inline-end'}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button type="button" size={'icon'} variant={'ghost'}>
                        <CalendarIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                    <Calendar month={month} required={false} selected={selected} mode="single" onMonthChange={setMonth} onSelect={onSelectDate} />
                </PopoverContent>
            </Popover>
        </InputGroupAddon>
    </InputGroup>
}