import { CaretLeft } from "@phosphor-icons/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface books{
  map:any
  title:string,author:string,description:string
}

export function ListBooks(){
  const [list,setList]= useState<books|null>(null)
  const [query,setQuery]= useState<string>('')

  useEffect(()=>{
    query.length == 0 ?
    axios.get("http://127.0.0.1:8000/api/books").then(res=>setList(res.data.books)) :
    axios.get("http://127.0.0.1:8000/api/books/"+query).then(res=>setList(res.data.books))
  },[query])

  return(
    <div>
      <div style={{position:"sticky",top:0,backdropFilter:`blur(20rem)`,padding:10,zIndex:50}}> 
        <h2 style={{marginBottom:0,display:"flex",alignItems:"center"}}>
          <Link to={'/'} role="button" className="outline"><CaretLeft size={32} /></Link>
          <span style={{marginInline:"auto"}}>Biblioteca</span>
        </h2>
        <br />
        <input type="text" name="" id="" 
        placeholder="Pesquisa ..."
        style={{margin:0}}
        value={query}
        onChange={txt=>setQuery(txt.target.value)}
        />
      </div>
      <br />
      {list ?
        <div className="listBooks">
          {list.map((i:{title:string,author:string,description:string},index : number)=>
            <article key={index}>
              <h3 style={{margin:0}}>{i.title}</h3>
              <h5>{i.author}</h5>
              <details style={{margin:0}}>
                <summary>description</summary>
                {i.description}
              </details>
            </article>
          )}
        </div>
        : <p>Sem Livros</p>
      }
    </div>
  )
}