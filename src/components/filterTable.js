import React from 'react';
import DummyData from '../DummyData.json';
import { useState } from 'react';


const SearchTable = () => {
    const [searchText, setSearchText] = useState('');


    return (<div className='container'>

        <input type='search' placeholder='Search Person' className='form-control' style={{ marginTop: 20, marginBottom: 50, width: '40%' }}
            onChange={(e) => {
                setSearchText(e.target.value);
            }} />

        <table className='table table-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>E-mail</th>
                    <th>Gênero</th>

                </tr>
            </thead>
            <tbody>
                {DummyData.filter(val => {
                    if (searchText === '') {
                        return val;
                    } else if (
                        val.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                        val.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
                        val.email.toLowerCase().includes(searchText.toLowerCase()) ||
                        val.gender.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                        return val;
                    }
                }).map(item => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>

        </table>



    </div>);
}

export default SearchTable;