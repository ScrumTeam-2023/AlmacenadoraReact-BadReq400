// Router
//donde se agregaran y crean las rutas


//[Importaciones]
import App from "./App";
import React, { useState, createContext, useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage/HomePage";


export const AuthContext = createContext();
//[codigo Principal]
export const Index = () => {

    const routes = createBrowserRouter([
        {

            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            //rutas Hijas
            children: [
                {
                    path: '/',
                    element:<HomePage/>
                },
            ]

    }
])

//[HTML entero]
  return (
    <AuthContext.Provider value={{}}>
        <RouterProvider router={routes}/>
    </AuthContext.Provider>
  )
}
