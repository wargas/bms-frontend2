import { AppRoutes } from "./components/app-routes";
import { ThemeProvider } from "./components/theme-provider";



export function App() {
    return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRoutes />
    </ThemeProvider>
}

export default App;