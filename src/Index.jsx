// Router
//donde se agregaran y crean las rutas


//[Importaciones]

import React, { useState, createContext, useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { UserPage } from "./pages/UserPage";
import { CellarsPage } from "./pages/CellarsPage";
import { AddServicesPage } from "./pages/AddServicesPage";
import { AccountPage } from "./pages/AccountPage";
import { LeasePage } from "./pages/LeasePage";
import { ClientPage } from "./pages/ClientPage";
import App from "./App";    


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
                   {
                     path: '/dashboard',
                     element: loggedIn ? <DashboardPage/> : <LoginPage/>,    
                    children: [
                      {
                        path: 'users',
                        element: <UserPage/>
                      },
                      {
                        path: 'cellar',
                        element: <CellarsPage/>
                      },
                      {
                        path: 'addServices',
                        element: <AddServicesPage/>
                      },
                      {
                        path: 'account',
                        element: <AccountPage/>
                      },
                      {
                        path: 'arrenda',
                        element: <LeasePage/>
                      },
                      {
                        path: 'client',
                        element: <ClientPage/>
                      }
                    ]
                    }
               
                
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
