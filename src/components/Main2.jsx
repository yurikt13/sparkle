import React from "react";
import { Link } from "react-router-dom";

function Main2() {
    return (
        <>
            <div className="container mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card cardLogin bg-white mt-5" style={{ width: '35rem' }}>
                    <div className="card-header text-center mb-4">
                        <h2>Iniciar Sesión</h2>
                    </div>
                    <div className="card-body mt-5">
                        <label className="form-label mt-5" type="text">Usuario</label>
                        <input className="form-control mb-4" type="text" placeholder="Ingrese un usuario"></input>
                        <label className="form-label" type="text">Contraseña</label>
                        <input className="form-control mb-4" type="text" placeholder="Ingrese la contraseña"></input>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to='/home' className="text-decoration-none">
                                <button className="btn bg-secondary text-white mt-3" type="submit" >Ingresar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main2;