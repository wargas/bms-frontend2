import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Field,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useTheme } from '@/components/theme-provider'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { Spinner } from '@/components/ui/spinner'
import { useForm, type SubmitHandler } from "react-hook-form"
import { useLocalStorage } from "usehooks-ts";

import Api from '@/lib/api'

type Inputs = {
    email: string,
    password: string
}

export function Component() {

    const [, setToken] = useLocalStorage('auth_token', '')

    const { setTheme, theme } = useTheme()

    const { register, handleSubmit, formState } = useForm<Inputs>()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = async values => {
        const { data } = await Api.post('/login', values)

        if ("token" in data) {
            setToken(data.token as "");
            return navigate("/dashboard", { state: data });
        }
        alert('erro ao fazer login')

    }

    return <div>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-120">
                <div className={cn("flex flex-col gap-6")}>
                    <div>
                        <h1 className="font-extrabold text-center text-4xl">
                            <span className="text-primary">BIT</span>
                            <span>MAX</span>
                        </h1>
                    </div>
                    <Card>
                        <Button className='absolute top-4 right-4' variant={'ghost'} onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
                            {theme == 'dark' && <MoonIcon />}
                            {theme == 'light' && <SunIcon />}
                        </Button>
                        <CardHeader>
                            <CardTitle>Login na sua conta</CardTitle>
                            <CardDescription>
                                Entre com Email e Senha


                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {JSON.stringify(formState)}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input
                                            {...register('email')}
                                        />
                                    </Field>
                                    <Field>
                                        <div className="flex items-center">
                                            <FieldLabel htmlFor="password">Senha</FieldLabel>
                                            <a
                                                href="#"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Esqueceu a senha?
                                            </a>
                                        </div>
                                        <Input  {...register('password')} type="password" required />
                                    </Field>
                                    <Field>
                                        <Button type="submit">
                                            <Spinner className={cn({ 'hidden': !formState.isLoading })} />
                                            Login</Button>

                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
}