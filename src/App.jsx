import { AuthProvider } from "./context/auth/AuthProvider";
import { AppRoutes } from "./routes/Routes";

function App() {
  

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
