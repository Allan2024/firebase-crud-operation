import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import About from "./pages/About";
import View from "./pages/View";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Search from "./pages/Search";
import PriorityPage from "./pages/PriorityPage";
import Homes from "./pages/Homes";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>
 <Routes>
  <Route exact path="/" Component={Home}/>
  <Route exact path="/add" Component={AddEdit}/>
  <Route exact path="/update/:id" Component={AddEdit}/>
  <Route exact path="/view/:id" Component={View}/>
  <Route exact path="/about" Component={About}/>
  <Route exact path="/search" Component={Search}/>
  <Route exact path="/priority" Component={PriorityPage}/>
  <Route exact path="/homes" Component={Homes}/>
 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
