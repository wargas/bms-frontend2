import * as React from "react"
import VMasker from 'vanilla-masker'
import { cn } from "@/lib/utils"


function Input({ className, isDate = false, money = false, onChange = () => { }, mask, type, ...props }: { isDate?: boolean, mask?: string, money?: boolean } & React.ComponentProps<"input">) {


  function changeEvent(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>): void {
    if (money) {
      event.target.value = VMasker.toMoney(event.target.value)
    }
    if (mask) {
      event.target.value = VMasker.toPattern(event.target.value, mask);
    }
    onChange(event)
  }

  if (isDate) {
    
  }

  return (
    <input
      onChange={changeEvent}
      type={type}
      data-slot="input"
      className={cn(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
