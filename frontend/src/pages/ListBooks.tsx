import { CaretLeft } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { propsBooks, useBooks } from "../hooks/useBooks"
import { ContextArea } from "../context/Context"
import { useContext } from "react"
import { ModalEditBook } from "../components/ModalEditBook"

export function ListBooks(){
  const {admin}=useContext(ContextArea)
  const {list,query,setQuery,reserveBook,modalBook,setModalBook} =useBooks()  

  return(
    <div className="container">
      <div style={{position:"sticky",top:0,backdropFilter:`blur(20rem)`,padding:10,zIndex:50}}> 
        <h2 style={{marginBottom:0,display:"flex",alignItems:"center"}}>
          <Link to={'/'} role="button" className="outline"><CaretLeft size={32} /></Link>
          <span style={{marginInline:"auto"}}>Biblioteca</span>
        </h2>
        <br />
        <div style={{display:"flex",gap:10}}>
          <input type="text" name="" id="" 
          placeholder="Pesquisa ..."
          style={{margin:0}}
          value={query}
          onChange={txt=>setQuery(txt.target.value)}
          />
          {
            admin? <button onClick={()=>setModalBook({...modalBook,active:true,funct:"Adicionar"})} style={{width:"10rem"}}>add book</button> 
            :null
          }
        </div>
      </div>
      <br />
      {list && list.length != 0 ?
        <div className="listBooks">
          {list.map((i:propsBooks,index : number)=>
            <article key={index} style={{display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
              <div>
                <h3 style={{margin:0}}>{i.title}</h3>
                <h5>{i.author}</h5>
                <details>
                  <summary>description</summary>
                  {i.description}
                </details>
              </div>
              { admin?
                <div className="grid" style={{gap:10}}>
                  <button style={{margin:0}} onClick={()=>setModalBook({...i,active:true,funct:"Editar"})}>Editar</button>
                  <button style={{margin:0}} className="outline">Apagar</button>
                </div>:
                <button style={{margin:0}} onClick={()=>reserveBook(i.id,i.title)}>Reservar</button>
              }
            </article>
          )}
        </div>
        : <p style={{textAlign:"center"}}>Sem Livros</p>
      }
      <ModalEditBook data={modalBook} setData={setModalBook}/>
    </div>
  )
}