
export default function Navbar() {
    return (
        <div class="container-fluid">
            <div class="row vh-100">
                <nav class="col-md-2 d-none d-md-block sidebar">
                    <div class="position-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="icon-home"></i>
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="icon-user"></i>
                                    <span>Gestión de Ventas:</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="icon-inventario"></i>
                                    <span>Inventario:</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="icon-facturacion"></i>
                                    <span>Facturación y Propina:</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="icon-sign-out"></i>
                                    <span>Gestión de Mesas:</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav class="col-md-10"></nav>
            </div>
        </div>
    );
}