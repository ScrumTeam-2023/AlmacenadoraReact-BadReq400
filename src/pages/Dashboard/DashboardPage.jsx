import React, { useState, useContext} from 'react'
import './DashboardStyle.css'
//import { UserPage } from '../UserPage';
//import { CellarsPage } from '../CellarsPage';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Index';
import { Outlet, Link } from 'react-router-dom';


export const DashboardPage = () => {

    const { setLoggedIn, dataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    //const [isAdmin, setIsAdmin] = useState(false);

    /*const [showUser, setShowUser]  = useState(false);
    const[showAppointment, setShowAppointment] = useState(false)

    const cambio = (props)=>{
        setShowUser(false);
        setShowAppointment(false);
          
        props == 'user' ? setShowUser(true)
        : setShowAppointment(false)
    }*/

    const logOut = ()=>{
        localStorage.clear();
        setLoggedIn(false)
        navigate('/login')
    }

  
    return (
        <>
            <div id='body' >
                <section id='sidebar' >
                    <a className="brand ms-5">
                        <span className='text mt-5'>Almacenadora BADREQ400</span>
                    </a>
                    <ul className='side-menu top'>
                        <li>
                            <button>
                                <span className='text'>Control Panel</span>
                            </button>
                        </li>
                        <ul>                        
                        <li>
                            <Link to= 'arrenda'>
                                <button>
                                    <span className='text'>ARRENDAMIENTOS</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to= 'client'>
                                <button>
                                    <span className='text'>CLIENTS</span>
                                </button>
                            </Link>
                        </li>
                        </ul>
                        {
                            dataUser.role == 'ADMIN' ? (
                            <ul>
                            <li>
                                <Link to= 'users'>
                                    <button>
                                        <span className='text'>USERS</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to= 'cellar'>
                                    <button>
                                        <span className='text'>BODEGAS</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to= 'account'>
                                    <button>
                                        <span className='text'>CUENTAS</span>
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link to= 'addServices'>
                                    <button>
                                        <span className='text'>SERVICIOS ADICIONALES</span>
                                    </button>
                                </Link>
                                
                            </li>
                            </ul>
                            ): <></>
                        }  
                        </ul>
                        <ul className='side-menu top'>
                        <li>
                            <button>
                                <span className='text'>WELCOME: {dataUser.username}</span>
                            </button>
                        </li> 
                        <li>
                            <button>
                                <span className='text'>SETTINGS</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={logOut}>
                                <span className='text'>LOGOUT</span>
                            </button>
                        </li>
                    </ul>
                </section>
                <section id='content'>
                    <Outlet></Outlet>
                </section>
            </div>
        </>
    )
}