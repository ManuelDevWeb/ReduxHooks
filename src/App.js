//Importamos los hooks de redux
/*
    useSelector: Se encarga de devolvernos la propiedad del estado a la que nosotros queramos acceder.
    useDispatch: Se encarga de decirle al reducer qué acción queremos ejecutar.
*/
import { useSelector, useDispatch } from "react-redux";
//Importando acciones
import { addCounter, decreaseCounter } from "./actions/actions";

function App() {
  //Traemos la propiedad count del estado
  const count = useSelector(state => state.count);
  //Creamos un dispatcher ejecutando el hook useDispatch
  const dispatcher = useDispatch();

  //El dispatcher debemos ejecutarlo y en su interior pasaremos como parámetro la información de la acción a ejecutar por el reducer
  const add = () => dispatcher(addCounter());
  const decrease = () => dispatcher(decreaseCounter());

  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter with Redux Hooks {count}</h3>
        <button onClick={add}>ADD +1</button>
        <button onClick={decrease}>DECREASE -1</button>
      </header>
    </div>
  );
}

export default App;
