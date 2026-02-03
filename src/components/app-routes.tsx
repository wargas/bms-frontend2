import { routes } from '@/lib/routes-fs'
import { createHashRouter, RouterProvider } from 'react-router'

const router = createHashRouter(routes)

export function AppRoutes() {
    return <RouterProvider router={router} />
}