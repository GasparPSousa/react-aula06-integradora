import '../styles/App.css';
import ClassComponent from '../components/ClassComponent'
import FunctionComponent  from '../components/FunctionComponent';

function App() {
  return (
    <div className="App">
      <h3>Convidados: </h3>
      <ClassComponent />
      <h3>Tarefa: </h3>
      <FunctionComponent />
    </div>
    
  );
}

export default App;
