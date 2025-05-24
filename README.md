<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="/CSS/STYLE.CSS">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body>
    <header>
        <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary" style="padding: 0;">
            <div class="container-fluid barra-nav-color">
                <a class="navbar-brand">
                    <img src="/IMG/logo-visual-01.png" class="loguito">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#home">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categorías
                            </a>
                            <div class="dropdown-menu p-3 mega-menu-custom" aria-labelledby="navbarDropdown">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6 class="dropdown-header">Ropa</h6>
                                        <a class="dropdown-item" href="camisetas.html">Camisetas</a>
                                        <a class="dropdown-item" href="gorras.html">Gorras</a>
                                    </div>
                                    <div class="col-md-6">
                                        <h6 class="dropdown-header">Accesorios</h6>
                                        <a class="dropdown-item" href="mugs.html">Mugs</a>
                                        <a class="dropdown-item" href="llaveros.html">Llaveros</a>
                                        <a class="dropdown-item" href="#MousePad">Mouse Pad</a>
                                        <a class="dropdown-item" href="#lapiceros">Lapiceros</a>
                                        <a class="dropdown-item" href="#bolsas">Bolsas de cambrela</a>
                                        <a class="dropdown-item" href="#forros">Carcasas</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- PROXIMO A PROGRAMAR BOTOM DE BUSCAR PRODUCTOS-->


                    <!--                     <div id="desktop-search-container" class="d-flex" role="search">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar Productos"
                                aria-label="Search" id="searchInput">
                            <button class="btn btn-light " type="submit" id="searchButton">Buscar</button>
                            <div id="suggestions" class="list-group position-absolute" style="z-index: 1000;"></div>
                        </form>
                    </div>-->
                </div>
            </div>
        </nav>
        <div id="floating-cart" class="floating-cart">
            <a href="#">
                <i class="bi bi-cart-fill"></i>
                <span id="floating-cart-item-count" class="badge bg-success">0</span>
            </a>
            <div id="floating-cart-details" class="cart-details">
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>X</th>
                        </tr>
                    </thead>
                    <tbody id="floating-cart-products">
                        <!-- Productos se agregarán aquí dinámicamente -->

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" class="total">
                                <strong>Total: <span id="floating-cart-total">$0</span></strong>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <button id="floating-empty-cart">Vaciar</button>
                            </td>
                        </tr>
                        <button id="pay-button">Comprar</button>
                    </tfoot>
                </table>
            </div>
        </div>

    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div id="home" class="col-12 col-lg-4 d-flex justify-content-center">
                    <!--Carrusel 1-->
                    <div class="w-100 w-md-75" style="max-width: 350px;">
                        <div id="carouselOne" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <a href="https://wa.link/arn30a">
                                    <div class="carousel-item active">
                                        <img src="/IMG/camiseta-nasa.jpg" class="d-block w-100" alt="Imagen 1">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Camiseta NASA</h5>
                                            <p>20% OFF</p>
                                            <p>$28.000</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://wa.link/k0iuvr">
                                    <div class="carousel-item">
                                        <img src="/IMG/funda.jpg" class="d-block w-100" alt="Imagen 2">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Funda Personalizada</h5>
                                            <p>Tú lo imaginas, nosotros lo hacemos realidad</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://wa.link/no00pu">
                                    <div class="carousel-item">
                                        <img src="/IMG/llaveros.jpg" class="d-block w-100" alt="Imagen 3">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Llaveros</h5>
                                            <p>Regala a tu mejor equipo!</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselOne"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselOne"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="visually-hidden">Siguiente</span></button>
                        </div>
                    </div>
                </div>

                <!--Carrusel central FIJO-->
                <div class="col-12 col-lg-4 d-flex justify-content-center">
                    <div class="w-100 w-md-75" style="max-width: 350px;">
                        <div id="carouselThree" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselThree" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/IMG/logo-carrusel.jpeg" class="d-block w-100" alt="Imagen 7">
                                    <div class="carousel-caption d-none   d-md-block">
                                        <h5>Promociones</h5>
                                        <p>Aprovecha nuestras promociones <br> Hasta 20% Off!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!--Carrusel 3-->
                <div class="col-12 col-lg-4 d-flex justify-content-center">
                    <div class="w-100 w-md-75" style="max-width: 350px;">
                        <div id="carouselTwo" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="0" class="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <a href="https://wa.link/bngpmg">
                                    <div class="carousel-item active">
                                        <img src="/IMG/Mugs-cucharas.jpg" class="d-block w-100" alt="Imagen 4">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Mug de cuchara</h5>
                                            <p>Un regalo que recordarán con cada sorbo</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://wa.link/4lcc08">
                                <div class="carousel-item">
                                    <img src="/IMG/acrilico.jpg" class="d-block w-100" alt="Imagen 5">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Medallas en acrílico</h5>
                                        <p>Dale un reconocimiento a quien se lo merece.</p>
                                    </div>
                                </div>
                                </a>

                                <a href="">
                                <div class="carousel-item">
                                    <img src="/IMG/mug-especial.jpg" class="d-block w-100" alt="Imagen 6">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Mug Especial</h5>
                                        <p>Convierte tu idea en realidad con nuestro mug negro</p>
                                    </div>
                                </div>
                                </a>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTwo"
                                data-bs-slide="prev"><span class="carousel-control-prev-icon"
                                    aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselTwo"
                                data-bs-slide="next"><span class="carousel-control-next-icon"
                                    aria-hidden="true"></span><span class="visually-hidden">Siguiente</span></button>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    </main>
    <!--Alerta de agregar al carrito-->
    <div id="toast" class="toast-alert">Producto agregado al carrito</div>

    <!--Formulario de compra-->
    <!-- Modal de Formulario -->
    <div id="form-modal"
        style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:#000000aa; z-index:1000; justify-content:center; align-items:center;">
        <div style="background:#fff; padding:20px; border-radius:10px; max-width:400px; width:90%;">
            <h4>Completa tus datos</h4>
            <form id="order-form">
                <label>Nombre:</label>
                <input type="text" id="name" required style="width:100%; padding:5px;"><br><br>

                <label>Dirección:</label>
                <input type="text" id="address" required style="width:100%; padding:5px;"><br><br>

                <label>Ciudad:</label>
                <select id="city" required style="width:100%; padding:5px;">
                    <option value="">Selecciona</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bogotá">Bogotá</option>
                </select><br><br>

                <label>Tipo de Pedido:</label>
                <select id="type" required style="width:100%; padding:5px;">
                    <option value="Personalizar">Personalizar</option>
                    <option value="Cotizar">Cotizar</option>
                </select><br><br>

                <button type="submit" style="background:#28a745; color:white; padding:10px; width:100%;">Enviar a
                    WhatsApp</button>
                <button type="button" onclick="closeForm()"
                    style="margin-top:10px; padding:10px; width:100%;">Cancelar</button>
            </form>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
    <script src="/JS/INDEX.JS"></script>
</body>

</html>
