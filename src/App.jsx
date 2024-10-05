import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  

  return (
    <div> 
      <Routes> 

        <Route path = '/' element = {<HomePage />} />
        <Route path = '/signup' element = {<SignUpPage />} />
        <Route path = '/login' element = {<LoginPage />} />

       </Routes>
    </div> 
  );
}

export default App
