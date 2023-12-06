import { propsModalBook, useBooks } from "../hooks/useBooks"

interface propsData{
  data: propsModalBook
  setData: any
}

export function ModalEditBook({data,setData}:propsData){
  const {createBook,updateBook} = useBooks()
  const {active,funct,id,title,author,description} = data

  return(
    <dialog open={active} onClick={()=>setData({active:false,funct:'',id:'',title:'',author:'',description:''})}>
      <article>
        <h2>{funct}</h2>

        {id? <input value={id} disabled/>:null}

        <input type="text" placeholder="Titulo" value={title} onChange={txt=>setData({...data,title:txt.target.value})}/>
        <input type="text" placeholder="Autor" value={author} onChange={txt=>setData({...data,author:txt.target.value})}/>
        <textarea placeholder="Descrição ..." value={description} onChange={txt=>setData({...data,description:txt.target.value})}/>

        <button onClick={()=>funct == "Adicionar" ? createBook(data) : updateBook }>Salvar</button>
        <button onClick={()=>setData({active:false,funct:'',id:'',title:'',author:'',description:''})}
        className="outline">Cancelar</button>
      </article>
    </dialog>
  )
}