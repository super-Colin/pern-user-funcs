import { useHistory } from "react-router-dom";

function App() {

  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/" + e.target.name);
  }

  return (
    <div>
      <button name="signup" onClick={handleClick} >Sign Up</button>
      <button name="login" onClick={handleClick} >Log In</button>
    </div>
  );
}

export default App;
