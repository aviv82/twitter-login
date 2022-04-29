import "./App.css";
import { Input } from "./components/input-form/Input";
import { Footer } from "./components/input-footer/Footer";

function App() {
  const data = [
    ["fab fa-apple", "Sign in with Apple"],
    ["fab fa-windows", "Sign in with Microsoft"],
  ];

  return (
    <header className="App-header">
      <img src="./assets/logo.png" alt="logo" />
      <Input details={data} />
      <p>or</p>
      <Footer />
    </header>
  );
}

export default App;
