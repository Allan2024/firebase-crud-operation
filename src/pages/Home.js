import React,{useState, useEffect} from 'react';
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import "./Home.css";
import { ToastContainer} from 'react-toastify';
import{toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
    
export const Home = () => {
  const [data,setData] = useState({});
  const [sortedData,setSortedData] = useState([])
  const [sort, setSort] = useState(false);
  useEffect(() =>{
    fireDb.child("contacts").on("value",(snapshot) =>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
    } else{
    setData({});
      }
    });

 
    return ()=>{

      

setData({});
    };
  },[]);
  const onDelete = (id) =>{
    if(window.confirm("Are you sure that you wanted to delte that list?")){
      fireDb.child(`contacts/${id}`).remove((err) =>{
        if(err){
          toast.err(err)
        }  else {
          toast.success("Has been deleted from the list")
        }
          })
    }
  }
  const handleChange = (e) =>{
    setSort(true);
    fireDb.child("contacts").orderByChild(`${e.target.value}`).on("value",(snapshot) =>{
      let sortedData =[];
      snapshot.forEach((snap) =>{
        sortedData.push(snap.val())
      })
      setSortedData(sortedData);
    })
  };
  const handleReset =() =>{
    setSort(false);
  };
  return (

    <>
    {
      /* Drpdown button Displaying  Ui */
    }
<div className="dropdown">
<button class="dropbtn">Display <img className="defineimgsizein" src ={require('../images/dropdown2.png')} alt=""/></button>
<div className="dropdown-content">
<a className="" href="state"><Link className="reducesize" to ="/"></Link>Grouping<hide className="invisible"> i am hereee</hide><button className="definedropdownbutton1"> State<hide className="invisible">click</hide><img className="defineimgsize1"  alt=""/></button></a> 
<a className="" href="priority"><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Priority<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
<a className="" href=""><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Display<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
</div>
</div>

    <div style={{marginTop: "10px"}}>
      <table className='styled-table'>
<thead>
  <tr>
    <th style={{textAlign: "center"}}>No.</th>
    <th style={{textAlign: "center"}}>Name</th>
    <th style={{textAlign: "center"}}>Status</th>
    <th style={{textAlign: "center"}}>Priority</th>
   {!sort && ( <th style={{textAlign: "center"}}>Action</th>)}
  </tr>
</thead>
{!sort && (
  <tbody>
{Object.keys(data).map((id,index) =>{
  return(
    <tr key={id}>
      <th scope="row">{index+1}</th>
      <td>{data[id].name}</td>
      <td>{data[id].status}</td>
      <td>{data[id].priority}</td>
      <td>
        <Link to={`/update/$(id)`}>
        <button className='btn btn-edit'> Edit </button>
        </Link>
        <button className='btn btn-delete'onClick={() => onDelete(id)}> Delete </button>
        <Link to={`/view/$(id)`}>
        <button className='btn btn-view'> View </button>
        </Link>
      </td>
    </tr>

  )
})}
</tbody>
)}

{ 
/* Sorting data*/
}
{sort && (
  <tbody>
    {sortedData.map((item,index) =>{
      return(
        <tr key={index}>
      <th scope="row">{index+1}</th>
      
     <td>
      <br></br>
      <br></br>
     <div><p container="values" >     
    <p className="namefloat" style={{paddingRight:"200px"}}>{item.name}</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat' style={{ position:"absolute" ,paddingLeft:"10px",marginBottom:"20px"}}><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/abhideep maity.jpeg')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">{item.status}</p>
  <br></br><br></br>
 <button className="btn btn-light bottom"> &#9684; Feauture Request</button> 
  <img className="defineimgsize" style={{marginLeft:"330px",paddingBottom:"5px"}}  src ={require('../images/nopriority.png')} alt=""/>
  </div>
  </div>
  </div>
<br></br>
</td>

<td>
  <br></br>
  <br></br><div><p container="values" >     
    <p className="namefloat" style={{paddingRight:"200px"}}>{item.name}</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat' style={{ position:"absolute" ,paddingLeft:"10px",paddingBottom:"10px"}}><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/akansha punjabi.jpeg')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">{item.status}</p>
  <br></br><br></br>
   <button className="btn btn-light bottom">&#9684; Feauture Request</button> 
  <img className="defineimgsize" style={{marginLeft:"330px",paddingBottom:"0px"}}  src ={require('../images/nopriority.png')} alt=""/>
  </div>
  </div>
  </div>
<br></br></td>

<td><br></br><br></br> <div><p container="values" >     
    <p className="namefloat" style={{paddingRight:"200px"}}>{item.name}</p>
<p className='numberfloat'>{item.priority}</p>
<p className='iconsfloat' style={{ position:"absolute" ,paddingLeft:"10px",paddingBottom:"10px"}}><img className="defineimgsize" src ={require('../images/plus.png')} alt=""/></p> </p>
    <div className="card">
    <img className="definepicinbox" src ={require('../images/anoopsharma.png')} alt=""/>
  <div className="card-body">
  <h5 className="card-title">{item.id}</h5>
  <br></br>
  <p className="card-text">{item.status}</p>
  <br></br><br></br>
  <button className="btn btn-light bottom"> &#9684; Feauture Request</button> 
  <img className="defineimgsize" style={{marginLeft:"330px",paddingBottom:"5px"}}  src ={require('../images/nopriority.png')} alt=""/>
  </div>
  </div>
  </div>
<br></br>
</td>
      </tr>
      )
    })}
  </tbody>
)}
{
  /*
   <td>{item.name}</td>
      <td>{item.status}</td>
      <td>{item.priority}</td>
  */
}

      </table>
      <label>
        Sort By:
    </label>
    <select className='dropdown' name='colValue' onChange={handleChange}>
      <option> Please Select </option>
      <option value="name"> Name</option>
      <option value="status"> Status</option>
      <option value="contact">Contact</option>
      <option value= "priority">Priority</option>
    </select>
    <button className='btn btn-reset' onClick={handleReset}>Reset</button>
    <br/>
      </div>
      </>
  );
};
export default Home;