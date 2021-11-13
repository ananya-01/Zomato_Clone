import {Route, Redirect} from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.Hoc";

import Temp from "./components/temp";

//pages
import Home from "./Page/Home";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery" />
    </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC  path="/restaurant/:id" exact component={Temp} />
    </>
  );
}

export default App;
