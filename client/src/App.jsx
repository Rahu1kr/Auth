import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";


function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     </Routes>
    </div>
  )
}

export default App


// 1. seting envernment like install packages like react-cookie, react-router-dom, react-toastify
// 2. set main.jsx by importing BrowserRouter and add before <App/>
// 3. create directory pages and file Home.jsx, Login.jsx, Signup.jsx and index.jsx for export them
// 4. initializing login.jsx, signup.jsx, home.jsx by rafce
// 5. in index.jsx export these all
// 6. Now in App.jsx route them
// 7. Update signup page , then login page then home page then css 