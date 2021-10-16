//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={Temp}/>
    <HomeLayoutHOC path="/:type" exact component={Master}/>
    <RestaurantLayout path="restaurant/:id" exact component ={xyz} />
     </>
  )
}

export default App;
