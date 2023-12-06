import { useState } from "react"

interface PropsLogin{
  name:string
  email:string
  pass:string
}

export function useLogin() {
  const [input,setInput] = useState<PropsLogin>({name:'',email:'',pass:''})
  const [type,setType] = useState<boolean>(true)
  const [sec,setSec]= useState<boolean>(true)
  const [load,setLoad]= useState<boolean>(false)

  return{
    input,setInput,
    type,setType,
    sec,setSec,
    load,setLoad,
  }
}