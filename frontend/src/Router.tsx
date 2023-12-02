import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { ContextArea } from "./context/Context";
import { Home } from "./pages/Home";

export function Router() {
  const {user} = useContext(ContextArea)

  return (
    <Routes>
      {user == null ? 
        <Route path="/" element={<Login/>}/>:

        <>
          <Route path="/" element={<Home/>}/>
        </>
      }
    </Routes>
  )
}