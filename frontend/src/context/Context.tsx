import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseURL } from "../api/api";

interface propsUser{
  user: null | {id:string,name:string,email:string}
  admin: boolean
  LoginWithEmail?: any
  CreateWithEmail?:any
  LogOut?:any
}

export const ContextArea=createContext<propsUser>({
  user: null,
  admin:false
})

//@ts-ignore
export function ContextProvider({children}){
  const [user,setUser]= useState<any|null>(null)
  const [admin,setAdmin]= useState<boolean>(false)

  useEffect(()=>{
    const data = localStorage.getItem("userData")
    const dataAdmin = localStorage.getItem("adminData")

    data?setUser(JSON.parse(data)):null
    dataAdmin?setAdmin(JSON.parse(dataAdmin)):null
  },[])

  function LoginWithEmail(email:string,pass:string){
    axios.get(baseURL+`user?email=${email}&password=${pass}`)
    .then(res=>{
      const data=res.data.user
      console.log(data);
      
      localStorage.setItem("userData", JSON.stringify(data));
      setUser(data)

      axios.get(baseURL+'permission')
      .then(res=>{
        const permissions=res.data.permissions
        const idExiste = permissions.some((objeto:{id:string}) => objeto.id === data.id);
        
        localStorage.setItem("adminData", JSON.stringify(idExiste));
        idExiste ? setAdmin(true) : setAdmin(false)
      })
    })
    .catch(_=>{alert("E-mail ou senha incorretos")})
  }

  function CreateWithEmail(name:string,email:string,pass:string){
    axios.post(baseURL+'user',{
      "name":name,
      "email":email,
      "password":pass
    })
    .then(_=>LoginWithEmail(email,pass))
    .catch(err=>{console.log(err)})
  }

  function LogOut() {
    localStorage.removeItem("userData");
    setUser(null)
  }

  return(
    <ContextArea.Provider
      value={{
        user,admin, LoginWithEmail,CreateWithEmail,LogOut
      }}
    >
      {children}
    </ContextArea.Provider>
  )
}