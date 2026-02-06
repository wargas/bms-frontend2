import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useRef, useState, forwardRef } from "react";
import { format, parse } from "date-fns";

export const InputDate = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ value: prevValue, onChange, ...props }, ref) => {
  const [selected, setSelected] = useState<Date>();
  const [month, setMonth] = useState<Date>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(prevValue);

  const innerRef = useRef<HTMLInputElement>(null);

  function onSelectDate(ev: Date | undefined) {
    setOpen(false);
    setSelected(ev);
    setMonth(ev);

    if (ev && onChange) {
      const formatted = format(ev, "dd/MM/yyyy");

      const changeEvent = {
        target: {
          name: props.name,
          value: formatted,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      setValue(formatted);

      onChange(changeEvent);
    }
  }

  function onChangeHandle(ev: React.ChangeEvent<HTMLInputElement>) {
    const val = ev.target.value;

    setValue(val);

    const parsed = parse(val, "dd/MM/yyyy", new Date());

    if (!isNaN(parsed.getTime())) {
      setSelected(parsed);
      setMonth(parsed);
    }

    onChange?.(ev);
  }

  return (
    <InputGroup>
      <InputGroupInput
        ref={(el) => {
          innerRef.current = el;

          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        onChange={onChangeHandle}
        value={value}
        mask="99/99/9999"
        {...props}
      />

      <InputGroupAddon align="inline-end">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button type="button" size="icon" variant="ghost">
              <CalendarIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              month={month}
              required={false}
              selected={selected}
              mode="single"
              onMonthChange={setMonth}
              onSelect={onSelectDate}
            />
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  );
});

InputDate.displayName = "InputDate";
