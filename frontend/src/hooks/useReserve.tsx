import { useContext, useEffect, useState } from "react"
import { ContextArea } from "../context/Context"
import axios from "axios";

export function useReserve(){
  const {admin,user} = useContext(ContextArea)

  const [list,setList] = useState()
  
  useEffect(()=>{
    user==null ? null : 
    admin ? axios.get("http://127.0.0.1:8000/api/reserve/").then(res=>setList(res.data.reserve))
    :axios.get("http://127.0.0.1:8000/api/reserve/"+user.id).then(res=>setList(res.data.reserve))
  },[])

  function deleteReserve(id:string) {
    axios.delete("http://127.0.0.1:8000/api/reserve/"+id)
    .then(res=>alert("reserva deletada"))
    .catch(err=>console.log(err))

    location.reload()
  }

  return{
    list,deleteReserve
  }
}