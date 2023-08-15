import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import fireDb from "../firebase";
import{toast} from "react-toastify";
import './AddEdit.css';
const initialState={
    name:"",
    email:"",
    contact:""

}

export const AddEdit = () => {
    const[state,setstate] = useState(initialState);
    const[data,setData] = useState({});

    const {name,email,contact}= state;

    const navigate = useNavigate();

    const {id} = useParams();

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
    },[id]);

    useEffect(() =>{
       if(id){
        setstate({...data[id]})
      
       } else{
        setstate({...initialState})
       }
return() => {
  setstate({...initialState})
};
    }, [id,data])

    const handleInputChange = (e) => {
      const {name,value} = e.target;
      setstate({...state, [name]: value});
    };
    const handleSubmit =(e) =>{
      e.preventDefault();
      if(!name || !email || !contact){
        toast.error("Please provide value in each input field")
      } else{
        if(!id){
          fireDb.child("contacts").push(state,(err)=>{
            if(err){
              toast.error(err);
            } else{
              toast.success("Contact Added Successfully");
            }
          });
        } else{
          fireDb.child(`contacts/{id}`).set(state,(err)=>{
            if(err){
              toast.error(err);
            } else{
              toast.success("Contact updated Successfully");
            }
          });
        }
     
        setTimeout(()=>navigate("/"),500);
      }
    }
  return (
    <div style ={{marginTop: "100px"}}>
        <form style={{
            margin: "auto",
             padding:"15px", 
             maxWidth:"400px",
             alignContent:"center",}}
             onSubmit={handleSubmit}
             >

{
  /* Input Data*/
}

<label htmlFor="name">Name</label>
<input 
type="text"
id="name"
name="name"
placeholder='Your Name'
value={name || ""}
onChange={handleInputChange}
/>

<label htmlFor="email">Email</label>
<input 
type="email"
id="email"
name="email"
placeholder='Your Email'
value={email || ""}
onChange={handleInputChange}
/>

<label htmlFor="contact">contact</label>
<input 
type="number"
id="contact"
name="contact"
placeholder='Your Contact No....'
value={contact || ""}
onChange={handleInputChange}
/>
<input type="submit" value={id ? "Update" : "Save"} />
        </form>
    </div>
  )
}
export default AddEdit;
