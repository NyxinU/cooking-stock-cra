import RandomRecipe from "./RandomRecipe/RandomRecipe";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

// const user = null;
const user = { name: "Nixon" };

function App() {
  return (
    <Router>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Router>
  );
  // <RandomRecipe />;
}

export default App;
