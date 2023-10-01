
export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <nav className="col-md-2 d-none d-md-block sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-home"></i>
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-user"></i>
                                    <span>Gestión de Ventas:</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-inventario"></i>
                                    <span>Inventario:</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-facturacion"></i>
                                    <span>Facturación y Propina:</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icon-sign-out"></i>
                                    <span>Gestión de Mesas:</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="col-md-10"></nav>
            </div>
        </div>
    );
}