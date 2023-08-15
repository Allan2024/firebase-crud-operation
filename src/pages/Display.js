import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {data} from './data';
import './PriorityPage.css';

export const PriorityPage = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

<div className="container">

<div className="collapse navbar-collapse" id="navbarSupportedContent">
 
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
  {
  /* Drop down link to display UI of pages */
}
    <li className="nav-item">
    <div className="dropdown">
<button class="dropbtn">Display <img className="defineimgsizein" src ={require('../images/dropdown2.png')} alt=""/></button>
<div className="dropdown-content">
<a className="" href="state"><Link className="reducesize" to ="/"></Link>Grouping<hide className="invisible"> i am hereee</hide><button className="definedropdownbutton1"> State<hide className="invisible">click</hide><img className="defineimgsize1"  alt=""/></button></a> 
<a className="" href="priority"><Link className="reducesize" to =""></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Priority<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
<a className="" href="display"><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Display<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
</div>
</div>
      
  </li>
    <li className="nav-item invisible">
      <a className="nav-link" href="#">&#8964;</a>
    </li>
    <li className="nav-item invisible">
      <a className="nav-link" href="#">Projects</a>
    </li>
  </ul>

</div>  

</div>
</nav>
<div class="container">

{
  /* Fetching data from API locally stored in Data.js (only fetching id and priority)*/
}

{data.map((item) => (
        <div className="parent">
        
        <div class="container">
          
  <div class="row">


    <div class="col-2">
    <img className="defineimgsize" src ={require('../images/anoopsharma.png')} alt=""/>
    <p className="namefloat">Abhiraj Maity</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'>icons</p> 

     
    <div className="card">
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Create Onboarding tutorials for new users</p>
  <br></br><br></br>
  <button className="firstpicbutton">. . .</button> <button className ="secondpicbutton">FutureRequest</button>
  </div>
  <br></br>
  </div>
<br></br>
    </div>
    <br></br>
    <div class="col-2">
      </div>
      <div class="col-2">
      <img className="defineimgsize" src ={require('../images/akansha punjabi.jpeg')} alt=""/>
    <p className="namefloat">Abhiraj Maity</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'>icons</p> 

      
    <div className="card">
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Create Onboarding tutorials for new users</p>
  <br></br><br></br>
  <button className="firstpicbutton">. . .</button> <button className ="secondpicbutton">FeautureRequest</button>
  </div>
  <br></br>
  </div>
</div>
<br></br>
<div class="col-2">
      </div>
      <div class="col-2">
      <img className="defineimgsize" src ={require('../images/businessman2.jpeg')} alt=""/>
    <p className="namefloat">Abhiraj Maity</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'>icons</p> 

     
    <div className="card">
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Create Onboarding tutorials for new users</p>
  <br></br><br></br>
  <button className="firstpicbutton">. . .</button> <button className ="secondpicbutton">FeatureRequest</button>
  </div>
  <br></br>
  </div>
  <br></br>
</div>

    
      
  </div>
</div>

  </div>
  ))}
</div>
</div>
  )
}
export default PriorityPage;