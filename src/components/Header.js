import React,{useEffect,useState} from 'react';
import {Link,useLocation,useNavigate} from "react-router-dom";
import "./Header.css"

export const Header = () => {
    const[activeTab,setActiveTab] = useState("Home");
    const location =useLocation();
    const [search,setSearch] =useState("");

    const navigate =useNavigate();

    useEffect(()=>{
if(location.pathname==="/"){
    setActiveTab("Home")
} else if(location.pathname ==="/add"){
    setActiveTab("AddContact")
} else if(location.pathname ==="/about"){
setActiveTab("About");
}

}
 ,[location]);
 const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search?name=${search}`)
    setSearch("");
 }
  return (
    <div className="header">
        <p className="logo">Kanban Board</p>
        <div className="header-right">
            <form onSubmit={handleSubmit} style={{display:"inline"}}>
            <input
                type='text'
                className='inputfield'
                placeholder='SearchName'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
            </form>
    <Link to ="/">
        <p className={`${activeTab === " Home " ? "active" : ""}`}
        onClick={()=> setActiveTab("Home")}
        >
         Home
        </p>
    </Link>
    <Link to ="/add">
        <p className={`${activeTab === " AddContact " ? "active" : ""}`}
        onClick={()=> setActiveTab("AddContact")}
        >
         Add Contact
        </p>
    </Link>
    <Link to ="/about">
        <p className={`${activeTab === " About " ? "active" : ""}`}
        onClick={()=> setActiveTab("About")}
        >
         About
        </p>
    </Link>
        </div>
    </div>
  )
}
 export default Header;