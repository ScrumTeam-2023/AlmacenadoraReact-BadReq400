//Estos se pueden copiar sin problema a cada Pagina
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Modal, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { AccountCard } from '../components/AccountCard'
//IMPORTANTE: Exportar cada carta respectivamente


export const AccountPage = () => {
  //crear un useState para Usuario (Principal)
  const [account, setAccount] = useState([{}])

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
  
  const getAccount = async()=>{
    try {
      const { data } = await axios.get('http://localhost:3200/account/get-accounts')
      if(data.account)
          //aca debe ir el nombre de la ruta que deseamos acceder (en este caso Usuarios (user))
      {
        setAccount(data.account)
        console.log(data.account)
      }
      
    } catch (err) {
      console.error(err)
    }
  }



  //Funcion para agregar
  const addAccount = async()=>{
    try {
                                //este es el id del label (en este caso nombre)
                                //      v           (CUIDADO CON LA FALTA DE ORTOGRAFIA!!!)
                                //Debe tener todo lo del modelo de su respectiva clase
      let account = {
        dpi: document.getElementById('inputDpi').value,
        name: document.getElementById('inputName').value,
        surname: document.getElementById('inputSurname').value,
        age: document.getElementById('inputAge').value,
        email: document.getElementById('inputEmail').value,
        phone: document.getElementById('inputPhone').value,
      }
        //esta parte va la llamada (REVISEN QUE ESTE BIEN ESCRITO)
// tambien revisen que tenga el tipo de solicitud v
                  const { data } = await axios.post('http://localhost:3200/account/add-account',account)
        if(data.message){
          Swal.fire({
            title:'Working like goods!',
            icon: 'success',
            text: 'Account Added Succesfully!',
            timer: 5000
          })
          getAccount()
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
  addAccount();
}

//Mostrar
//mostrar los datos almacenados en la DB

useEffect(()=>{
  getAccount();
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
          | Account
        </div>

        {/* Botton para Agregar */}
        <div>
          <button className ='btn btn-success mb-5' onClick={handleOpen}>
            Add New Account
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
                  Add Account
            </Typography>
            {/* Descripcion y CONTENIDO de la Modal */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <h4>Fill the Labels to add a Account</h4>
                <form>
                
                <div className="mb-3">
                  <label htmlFor="inputDpi" className="form-label">DPI</label>
                  <input type="text" className="form-control" id="inputDpi" required/>
                </div>  

                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputName" required/>
                </div> 

                <div className="mb-3">
                  <label htmlFor="inputSurname" className="form-label">surname</label>
                  <input type="text" className="form-control" id="inputSurname" required/>
                </div>  
                

                <div className="mb-3">
                  <label htmlFor="inputAge" className="form-label">Age</label>
                  <input type="text" className="form-control" id="inputAge" required/>
                </div>  


                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">EMAIL</label>
                  <input type="text" className="form-control" id="inputEmail" required/>
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
            account.map(({dpi, name, surname, age, email, phone}, i)=>{
              return (
                <AccountCard
                // ahora algo un tanto pesado
                //colocas ahora el H5 y los P en orden como en la Carta
                  key={i}
                  title={dpi}
                  name={name}
                  surname={surname}
                  age={age}
                  email={email}
                  phone={phone}
                ></AccountCard>
              )
            })
          }
        </div> 
    </main>
    
    </>
    )
}