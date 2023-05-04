import React from 'react'
import { Card } from '../components/Card'

export const UserPage = () => {
    return (
    
    <>
    <div className=" row g-0 justify-content-center">
          {
            clase.map(({name, description, age}, i)=>{
              return (
                <Card
                  key={i}
                  title={name}
                  description={description}
                  age={age}
                ></Card>
              )
            })
          }
        </div> 
    </>
    )
}