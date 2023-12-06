import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { baseURL } from "../api/api"
import { ContextArea } from "../context/Context"

export interface propsBooks{
  map?:any
  id:string
  title:string
  author:string
  description:string
}

export interface propsModalBook extends propsBooks{
  active:boolean
  funct:'Editar'|'Adicionar'

}

export function useBooks(){
  const {user}=useContext(ContextArea)

  const [list,setList]= useState<propsBooks|null>(null)
  const [query,setQuery]= useState<string>('')

  const [modalBook,setModalBook]= useState<propsModalBook>({
    active:false,funct:'Adicionar',
    id:'',title:'',author:'',description:''
  })

  useEffect(()=>{
    query.length == 0 ?
    axios.get(baseURL+"books/").then(res=>setList(res.data.books)) :
    axios.get(baseURL+"books/"+query).then(res=>setList(res.data.books))
  },[query])

  function reserveBook(bookID:string,bookName:string){
    if(user)
    axios.post(baseURL+"reserve/",{
      "user_id":user.id,
      "book_id":bookID,
      "book_name":bookName
    })
    .then(()=>alert("Livro Reservado"))
    .catch(()=>alert("Erro na Reserva"))
  }

  function createBook(data:propsModalBook){
    axios.post(baseURL+"books/",{
      "title":data.title,
      "author":data.author,
      "description":data.description
    })
    .then(()=>{
      alert("Livro Criado")
      setModalBook({active:false,funct:'Adicionar',
      id:'',title:'',author:'',description:''})
      location.reload()
    })
    .catch(()=>{
      alert("erro ao criar livro")
    })
  }

  function updateBook(){

  }

  return{
    list,query,setQuery,reserveBook,
    modalBook,setModalBook,createBook,updateBook
  }
}