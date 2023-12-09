import { CaretLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useReserve } from "../hooks/useReserve"

export function ListReserve(){
  const {list,deleteReserve} = useReserve()

  return(
    <div className="container">
      <div style={{position:"sticky",top:0,backdropFilter:`blur(20rem)`,padding:10,zIndex:50}}> 
        <h2 style={{marginBottom:0,display:"flex",alignItems:"center"}}>
          <Link to={'/'} role="button" className="outline"><CaretLeft size={32} /></Link>
          <span style={{marginInline:"auto"}}>Reservas</span>
        </h2>
      </div>
      <br />
      <table>
        <thead>
          <tr>  
            <td>id</td>
            <td>livro</td>
            <td>usuario</td>
            <td>cancelar</td>
          </tr>
        </thead>
        <tbody>
          {
            list ? list.map((i: { id: string, book_name: string,user_id:string },index:number)=>
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.book_name}</td>
                <td>{i.user_id}</td>
                <td><button onClick={_=>deleteReserve(i.id)}>cancelar reserva</button></td>
              </tr>
            ):null
          }
        </tbody>
      </table>
    </div>
  )
}