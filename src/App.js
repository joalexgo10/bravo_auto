
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Section from './components/Section';
import Form from './components/Form';
import family from './assets/Imagenes/happy-beautiful-mother-and-kids-travel-by-car-near-the-sea 1.png'
import suv from './assets/Imagenes/luxurious-black-car-riding-in-the-street-with-beautiful-sky.svg'
import city from './assets/Imagenes/young-man-driving-his-car-at-night-time.svg'


function App() {
  return (
    <div className="App">
    <Header/>
    <Cover
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
    <Form
      title = "Sign up and find the best prices"
    />
      
        
    </div>
  );
}

export default App;
