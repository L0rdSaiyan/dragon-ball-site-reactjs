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
    <Cards
    image1={"https://i.ytimg.com/vi/GxTJ2k5cdkA/maxresdefault.jpg"} 
    image2={"https://i.ytimg.com/vi/YEweVHzr_WE/maxresdefault.jpg"} 
    image3={"https://i.ytimg.com/vi/_lRpY9JPPiQ/maxresdefault.jpg"}
    description1={"Ultra Goku SSJ Red"}
    description2={"Ultra Goku Ultra Instinct (Omen)"}
    description3={"Ultra Super Vegetto"}>
    </Cards>
    <Cards 
    image1={"https://steamuserimages-a.akamaihd.net/ugc/2028359009885158301/E4330264EBA1552FD22BBE343F361399D2CF69AD/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"}
    image2={"https://i.ytimg.com/vi/dxmZ765Rn2M/maxresdefault.jpg"}
    image3={"https://i.ytimg.com/vi/0lIXTEG0IYA/maxresdefault.jpg"}
    description1={"Ultra Gogeta Blue"}
    description2={"Ultra Super Saiyan Gogeta"}
    description3={"Ultra Vegetto Blue"}
    >
    </Cards>
    </div>
  );
}

export default App;
