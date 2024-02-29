import { Link } from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleError.css';
import '../../assets/stylesFull.css';

function Error() {
    return(
        <section className="errorPage">
            <div className="error-container">
                <div className="error-message">Ops! Página não encontrada.</div>
                <p>A URL que você está tentando acessar pode ser inválida ou a página foi removida.</p>
                <p>Volte para <a href="/" className="back-link">página inicial</a> para encontrar o conteúdo desejado.</p>
            </div>
        </section>
        
    );
}

export default Error;