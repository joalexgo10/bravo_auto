
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Section from './components/Section';
import Form from './components/Form';
// import About from './components/About';
// import Footer from './components/Footer';
import family from './assets/Imagenes/happy-beautiful-mother-and-kids-travel-by-car-near-the-sea-1.png'
import suv from './assets/Imagenes/luxurious-black-car-riding-in-the-street-with-beautiful-sky.png'
import city from './assets/Imagenes/young-man-driving-his-car-at-night-time.png'


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
    {/* <About
      title = "About bravoauto"
      title2 = "An Inchcape Company"
      titleh3 = "Exceeding your expectations"
      paragraph = "At bravoauto, we aim to exceed your expectations and give you something out of the ordinary. We promise to offer you more choice, more value, more support and most of all, more of everything you have experienced before." 

      paragraph2= "We offer best-in-class protection plans with our 21 day money back guarantee and 12 months warranty, so if you don't love it, you can return it"

      />
      <Footer/> */}
      

    
      
        
    </div>
  );
}

export default App;
