import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { ContextArea } from "./context/Context";
import { Home } from "./pages/Home";
import { ListBooks } from "./pages/ListBooks";
import { ListReserve } from "./pages/ListReserve";

export function Router() {
  const {user} = useContext(ContextArea)

  
  const pages=(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="liby" element={<ListBooks/>}/>
      <Route path="reservations" element={<ListReserve/>}/>
    </>
  )

  return (
    <Routes>
      {user == null ? <Route path="/" element={<Login/>}/> : pages}
      <Route path="*" element={<ListBooks/>}/>
    </Routes>
  )
}