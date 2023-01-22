import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {
    const [listadoState, setListadoState] = useState([])
    return (
        <div className="layout">
            <header className="header">
                <div className="logo">
                    <div className="play">

                    </div>
                </div>
                <h1>MisPelis</h1>
            </header>

            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>
            {/* <!-- Contenido principañ--> */}
            <section className="content">
                {/* <!--Aqui van Listado pelis--> */}
                <Listado listadoState={listadoState} setListadoState={setListadoState} />
            </section>
            {/* <!--Barra lateral--> */}
            <aside className="lateral">
                {/*Aqui va el buscador*/}
                <Buscador listadoState={listadoState} setListadoState={setListadoState} />
                {/* Crear pelis*/}
                <Crear setListadoState={setListadoState}/>
            </aside>
            {/* <!--Pie de pagina--> */}
            <footer className="footer">
                &copy; Máster en JavaScript ES12 y TypeScript - <a href="/">VictorRoblesWeb.es</a>
            </footer>
        </div>

    );
}

export default App;
