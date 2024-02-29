import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import jsonData from '../../fakeApi.json'

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHome.css';
import '../../assets/stylesFull.css';

const Home = () =>  {
        const [data, setData] = useState([]);
      
        useEffect(() => {
            var listaDoces = jsonData;
            setData(listaDoces);
          }, []);

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
                            <Link to="/adicao">ADICIONE AINDA MAIS DOCES</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
         {/* Content */}   
        <hr className="divisor"></hr>

        <section className="d-flex mb-5 espacoTopo fullAlignFlex" id="listaDoces">
            <div className="container align-self-center">
                <h1>Conheça nossos incríveis Doces</h1>

                <div className="d-flex mt-3 flex-wrap">
                    {data.map(item => (
                        <div key={item.id} className='col-4'>
                                <h3><strong>{item.name}</strong></h3>
                                <img src={item.image} alt={item.name} style={{ maxWidth: '350px', maxHeight: '350px' }} />
                        </div>
                    ))} 
                </div>
            </div>
        </section>
        <hr className="divisor mt-5"></hr>
       </>
    );
}



export default Home;