import axios from "axios"
import { useEffect, useState } from "react"

interface PropsLogin{
  name:string
  email:string
  pass:string
}

export function Login() {
  const [input, setInput] = useState<PropsLogin>({name:'',email:'',pass:''})
  const [type, setType] = useState<boolean>(true)

  useEffect(()=>{
    const data = axios.get("http://127.0.0.1:8000/api/books").then(res=>console.log(res.data))
  },[])

  return(
    <div className="containerLogin">
      <div style={{maxWidth:"20rem"}}>
        <h2>{type ? "Login" : "Cadastro"}</h2>

        {type? null :
          <input type="text" placeholder="Nome" value={input.name} onChange={txt=>setInput({...input,name:txt.target.value})}/>
        }
        
        <input type="email" placeholder="E-Mail" value={input.email} onChange={txt=>setInput({...input,email:txt.target.value})}/>
        <input type="password" placeholder="Senha" value={input.pass} onChange={txt=>setInput({...input,pass:txt.target.value})}/>

        <button>{type ? "Logar" : "Cadastrar"}</button>

        <a style={{textDecoration:"none"}} onClick={()=>setType(!type)}>Alterar para {type ? "Cadastro" : "Login"}</a>
      </div>
    </div>
  )
}