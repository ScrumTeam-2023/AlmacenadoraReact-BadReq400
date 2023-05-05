//Estos se pueden copiar sin problema a cada Pagina
import React, {useState, useEffect} from 'react'
import axios from 'axios'
<<<<<<< HEAD
import { Box, Modal, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { UserCard } from '../components/UserCard'
//IMPORTANTE: Exportar cada carta respectivamente

=======

import { useParams } from 'react-router-dom' 

import { Box, Modal, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { UserCard } from '../components/UserCard'
//IMPORTANTE: Exportar cada carta respectivamente

>>>>>>> malvarez-2018477

export const UserPage = () => {
  //crear un useState para Usuario (Principal)
  const [user, setUser] = useState([{}])
<<<<<<< HEAD

=======
  //agregar ID
  const { id } = useParams();
>>>>>>> malvarez-2018477
  //crear useState para llamar a la clase relacionada con la principal(Secundario)
  //Ejemplo:
  //Const [admin, setAdmin] = useState ([])
  //                                     ^
  //la diferencia son las llaves, no lleva brackets


  //crear un header
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
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

  //Constante para que la modal Abra y cierre Respectivamente
  const [open, setOpen] = useState(false);

  //Funcionamiento
  //Abierto
  const handleOpen = () => setOpen(true);
  //cerrado
  const handleClose = () => setOpen(false);

  //funcion para OBTENER datos
  //para que muestre datos en la carta
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



  //Funcion para agregar
  const addUser = async()=>{
    try {
                                //este es el id del label (en este caso nombre)
                                //      v           (CUIDADO CON LA FALTA DE ORTOGRAFIA!!!)
                                //Debe tener todo lo del modelo de su respectiva clase
      let user = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSur').value,
        username: document.getElementById('inputUser').value,
        password: document.getElementById('inputPass').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        role: document.getElementById('inputRole').value
      }
        //esta parte va la llamada (REVISEN QUE ESTE BIEN ESCRITO)
// tambien revisen que tenga el tipo de solicitud v
                  const { data } = await axios.post('http://localhost:3200/user/save',user)
        if(data.message){
          Swal.fire({
            title:'Working like goods!',
            icon: 'success',
            text: 'User Added Succesfully!',
            timer: 5000
          })
          getUser()
//para refrescar la pagina ^
        }
    } catch (err) {
<<<<<<< HEAD
=======
      Swal.fire({
        title: 'That.. Was not coffee',
        icon: 'error',
        text: 'Something went Wrong (Trying to Asign a New ADMIN or Something in the backend)'
      })
      alert(err.response.data.message)
    }
  }


  const updateUser = async() =>{
    try {
      let updatedUser = {
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSur').value,
        username: document.getElementById('inputUser').value,
        password: document.getElementById('inputPass').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
        role: document.getElementById('inputRole').value
      }
      const { data } = await axios.put(`http://localhost:3200/user/update/${id}`, updatedUser)
      if(data.user){
        Swal.fire({
          title:'New Cup!',
          icon: 'success',
          text: 'User Modified Succesfully!',
          timer: 2000
        })
      }
      getUser()
    } catch (err) {
      Swal.fire({
        title: 'Welp This is Akward...',
        icon: 'error',
        text: 'Something went Wrong (Trying to Update Worker)'
      })
>>>>>>> malvarez-2018477
      alert(err.response.data.message)
    }
  }

<<<<<<< HEAD
// funcion para modal
// ejecutar mas de una funcion a la vez
=======

>>>>>>> malvarez-2018477

const addThem = async()=>{
  //cerrar modal
  handleClose();
  addUser();
}

//Mostrar
//mostrar los datos almacenados en la DB

useEffect(()=>{
  getUser();
  //aca deberia ir tambien el GET del secundario/Referencial
},[]);

//HTML ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
    
    <>
    <main>
    <div className="left binding color">
      {/* Icono */}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>
          | Users
        </div>

        {/* Botton para Agregar */}
        <div>
          <button className ='btn btn-success mb-5' onClick={handleOpen}>
            Add New User
          </button>
        </div>
         {/* Botton para Agregar */}


<<<<<<< HEAD
=======









>>>>>>> malvarez-2018477
         {/* Modal */}
         <Modal
        //  aca debe ir lo siguente
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        //adentro del pico de la modal
         >
          {/* estilo */}
          <Box sx={style}>
            {/* Titulo de la Modal */}
            <Typography id="modal-modal-title" variant='h6' component="h2">
                  Add user
            </Typography>
            {/* Descripcion y CONTENIDO de la Modal */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <h4>Fill the Labels to add a User</h4>
                <form>

                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputName" required/>
                </div> 

                <div className="mb-3">
                  <label htmlFor="inputSur" className="form-label">surname</label>
                  <input type="text" className="form-control" id="inputSur" required/>
                </div>  

                <div className="mb-3">
                  <label htmlFor="inputUser" className="form-label">UserName</label>
                  <input type="text" className="form-control" id="inputUser" required/>
                </div>  
                
                <div className="mb-3">
                  <label htmlFor="inputPass" className="form-label">password</label>
                  <input type="text" className="form-control" id="inputPass" required/>
                </div>  

                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">EMAIL</label>
                  <input type="text" className="form-control" id="inputEmail" required/>
                </div>  
                
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="inputPhone" required/>
                </div>  

                <div className="mb-3">
                  <label htmlFor="inputRole" className="form-label">New Role</label>
                  <input type="text" className="form-control" id="inputRole" required/>
                </div>  

<<<<<<< HEAD
=======

                </form>
                {/* agregar */}
                <div className="row g-0 justify-content-center">

                <button className="btn btn-success" onClick={()=> addThem()}>Add</button>
                    <br></br>
                    <br></br>
                <button className="btn btn-danger" onClick={handleClose}>nah...</button>

                </div>

                
>>>>>>> malvarez-2018477
                {/* <div className="mb-3"> para los que requieran otra clase
            <label htmlFor="inputAdmin" className="form-label">Admin master</label>
                <select className='form-control' id='inputAdmin'>
                  {
                    admin.map(({_id, name},e)=>{
                      return(
                        <option key={e} value={_id}>{name}</option>
                      )
                    })
                  }
                </select>
              </div> */}
<<<<<<< HEAD

                </form>
                {/* agregar */}
                <div className="row g-0 justify-content-center">

                <button className="btn btn-success" onClick={()=> addThem()}>Add</button>
                    <br></br>
                    <br></br>
                <button className="btn btn-danger" onClick={handleClose}>nah...</button>

                </div>
=======
>>>>>>> malvarez-2018477
            </Typography>
          </Box>
         </Modal>
         {/* Fin del Modal */}

<<<<<<< HEAD
          {/* mostrar Carta */}
=======

          {/* mostrar Carta */}






          
>>>>>>> malvarez-2018477
         <div className=" row g-0 justify-content-center">
          {
            // aca se coloca los datos a mostrar
            user.map(({name, surname, username, email,phone,role}, i)=>{
              return (
                <UserCard
                // ahora algo un tanto pesado
                //colocas ahora el H5 y los P en orden como en la Carta
                  key={i}
                  title={name}
                  surname={surname}
                  username={username}
                  email={email}
                  phone={phone}
                  role={role}
                >
                  
                </UserCard>
              )
            })
          }
        </div> 
    </main>
    
    </>
    )
}