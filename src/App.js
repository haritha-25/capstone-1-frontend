import { BrowserRouter,Routes,Route } from "react-router-dom";
import DissmissHeader from "./components/DissmissHeader";

import chart from '../src/pages/chart/chart';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Query from './pages/chart/query/query';


function App() {
  return (
    <BrowserRouter>
    <DissmissHeader/>
    <Header/>
    <Sidebar/>
    <Routes>
    <Route path="/search" component={Query}/>
        <Route path="/chart" component={chart}/>
        
      <Route path="/"  element="page not exists 404" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;