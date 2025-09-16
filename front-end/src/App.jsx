import React from "react";
import Register from "./modules/user/pages/Register";
import Login  from "./modules/user/pages/Login";
import { Button } from "@radix-ui/themes";
import { AppRoutes } from "./shared/routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { UrlShort } from "./modules/urlshortener/pages/UrlShort";

function App(){
  const navigate = useNavigate();
  return (
    <>
     <Button onClick={()=>{
      navigate("/register");

     } } variant="classic" type="button" size="3"  style={{margin: 3 }}>
        Register
        </Button>
        <Button onClick= {()=>{
          navigate("/login");

        }} variant="surface" type="button" size="3"  style={{margin: 3 }}>
        Login
        </Button>


        <AppRoutes/>
   
    </>
  
  );
}
export default App;
