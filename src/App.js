
import './App.css';
import Cabecera from './componentes/Cabecera';
import Portada from './componentes/Portada';
import Section from './componentes/Section';
import family from './Imagenes/happy-beautiful-mother-and-kids-travel-by-car-near-the-sea 1.png'
import suv from './Imagenes/luxurious-black-car-riding-in-the-street-with-beautiful-sky.svg'
import city from './Imagenes/young-man-driving-his-car-at-night-time.svg'


function App() {
  return (
    <div className="App">
    <Cabecera/>
    <Portada
      title ="Everything you expect and more"
      description = "All our used cars come with a 21 day money back guarantee."
      button= "Show 902 cars"
      />
    <Section
      image = {family}
      title ="Cars to suit every lifestyle"
      description = "We help you find the car you need, at the right time."
      type_car ="Family"
      submit = "Find Cars"
      />
    <Section
      image ={suv}
      type_car ="SUVs"
      submit = "Find Cars"
      />
    <Section
      image ={city}
      type_car ="City Cars"
      submit = "Find Cars"
    />
      
        
    </div>
  );
}

export default App;
