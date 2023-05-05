import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import video from "../../assets/mp4/Almacen.mp4";
import { LoginPage } from "../LoginPage";

export const HomePage = () => {
  return (
    <>
      <div class="bg-video-wrap">
        <video
          className="bg-video"
          playsInline="playsinline"
          autoPlay="autolay"
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="masthead">
              <div className="masthead-content text-white">
                <h1 className="text-white fst-italic lh-1 mb-4">
                  Almacenadora
                </h1>
                <div className="masthead-content text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="masthead-content-text">
                          <p>
                            <span className="text-white">
                              Ofrecemos nuestros servicios para Renta y alquiler de almacenes para todo publico.
                              Con una gran variedad de Almacenes para que pudeas guardar tus pertenencias mas Preciadas
                              
                            </span>
                            <br />
                          </p>
                          <br />
                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <Link to='/login'>
            <button type="button" className="btn btn btn-success usuario">
              <i aria-hidden="true"></i>Login
            </button></Link>
            
          </div>
        </div>
      </div>
      <br />
      <br />





















      <div className="text-center">
        <h1>
          Comentarios
        </h1>
      </div>
      <div className="container">
        <div className="row">

          <div className="col">
            <div class="card">
              <img src="https://i.pinimg.com/originals/5f/1c/36/5f1c36cdb434ec3cea948e6c2516f9fe.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Elton Tito</h5>
                <p class="card-text">
                  Que pesimo Servicio :c
                </p>
                <a href="#" class="btn btn-primary">
                 Home
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card">
            <img src="https://public21.es/wp-content/uploads/2016/10/foto-perfil-redonda.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Marta Cabrera</h5>
                <p class="card-text">
                  Tienen un buen servicio ya que nos da oportunidad de almacenar cosas de mi empresa.
                </p>
                <a href="#" class="btn btn-primary">
                  Home
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card">
            <img src="https://www.mariajesusmusica.com/uploads/1/2/6/7/12672556/perfil14_orig.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Monse Tejon</h5>
                <p class="card-text">
                  El servicio es Genial pero aveces no tengo contacto con ellos pero almenos mis cosas estan seguras 
                </p>
                <a href="#" class="btn btn-primary">
                  Home
                </a>
              </div>
            </div>
          </div>







        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
           
                <div className="masthead-content text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        
                            <br />
                        
                          <br />
                          
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

         
        </div>
      </div>
      <br />
      <br />
      <div className="text-center">
        <h1>
         Reseñas
        </h1>
      </div>
      <div className="container">
        <div className="row">

          <div className="col">
            <div class="card">
              <img src="https://i.pinimg.com/originals/5f/1c/36/5f1c36cdb434ec3cea948e6c2516f9fe.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Elton Tito</h5>
                <p class="card-text">
                  Terrible
                  <br />
                  ⭐
                </p>
                <a href="#" class="btn btn-primary">
                 Home
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card">
            <img src="https://public21.es/wp-content/uploads/2016/10/foto-perfil-redonda.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Marta Cabrera</h5>
                <p class="card-text">
                Exelente
                  <br />
                  ⭐⭐⭐⭐⭐
                </p>
                <a href="#" class="btn btn-primary">
                  Home
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div class="card">
            <img src="https://www.mariajesusmusica.com/uploads/1/2/6/7/12672556/perfil14_orig.png" width="100" height="100"/>
              <div class="card-body">
                <h5 class="card-title">Monse Tejon</h5>
                <p class="card-text">
                Bueno
                  <br />
                  ⭐⭐⭐⭐
                </p>
                <a href="#" class="btn btn-primary">
                  Home
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>









      <br />
      <div className="container">
        <div className="row">
          <div className="col">
           
                <div className="masthead-content text-white">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        
                            <br />
                        
                          <br />
                          
                        </div>
                      </div>
                    </div>
                  </div>
          </div>

         
        </div>
      </div>
      <br />
      <br />
      <div className="text-center">
        <h1>
         Nuestras Redes
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <br />
      <div className="container">
        <div className="row">
          <div className="col">
                <div className="masthead-content text-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                            <br />
                          <br />
                          <div class="card">
  <div class="card-header">
    Buscanos en nuestras redes sociales.
  </div>
  
  <div class="card-body">
    
    <a
                            href="https://www.facebook.com/almacen/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook fa-2x"></i>
                          </a>
                          &nbsp;
                          <a
                            href="https://www.instagram.com/almacen/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram fa-2x"></i>
                          </a>
                          &nbsp;
                          <a
                            href="https://www.youtube.com/channel/UC-01-2019-0000-0000-0000"
                            target="_blank"
                          >
                            <i className="fab fa-youtube fa-2x"></i>
                          </a>
                          <br />
    <a href="#" class="btn btn-primary">Home</a>
  </div>
</div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </div>
            </div>
          </div>

   
      
      
    </>
  );
};
