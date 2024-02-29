import {Link} from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styleHeader.css';
import '../../assets/stylesFull.css';

/* FontAwesome */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(
        <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                    <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-controls="nav-principal" aria-expanded="false" aria-label="Menu com os links principais">
                            {/* <FontAwesomeIcon icon={faBars}/> */}
                        </button>
                        <div className="collapse navbar-collapse" id="nav-principal">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Nossos Doces</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/adicao" className="nav-link">Adicionar Receita</Link>
                                </li>

                                <li className="nav-item divider"></li>

                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Cadastrar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Entrar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> 
        </header>
    );
}

export default Header;