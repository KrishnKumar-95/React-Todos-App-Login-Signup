import { Login } from "./Login";
import Todo from "./Todo";
import {Route,Routes} from "react-router-dom"
import { Contact } from "./Contact"
import { Signup } from "./Signup";
// import {Reducer} from "./Reducer"
import { Header } from "./Header";
import { Navbar } from "./Navbar";

const App = ()=>{
  return (
    <div>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todos" element={<Todo/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
    // <>
    //   <Reducer />
    // </>
  )
}

export default App