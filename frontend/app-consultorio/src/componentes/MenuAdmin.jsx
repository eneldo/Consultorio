import React from 'react'
import { Link } from "react-router-dom";

const MenuAdmin = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#configuracion-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bi bi-gear-fill" /><span>Configuración</span><i className="bi bi-chevron-down ms-auto" />
                </Link>
                <ul id="configuracion-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"/roles-admin"}>
                            <i className="bi bi-circle" /><span>Roles</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"/usuarios-admin"}>
                            <i className="bi bi-circle" /><span>Usuarios</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#citas-medicas-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bi bi-people-fill" /><span>Citas Medicas</span><i className="bi bi-chevron-down ms-auto" />
                </Link>
                <ul id="citas-medicas-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"/especialidades-admin"}>
                            <i className="bi bi-circle" /><span>Especialidades</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"/agenda-citas-admin"}>
                            <i className="bi bi-circle" /><span>Agenda Citas</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Reservar Citas</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#historia-clinica-nav" data-bs-toggle="collapse" to={"#"}>
                    <i className="bi bi-clipboard-plus" /><span>Historia Clinica</span><i className="bi bi-chevron-down ms-auto" />
                </Link>
                <ul id="historia-clinica-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Historia Clinica</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Medicamentos</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"#"}>
                            <i className="bi bi-circle" /><span>Formula Medica</span>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );
}

export default MenuAdmin;