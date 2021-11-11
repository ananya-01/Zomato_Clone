//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//Temp page
import Temp from './components/temp';

function App() {
  return (
    <>
        <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
