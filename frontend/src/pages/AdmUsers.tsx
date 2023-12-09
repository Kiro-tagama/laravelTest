import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ContextArea } from "../context/Context";
import { Link } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";

export function AdmUsers(){
  const {user}=useContext(ContextArea)
  const [list,setList] = useState()
  
  useEffect(()=>{
    user==null ? null :
    axios.get("http://127.0.0.1:8000/api/alluser/")
    .then(res=>{
      const data=res.data.users
      const filteredData = data.filter((item:{id:string}) => item.id !== user.id);
      setList(filteredData);
    })
  },[])

  return(
    <div className="container">
      <div style={{position:"sticky",top:0,backdropFilter:`blur(20rem)`,padding:10,zIndex:50}}> 
        <h2 style={{marginBottom:0,display:"flex",alignItems:"center"}}>
          <Link to={'/'} role="button" className="outline"><CaretLeft size={32} /></Link>
          <span style={{marginInline:"auto"}}>ADM</span>
        </h2>
      </div>
      <table>
        <thead>
          <tr>  
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {
            list ? list.map((i: { name: string, email: string },index:number)=>
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.email}</td>
              </tr>
            ):null
          }
        </tbody>
      </table>
    </div>
  )
}