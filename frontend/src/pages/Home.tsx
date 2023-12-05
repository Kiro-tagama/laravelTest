import { Books, CalendarCheck } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export function Home(){

  let accessCommmonUser:any[][] = [
    ['liby',<Books size={32} />,'Biblioteca'],
    ['reservations',<CalendarCheck size={32} />]
  ]

  let accessAdminUser:string[][] = [['libyEditor'],['reservationsEditor']]  

  return(
    <div>
      <h2>Home</h2>
      <div className="listLinksHome">
        {
          accessCommmonUser.map((info)=>
            <Link to={'/'+info[0]} role="button" >
              {info[1]}
              <p style={{margin:0}}>{info[2] || info[0]}</p>
            </Link>
          )
        }
      </div>
    </div>
  )
}