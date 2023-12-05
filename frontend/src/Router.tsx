import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { ContextArea } from "./context/Context";
import { Home } from "./pages/Home";
import { ListBooks } from "./pages/ListBooks";

export function Router() {
  const {user} = useContext(ContextArea)

  return (
    <Routes>
      {user ?<Route path="/" element={<Home/>}/> : <Route path="/" element={<Login/>}/>}
      <Route path="liby" element={<ListBooks/>}/>
    </Routes>
  )
}