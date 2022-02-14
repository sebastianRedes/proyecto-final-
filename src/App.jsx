
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Pokemon from "./container/Pokemon";
import PokemonWichList from "./container/PokemonWichList";
import Layaout from './components/Layaout';

const App=() => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path="/pokemonwichlist" component={PokemonWichList}/>
        <Route exact path="/" component={Pokemon}/>
      </Switch>
    </Layaout>
  </BrowserRouter>
);

export default App;
