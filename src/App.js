
import './App.css';
import Cabecera from './componentes/Cabecera';
import Portada from './componentes/Portada';


function App() {
  return (
    <div className="App">
    <Cabecera/>
    <Portada
      title ="Everything you expect and more"
      description = "All our used cars come with a 21 day money back guarantee."
      button= "Show 902 cars"
      />
    
      
        
    </div>
  );
}

export default App;
