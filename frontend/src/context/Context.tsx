import axios from "axios";
import { createContext, useState } from "react";
import { baseURL } from "../api/api";

export const ContextArea=createContext({})

//@ts-ignore
export function ContextProvider({children}){
  const [user,setUser]= useState<any|null>(null)

  function LoginWithEmail(email:string,pass:string){
    axios.get(baseURL+`user?email=${email}&password=${pass}`)
    .then(res=>{
      console.log("login ok");
      setUser(res.data)
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

  return(
    <ContextArea.Provider
      value={{
        user, LoginWithEmail,CreateWithEmail
      }}
    >
      {children}
    </ContextArea.Provider>
  )
}