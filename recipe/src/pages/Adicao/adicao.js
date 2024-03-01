import React, { useState } from 'react';

/* Styles and Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleAdicao.css';
import '../../assets/stylesFull.css';

const Adicao = ({ addItemToList }) => {
    const [newItem, setNewItem] = useState({ name: '', image: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name.trim() !== '' && newItem.image.trim() !== '' && newItem.description.trim() !== '') {
            addItemToList(newItem);
            setNewItem({ name: '', image: '', description: '' });
        }
    };

    

    return (
        <div className="container adicaoFlex" id="adicao">
            <h2>Adicionar Novo Item</h2>
            <form onSubmit={handleSubmit} className='formAdicao'>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="name" name="name" value={newItem.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL da Imagem:</label>
                    <input type="text" className="form-control" id="image" name="image" value={newItem.image} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <textarea className="form-control" id="description" name="description" value={newItem.description} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-danger mt-4">Adicionar Item</button>
            </form>
        </div>
    );
};

export default Adicao;