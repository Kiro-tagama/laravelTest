import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ContextArea } from "../context/Context"

interface PropsLogin{
  name:string
  email:string
  pass:string
}

export function Login() {
  const [input, setInput] = useState<PropsLogin>({name:'',email:'',pass:''})
  const [type, setType] = useState<boolean>(true)

  //@ts-ignore
  const {LoginWithEmail,CreateWithEmail} = useContext(ContextArea)

  return(
    <div className="containerLogin">
      <div style={{maxWidth:"20rem"}}>
        <h2>{type ? "Login" : "Cadastro"}</h2>

        {type? null :
          <input type="text" placeholder="Nome" value={input.name} onChange={txt=>setInput({...input,name:txt.target.value})}/>
        }
        
        <input type="email" placeholder="E-Mail" value={input.email} onChange={txt=>setInput({...input,email:txt.target.value})}/>
        <input type="password" placeholder="Senha" value={input.pass} onChange={txt=>setInput({...input,pass:txt.target.value})}/>

        <button
          onClick={()=>{
            type ? LoginWithEmail(input.email,input.pass)
            :CreateWithEmail(input.name,input.email,input.pass)
          }}
        >{type ? "Logar" : "Cadastrar"}</button>

        <a style={{textDecoration:"none"}} onClick={()=>setType(!type)}>Alterar para {type ? "Cadastro" : "Login"}</a>
      </div>
    </div>
  )
}