import { useContext} from "react"
import { ContextArea } from "../context/Context"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { useLogin } from "../hooks/useLogin"

export function Login() {
  const {LoginWithEmail,CreateWithEmail} = useContext(ContextArea)
  const {
    input,setInput,
    type,setType,
    sec,setSec,
    load,setLoad
  } = useLogin()

  return(
    <div className="containerLogin">
      <div style={{maxWidth:"20rem",width:"auto"}}>
        <h2>{type ? "Login" : "Cadastro"}</h2>

        {type? null :
          <input type="text" placeholder="Nome" value={input.name} style={{height:59}} onChange={txt=>setInput({...input,name:txt.target.value})}/>
        }
        
        <input type="email" autoCapitalize="" placeholder="E-Mail" style={{height:59}} value={input.email} onChange={txt=>setInput({...input,email:txt.target.value})}/>
        <div style={{display:'flex',alignItems:"stretch",alignContent:"stretch"}}>
          <input type={sec?"password":"text"} style={{margin:0,height:59}} placeholder="Senha" value={input.pass} onChange={txt=>setInput({...input,pass:txt.target.value})}/>
          <button className="outline" style={{width:"min-content",margin:0,height:59}} onClick={()=>setSec(!sec)}>
            {sec?<Eye size={32} />:<EyeSlash size={32} />}
          </button>
        </div>
        <br />
        <button
          onClick={()=>{
            setLoad(true)

            type ? LoginWithEmail(input.email,input.pass)
            :CreateWithEmail(input.name,input.email,input.pass)
            
            setTimeout(()=>setLoad(false),2000)
          }}
          disabled={load}
          aria-busy={load}
        >{load? "" : type ? "Logar" : "Cadastrar"}</button>

        <a style={{textDecoration:"none"}} onClick={()=>setType(!type)}>Alterar para {type ? "Cadastro" : "Login"}</a>
      </div>
    </div>
  )
}