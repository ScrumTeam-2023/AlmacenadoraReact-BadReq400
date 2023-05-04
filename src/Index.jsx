// Router
//donde se agregaran y crean las rutas


//[Importaciones]

import React, { useState, createContext, useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage";
import App from "./App";    

//dashboard temporal para probar el LOGIN
import { DashboardPage } from "./pages/DashboardPage/DashboardPage"

export const AuthContext = createContext();
//[codigo Principal]
export const Index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [dataUser,setDataUser] = useState({
        name:'',
        username:'',
        role:''

    })

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token) setLoggedIn(true)
    }, [])
    const routes = createBrowserRouter([
        {

            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            //rutas Hijas
            children: [
                {
                    path: '/',
                    element: <HomePage/>
                  },
                  {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                  },
                //   {
                //     path: '/dashboard',
                //     element: loggedIn ? <DashboardPage/> : <LoginPage/>,
                    
                //   }
               
                
            ]

    }
])

//[HTML entero]
  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
