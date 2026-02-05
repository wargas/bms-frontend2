import { AppRoutes } from "./components/app-routes";
import { ThemeProvider } from "./components/theme-provider";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule])
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { defaultQueryFn } from "./lib/api";
import { AppProvider } from "./components/app-provider";

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
        <AppProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <AppRoutes />
                </ThemeProvider>
            </QueryClientProvider>
        </AppProvider>
    )

}

export default App;