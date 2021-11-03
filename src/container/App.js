import '../styles/App.css';
import ClassComponent from '../components/ClassComponent'
import FunctionComponent  from '../components/FunctionComponent';

function App() {

  const listaConvidados = [ 
    { nome:'Nicolas', estaNaLista:true, tarefa:'batata-frita' }, 
    { nome:'Pedro', estaNaLista:false, tarefa:'pizza' }, 
    { nome:'Carolina', estaNaLista:true, tarefa:'bebidas' } 
  ] 

  return (
    <div className="App">

      <h3>Convidados: </h3>

      { listaConvidados.map(({nome, estaNaLista, tarefa}) => {
        return (
          <>
            <ClassComponent nome={nome} estaNaLista={estaNaLista} />
            <FunctionComponent nome={nome} tarefa={tarefa}></FunctionComponent>
          </>
        )
       
      })}
      
      {/* <ClassComponent nome="Nicolas" estaNaLista={true} />
      <ClassComponent nome="Pedro" estaNaLista={false} />
      <ClassComponent nome="Carolina" estaNaLista={true} />
      <h3>Tarefas: </h3>
      <FunctionComponent nome="Nicolas"  tarefa="batata-frita" />
      <FunctionComponent nome="Pedro"  tarefa="pizza" />
      <FunctionComponent nome="Carolina"  tarefa="bebidas" /> */}
    </div>
    
  );
}

export default App;
