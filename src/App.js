import './App.css';
import Informacoes from './components/UserInformation'
import Header from './components/Header'
import Carousel from './components/Carousel';
import Counter from './components/Counter';
import Cards from './components/Cards';
function App() {

  const soma = (num1,num2) =>
  {
    return num1+num2
  }


  return (
    <div className="App">
      <Header></Header>
     
    {/* <Informacoes nome="victor" idade="17" profissao="desempregado é foda"/>
    <p>resutlado da soma: {soma(5,5)}</p> */}
    <Carousel></Carousel>
    <Cards></Cards>
    </div>
  );
}

export default App;
