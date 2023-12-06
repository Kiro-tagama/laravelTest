import { Books, CalendarCheck, SignOut } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextArea } from "../context/Context"

export function Home(){
  const {user,LogOut}=useContext(ContextArea)

  let access:any[][] = [
    ['liby',<Books size={32} />,'Biblioteca'],
    ['reservations',<CalendarCheck size={32} />,'Reservas']
  ]

  return(
    <div>
      <div style={{display:"flex",alignItems:"center"}}>
        <h2 style={{flex:1}}>Home</h2>
        <div style={{display:"flex",gap:10}}>
          <span>{user ? <p style={{textAlign:"end"}}>{user.name} <br /> {user.email}</p> : null}</span>
          <br />
          <button className="outline SignOut"
          onClick={()=>{LogOut()}}
          ><SignOut size={32} /></button>
        </div>
      </div>
      <br />
      <div className="listLinksHome">
        {
          access.map((info,index)=>
            <Link to={'/'+info[0]} role="button" key={index}>
              {info[1]}
              <p style={{margin:0}}>{info[2] || info[0]}</p>
            </Link>
          )
        }
      </div>
    </div>
  )
}