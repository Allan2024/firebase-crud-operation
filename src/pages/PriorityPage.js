import React from 'react'
import { Link } from "react-router-dom";
import {data} from './data';
import './PriorityPage.css'

export const PriorityPage = () => {
  return (<>
    <div>State</div>
    <div className="App">
<div className="dropdown labelleft">
<button class="dropbtn">Display <img className="defineimgsizein" src ={require('../images/dropdown2.png')} alt=""/></button>
<div className="dropdown-content">
<a className="" href="state"><Link className="reducesize" to ="/"></Link>Grouping<hide className="invisible"> i am hereee</hide><button className="definedropdownbutton1"> State<hide className="invisible">click</hide><img className="defineimgsize1"  alt=""/></button></a> 
<a className="" href="priority"><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Priority<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
<a className="" href="display"><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Display<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
</div>
</div><br></br>

{
  /* Fetching data from API locally stored in Data.js (only fetching id and priority)*/
}
{data.map((item) => (
        <div className="parent">
        
        <div class="container">
  <div class="row">
    <div class="col-2">
    <p container="values">     <img className="defineimgsize" src ={require('../images/nopriority.png')} alt=""/>
    <p className="namefloat">On the process</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/akansha punjabi.jpeg')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Conduct Security Vulnerability Assesment</p>
  <br></br><br></br>
  <img className="inboximg1 bottom" src ={require('../images/exclamation2.jpg')} alt=""/> <button className="btn btn-light bottom">Feauture Request</button>
  </div>
  <br></br>
  </div>
<br></br>
    </div>
    <br></br>


    <div className="col-2">
        </div>
    <div className="col-2">
    <p container="values">     <img className="defineimgsize" src ={require('../images/priority.png')} alt=""/>
    <p className="namefloat">Nearby completion</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/businessman2.jpeg')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Create Onboarding tutorials for new users</p>
  <br></br><br></br>
  <img className="inboximg1 bottom" src ={require('../images/exclamation2.jpg')} alt=""/> <button className="btn btn-light bottom">Feauture Request</button>
  </div>
  <br></br>
  </div>
      <br></br>
    </div>
    <div className="col-2">
        </div>
    <div className="col-2">
    <p container="values">     <img className="defineimgsize" src ={require('../images/urgent.png')} alt=""/>
    <p className="namefloat">To-Do</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat'><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/abhideep maity.jpeg')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">Create Onboarding tutorials for new users</p>
  <br></br><br></br>
  <img className="inboximg1 bottom" src ={require('../images/exclamation2.jpg')} alt=""/> <button className="btn btn-light bottom">Feauture Request</button></div>
  <br></br>
  </div>
    </div>
    <div className="col-1">
        </div>
    <div class="col-3">
   
    </div>
  </div>
</div>

  </div>
  ))}

</div>


</>
  )
}

export default PriorityPage;