import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { useContext } from "react";
import { ContextArea } from "./context/Context";
import { Home } from "./pages/Home";
import { ListBooks } from "./pages/ListBooks";
import { ListReserve } from "./pages/ListReserve";
import { AdmUsers } from "./pages/AdmUsers";

export function Router() {
  const {user,admin} = useContext(ContextArea)

  
  const pages=(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="liby" element={<ListBooks/>}/>
      <Route path="reservations" element={<ListReserve/>}/>
      {admin ? <Route path="adm" element={<AdmUsers/>}/> : null}
    </>
  )

  return (
    <Routes>
      {user == null ? <Route path="/" element={<Login/>}/> : pages}
      <Route path="*" element={<ListBooks/>}/>
    </Routes>
  )
}