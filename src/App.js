import AuthContextProvider from "./Context/AuthContext";
import AppRouter from "./Pages/AppRouter";
const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App


