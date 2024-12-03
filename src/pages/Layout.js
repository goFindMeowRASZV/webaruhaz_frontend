import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <img src="kepek/logo.png" alt="Avatar Logo" style={{width: "40px"}} className="rounded-pill"/> 
                    <h1 style={{color: "white"}}>Macska webáruház</h1>
                </div>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                {/* A publikus tartalom linkje */}
                            <Link className="nav-link"  to="/">Áruház</Link>
                        </li>
                        <li className="nav-item">
                {/* Az admin oldal linkjetartalom linkje */}
                            <Link className="nav-link" to="/admin" >Admin felület</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <article>
            {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
