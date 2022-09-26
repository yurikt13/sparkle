import React from 'react';
import logo from './img/logo.jpg';
import img1 from './img/img1.jpg';
import { Link } from 'react-router-dom';

function Main1() {
    return (
        <>
            <div className='container'>
                <div className='card cardIni'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-sm-6 my-2'>
                                <img src={logo} alt='..' />
                            </div>
                            <div className='btnContactanos my-2 col-sm-3'>
                                <Link to='/iniciarSesion' className='text-decoration-none'>
                                    <div className='btn btnIni text-white'>Iniciar Sesión</div>
                                </Link>
                            </div>
                            <div className='btnContactanos my-2 col-sm-2'>
                                <Link to='/registrarse' className='text-decoration-none'>
                                    <div className='btn btnRegi text-white'>Registrarse</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row g-10'>
                            <div className='col-lg-6'>
                                <div className='card-body'>
                                    <p className='card-text text-right p-3 textIni'>¡Hola! somos Sparkle Tienda.
                                        En Sparkle nos encargamos de diseñar productos para todo tipo de fan. La idea de Sparkle en un principio era enfocarse únicamente en la elaboración de freebies para traders, GOMs y emprendedor@s. Pero a la hora de sacar nuestras ideas habían muchas más cosas que queríamos hacer. Por eso decidimos no limitarnos a freebies y ofrecer mayor variedad de artículos. Esperamos que nos acompañes en este nuevo camino que emprendemos ahora.
                                        Trabajaremos duro por darte la mejor calidad en atención y productos posible.
                                        Pourple you.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 p-6'>
                                <img src={img1} alt='..' className='img1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main1;