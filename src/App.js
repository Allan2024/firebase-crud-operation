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
import Display from "./pages/Display";
import State from "./pages/State";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>
 <Routes>
  <Route exact path="/priority" Component={PriorityPage}/>
  <Route exact path="/add" Component={AddEdit}/>
  <Route exact path="/update/:id" Component={AddEdit}/>
  <Route exact path="/view/:id" Component={View}/>
  <Route exact path="/about" Component={About}/>
  <Route exact path="/search" Component={Search}/>
  <Route exact path="/display" Component={Display}/>
  <Route exact path="/" Component={Home}/>
  <Route exact path="/state" Component={State}/>
 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
