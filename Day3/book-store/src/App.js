import axios from "axios";
import ListProduct from "./components/ListProduct/ListProduct";

function App() {
  axios.get('https://fakestoreapi.com/products').then(response => console.log(response))

  return (
    <div className="App">
      <ListProduct/>
    </div>
  );
}

export default App;
