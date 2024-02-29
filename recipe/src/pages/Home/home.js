import { Link } from 'react-router-dom';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHome.css';
import '../../assets/stylesFull.css';

function Home() {

    return(
       <>
        {/* Sections */}
        {/* Menu */}
        <section className="fullAlignFlex espacoTopo">
            <div className="container align-self-center">
                <div className="row">
                    <div className="col-6">
                        <button className="btn btnSectionTopo">
                            <Link to="/">NOSSOS DOCES</Link>
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn btnSectionTopo">
                            <Link to="/adicao">ADICIONAR RECEITA</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>   
        <hr className="divisor"></hr>
        
        <hr className="divisor mt-5"></hr>
       </>
    );
}



export default Home;