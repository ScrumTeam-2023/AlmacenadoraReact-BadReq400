//Estos se pueden copiar sin problema a cada Pagina
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Modal, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { ClientCard } from '../components/ClientCard'
//IMPORTANTE: Exportar cada carta respectivamente


export const ClientPage = () => {
  //crear un useState para Usuario (Principal)
<<<<<<< HEAD
<<<<<<< HEAD
  const [client, setClient] = useState([{}])
=======
 const [client, setClient] = useState([{}])
>>>>>>> malvarez-2018477
=======
 const [client, setClient] = useState([{}])
>>>>>>> ctomas

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
  
  const getClient = async()=>{
    try {
      const { data } = await axios.get('http://localhost:3200/client/gets')
      if(data.client)
          //aca debe ir el nombre de la ruta que deseamos acceder (en este caso Usuarios (user))
      {
        setClient(data.client)
        console.log(data.client)
      }
      
    } catch (err) {
      console.error(err)
    }
  }



  //Funcion para agregar
  const addClient = async()=>{
    try {
                                //este es el id del label (en este caso nombre)
                                //      v           (CUIDADO CON LA FALTA DE ORTOGRAFIA!!!)
                                //Debe tener todo lo del modelo de su respectiva clase
      let client = {
        name: document.getElementById('inputName').value,
<<<<<<< HEAD
<<<<<<< HEAD
        description: document.getElementById('inputDescription').value,
=======
        surname: document.getElementById('inputSur').value,
>>>>>>> malvarez-2018477
=======
        surname: document.getElementById('inputSur').value,
>>>>>>> ctomas
        phone: document.getElementById('inputPhone').value,
      }
        //esta parte va la llamada (REVISEN QUE ESTE BIEN ESCRITO)
// tambien revisen que tenga el tipo de solicitud v
                  const { data } = await axios.post('http://localhost:3200/client/save', client)
        if(data.message){
          Swal.fire({
            title:'Working like goods!',
            icon: 'success',
            text: 'Client Added Succesfully!',
            timer: 5000
          })
          getClient()
//para refrescar la pagina ^
        }
    } catch (err) {
      alert(err.response.data.message)
    }
  }

// funcion para modal
// ejecutar mas de una funcion a la vez

const addThem = async()=>{
  //cerrar modal
  handleClose();
  addClient();
}

//Mostrar
//mostrar los datos almacenados en la DB

useEffect(()=>{
  getClient();
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
<<<<<<< HEAD
<<<<<<< HEAD
          | Account
=======
          | Client
>>>>>>> malvarez-2018477
=======
          | Client
>>>>>>> ctomas
        </div>

        {/* Botton para Agregar */}
        <div>
          <button className ='btn btn-success mb-5' onClick={handleOpen}>
            Add New Client
          </button>
        </div>
         {/* Botton para Agregar */}


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
<<<<<<< HEAD
<<<<<<< HEAD
                  Add Account
=======
                  Add Client
>>>>>>> malvarez-2018477
=======
                  Add Client
>>>>>>> ctomas
            </Typography>
            {/* Descripcion y CONTENIDO de la Modal */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <h4>Fill the Labels to add a Client</h4>
                <form>
                

                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputName" required/>
                </div> 

                <div className="mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
                  <label htmlFor="inputSur" className="form-label">Description</label>
=======
                  <label htmlFor="inputSur" className="form-label">Surname</label>
>>>>>>> malvarez-2018477
=======
                  <label htmlFor="inputSur" className="form-label">Surname</label>
>>>>>>> ctomas
                  <input type="text" className="form-control" id="inputSur" required/>
                </div>  
                
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="inputPhone" required/>
                </div>  

                
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

                </form>
                {/* agregar */}
                <div className="row g-0 justify-content-center">

                <button className="btn btn-success" onClick={()=> addThem()}>Add</button>
                    <br></br>
                    <br></br>
                <button className="btn btn-danger" onClick={handleClose}>nah...</button>

                </div>
            </Typography>
          </Box>
         </Modal>
         {/* Fin del Modal */}

          {/* mostrar Carta */}
         <div className=" row g-0 justify-content-center">
          {
            // aca se coloca los datos a mostrar
            client.map(({name, surname, phone}, i)=>{
              return (
                <ClientCard
                // ahora algo un tanto pesado
                //colocas ahora el H5 y los P en orden como en la Carta
                  key={i}
                  title={name}
                  surname={surname}
                  phone={phone}
                ></ClientCard>
              )
            })
          }
        </div> 
    </main>
    
    </>
    )
}