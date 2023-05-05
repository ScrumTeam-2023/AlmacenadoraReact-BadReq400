import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import video from "../../assets/mp4/Almacen.mp4";
<<<<<<< HEAD
import { LoginPage } from "../LoginPage";
=======
>>>>>>> axiquin

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
<<<<<<< HEAD

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

   
      
      
=======
      <header class="bg-header-image bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden ">
        <div class="header-top bg-eerie-black min-h-[48px] flex items-center font-barlow py-3 ">
          <div class="container max-w-[1200px] mx-auto lg:flex lg:justify-between ">
            <div class="header-top-left flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start "></div>
            <ul class="flex items-center justify-center py-1">
              <button class=" w-full h-[44px] px-7 uppercase flex items-center justify-center bg-lion   ">
                Login
              </button>
            </ul>
          </div>
        </div>
        <div class="header-main px-3 flex-1 flex">
          <div class="container max-w-[1200px] mx-auto flex flex-col">
            <nav class="py-5 md:flex md:justify-between">
              <div class="flex justify-between">
                <a class="font-gilda text-[28px] font-normal text-lion">
                  Almacenadora<span class="text-white">-BadRq404</span>
                </a>
              </div>
            </nav>
            <div class="text-center flex-1 flex items-center justify-stretch flex-col text-center py-12">
              <h1 class="text-2xl xs:text-[32px] text-white font-gilda tracking-[.04em] uppercase font-normal max-w-[800px] ">
                Acá puedes almacenar tus productos importados y pagar los
                impuestos de manera parcial, cuando lo necesites
              </h1>
              <a
                href="#"
                class="min-w-[158px] min-h-[48px] bg-transparent uppercase text-white border-2 font-barlow tracking-widest text-base font-normal inline-flex items-center justify-center mt-9 md:mt-[60px] hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Mas
              </a>
            </div>
          </div>
        </div>
      </header>
      <section class="py-16 px-3 bg-light-gray">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Reseñas
          </h2>
          <div class="flex items-center justify-center">
            <img src="../assets/images/decorated-pattern-2.svg" alt="" />
          </div>
          <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-10">
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Sofia Herrera
                </span>
                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Cristian Chali
                </span>

                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_680"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Margaret Roger
                </span>
                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://cuidadores.unir.net/images/dossier-prensa/np/Foto_-Luis_Cuervo.jpg"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Mart Zucarit
                </span>
                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://img.freepik.com/fotos-premium/concepto-negocio-tecnologia-personas-empresaria-portatil-sobre-fondo-blanco_230311-32473.jpg"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Hana De Arriaza
                </span>
                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
            <div class="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
              <img
                src="https://hubspot.contentools.com/api/v1/media/164474/download/"
                class="w-full h-full object-cover"
                alt=""
              />
              <div class="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                <span class="font-barlow text-lg font-normal">
                  Kaleb Hanson
                </span>
                <ul class="flex items-center">
                  <h1>⭐⭐⭐⭐⭐</h1>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-16 px-3 bg-banner-image bg-center bg-cover bg-fixed bg-no-repeat">
        <div class="container max-w-[1200px] mx-auto">
          <h2 class="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
            Servicios
          </h2>
          <div class="flex items-center justify-center">
            <img src="../assets/images/decorated-pattern-2.svg" alt="" />
          </div>
          <div class="grid gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3">
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://www.residenciasarria.com/blog/wp-content/uploads/2016/10/productos-limpieza.jpg"
                class="w-[5px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Limpieza
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                Lipieza en donde se guardan los productos.
              </p>
            </div>
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://www.laarcom.com/uploads/blog/3d4509dd8ae425fcb8955ce31af1891972911470.jpeg?v04242023"
                class="w-[5}px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Seguridad
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                Ofrecemos una seguridad de alto nivel, las 24 horas del dia.
              </p>
            </div>
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://reysoler.com/wp-content/uploads/2021/11/Alquiler-almacen-autonomos-empresas-1.jpg"
                class="w-[5px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Alquiler
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                Ofrecemos un lugar amplio u seguro para guardar sus cosas
              </p>
            </div>
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://pqs.pe/wp-content/uploads/2021/02/bsf_3.jpg"
                class="w-[5px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Envios
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                Le ofrecemos envios a todo el pais, dentro y fuera, con la mayor
                seguridad.
              </p>
            </div>
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://mecaluxes.cdnwm.com/blog/img/almacenamiento-frio-estanterias.1.1.jpg"
                class="w-[5px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Servicio climatizado
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                Servicios de almacenamiento climatizado para proteger las
                pertenencias del cliente de las fluctuaciones de temperatura y
                humedad.
              </p>
            </div>
            <div class="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
              <img
                src="https://www.onovatec.com/wp-content/uploads/2020/05/5b-ControlDeAcceso.jpg"
                class="w-[5px]"
              />
              <h4 class="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                Control de acceso
              </h4>
              <p class="text-white text-base font-barlow font-light tracking-[.04em]">
                La empresa de almacenamiento pueden proporcionar a los clientes
                un código de acceso para que puedan acceder a su espacio de
                almacenamiento en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="bg-nero py-16 px-3">
          <div class="grid max-w-[1200px] mx-auto gap-8 text-center md:grid-cols-2 md:text-start lg:grid-cols-footer">
            <div class="md:me-2 lg:me-3">
              <a
                href="index.html"
                class="text-lion font-gilda font-normal text-2xl tracking-[.04em]"
              >
                Almacenadora<span class="text-white">-BadRq404.</span>
              </a>
              <p class="text-white font-light font-barlow text-base mt-3 max-w-[480px] mx-auto md:ms-0">
                {" "}
                Es una empresa que se dedica al negocio de proporcionar
                servicios de almacenamiento y manejo de mercancías. Su función
                principal es recibir, almacenar y proteger los productos de sus
                clientes en sus instalaciones. Estas instalaciones suelen ser
                almacenes o bodegas diseñados específicamente para el
                almacenamiento seguro de diferentes tipos de productos.
              </p>
            </div>
            <div></div>
            <div></div>
            <div>
              <h4 class="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
                Contactanos
              </h4>
              <ul>
                <li class="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                  <span class="text-white">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span class="text-white/50 font-light">
                    Zona 16, Ciudad Capital, Guatemal
                  </span>
                </li>
                <li class="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start ">
                  <span class="text-white">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span class="text-white/50 font-light">+502 09354637</span>
                </li>
                <li class="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                  <span class="text-white">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="text-white/50 font-light">
                    almacenadora-badrq404@mail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <script
        src="https://code.jquery.com/jquery-3.6.4.js"
        integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.js"
        integrity="sha512-RCgrAvvoLpP7KVgTkTctrUdv7C6t7Un3p1iaoPr1++3pybCyCsCZZN7QEHMZTcJTmcJ7jzexTO+eFpHk4OCFAg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        type="text/javascript"
        src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      ></script>
      <script src="script.js"></script>
>>>>>>> axiquin
    </>
  );
};
