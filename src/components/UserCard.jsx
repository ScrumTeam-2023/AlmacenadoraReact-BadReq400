import React from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Modal, Typography } from '@mui/material'
                    //SE CREA UNA CARTA POR ENTIDAD!
                    //el titulo se deja!
export const UserCard = ({title, surname, username, email,phone,role}) => {

  //crear un useState para Usuario (Principal)
  const [user, setUser] = useState([{}])
  const { id } = useParams();
  //para Actualizar con un referencial usar de referencia (ProductManagerReact)
  //Ejemplo
  // const [admin , setAdmin] = useState([{}])
                                  // se cambia a string Literal + el ID elegido


 const getUser = async()=>{
    try {
      const { data } = await axios.get('http://localhost:3200/user/get')
      if(data.user)
          //aca debe ir el nombre de la ruta que deseamos acceder (en este caso Usuarios (user))
      {
        setUser(data.user)
        console.log(data.user)
      }
      
    } catch (err) {
      console.error(err)
    }
  }



  //se agrega un estilo para la Modal (para todas las Cartas)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  //Funcionamiento
  //Abierto
  const handleOpen = () => setOpen(true);
  //cerrado
  const handleClose = () => setOpen(false);


  const updateUser= async() =>{
    try {
      let updateUser = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSur').value,
        userame: document.getElementById('inputUser').value,
        password: document.getElementById('inputPass').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        role: document.getElementById('inputRole').value

      }
    } catch (err) {
      console.log('Error at Editin in Card from User')
    }
  }

  const updateAll = async()=>{
    updateUser();
    handleClose()
  }




  const DeleteUser= async(id) =>{
   try {
    let confirmDelete = confirm('Are you sure to delete this User?')
    if(confirmDelete){
        const { data } = await axios.delete(`http://localhost:3200/user/delete/${id}`)
      
        alert(`Thy kind is Dead`)
      }
      location.reload()
   } catch (err) {
    console.error(err)
    
   }
  }



useEffect(()=>{
  getUser();
  //aca deberia ir tambien el GET del secundario/Referencial
},[]);

  return (
    <>
        <div className="card m-3 g-0" style={{maxWidth: '18rem', maxHeight: '20rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{surname}</p>
                    <p className="card-text">{username}</p>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{role}</p>

                    <div className='grid gap-3'>
                        {/* EDITAR */}
                    <span className='p-2 g-col-6' onClick={()=> handleOpen()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                   </svg> 
                        
                    </span>
                        {/* ELIMINAR */}
                    <span className='p-2 g-col-6' onClick={()=> DeleteUser({id})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                    </svg> 
                    </span>
                    </div>  
                    
                   

                    
                </div>
        </div>
    </>
  )
}
