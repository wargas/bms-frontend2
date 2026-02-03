import { AppRoutes } from "./components/app-routes";
import { ThemeProvider } from "./components/theme-provider";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { defaultQueryFn } from "./lib/api";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn,
            refetchOnWindowFocus: false
        }
    }
})


export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AppRoutes />
            </ThemeProvider>
        </QueryClientProvider>
    )

}

export default App;