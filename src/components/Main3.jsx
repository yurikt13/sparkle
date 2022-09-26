import React from "react";
import { Link } from "react-router-dom";

function Main3() {
    return (
        <>
            <div className="container">
                <div className="card mt-4" style={{ width: '35rem;' }}>
                    <div className="card-header text-center">
                        <h2>Registrarse</h2>
                    </div>
                    <div className="card-body">
                        <label className="form-label" type="text">Nombre(s)</label>
                        <input className="form-control mb-3" type="text"></input>
                        <label className="form-label" type="text">Apellidos</label>
                        <input className="form-control mb-3" type="text"></input>
                        <label className="form-label" type="text">Correo electrónico</label>
                        <input className="form-control mb-3" type="email"></input>
                        <label className="form-label" type="text">Contraseña</label>
                        <input className="form-control mb-3" type="password"></input>
                        <label className="form-label" type="text">Confirmar contraseña</label>
                        <input className="form-control mb-3" type="password"></input>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to='/home' className="text-decoration-none">
                                <button className="btn bg-secondary text-white">Registrate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main3;