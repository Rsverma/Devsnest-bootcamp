import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import ThemeButton from "./components/ThemeButton";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector(state => state.theme)

  return   <div className={theme===true?"dark":"light" }>
    <div className="App">
    <ThemeButton />
          <Form />
          <Card />
  </div>
  </div>;
}

export default App;
