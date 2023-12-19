import './App.css';
import Categories from "./Categories";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";



function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Categories/>}/>
                  <Route path={'/foodrecipes'} element={<Recipes/>}/>
                  <Route path={'/foodrecipes/:id'} element={<Recipe/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
