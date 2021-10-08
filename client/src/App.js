import { UserProvider, UserContext } from "./Context/UserContext";
import UserLogin from "./Components/UserLogin";

function App() {


  return (
    <UserProvider>
      <UserLogin />
    </UserProvider>
  );
}

export default App;
