import { createContext, useState } from "react";

export const ContextArea=createContext({})

export function ContextProvider({children}){
  const [user,setUser]= useState<any|null>(null)

  return(
    <ContextArea.Provider
      value={{
        user
      }}
    >
      {children}
    </ContextArea.Provider>
  )
}