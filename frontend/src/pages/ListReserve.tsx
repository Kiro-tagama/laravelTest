import { CaretLeft } from "@phosphor-icons/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function ListReserve(){
  const [list,setList] = useState()
  console.log(list);
  
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/reserve/").then(res=>setList(res.data.reserve))
  },[])

  return(
    <div>
      <div style={{position:"sticky",top:0,backdropFilter:`blur(20rem)`,padding:10,zIndex:50}}> 
        <h2 style={{marginBottom:0,display:"flex",alignItems:"center"}}>
          <Link to={'/'} role="button" className="outline"><CaretLeft size={32} /></Link>
          <span style={{marginInline:"auto"}}>Reservas</span>
        </h2>
      </div>
      <br />
      <div>

      </div>
    </div>
  )
}