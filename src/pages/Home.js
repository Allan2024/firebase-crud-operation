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
<a className="" href="display"><Link className="reducesize" to ="/"></Link> Ongoing <hide className="invisible"> i am hereee</hide><button className="definedropdownbutton2">Display<hide className="invisible">Click</hide><img className="defineimgsize1"  alt=""/></button></a>
</div>
</div>

    <div style={{marginTop: "100px"}}>
      <table className='styled-table'>
<thead>
  <tr>
    <th style={{textAlign: "center"}}>No.</th>
    <th style={{textAlign: "center"}}>Name</th>
    <th style={{textAlign: "center"}}>Email</th>
    <th style={{textAlign: "center"}}>Contact</th>
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
      <td>{data[id].email}</td>
      <td>{data[id].contact}</td>
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
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.contact}</td>
      </tr>
      )
    })}
  </tbody>
)}

      </table>
      <label>
        Sort By:
    </label>
    <select className='dropdown' name='colValue' onChange={handleChange}>
      <option> Please Select </option>
      <option value="name"> Name</option>
      <option value="email"> Email</option>
      <option value="contact">Contact</option>
      <option value= "status">Status</option>
    </select>
    <button className='btn btn-reset' onClick={handleReset}>Reset</button>
    <br/>
      </div>
      </>
  );
};
export default Home;