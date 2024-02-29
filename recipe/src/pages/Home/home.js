import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import jsonData from '../../fakeApi.json'

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleHome.css';
import '../../assets/stylesFull.css';


// Componente de Modal
const Modal = ({ isOpen, onClose, selectedItem }) => {
    if (!isOpen || !selectedItem) return null;
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.image} alt={selectedItem.name} />
          <p>{selectedItem.description}</p>
        </div>
      </div>
    );
};


const Home = () =>  {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
      };
    
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
                        <div key={item.id} onClick={() => handleItemClick(item)} className='col-4' style={{ cursor: 'pointer' }}>
                                <h3><strong>{item.name}</strong></h3>
                                <img src={item.image} alt={item.name} style={{ maxWidth: '350px', maxHeight: '350px' }} />
                        </div>
                    ))} 
                </div>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedItem={selectedItem} />
            </div>
        </section>
        <hr className="divisor mt-5"></hr>
       </>
    );
}



export default Home;