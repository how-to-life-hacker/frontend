import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

// const initialFormValues = {
//     title: '',
//     category: '',
//     description: ''
// }

export default function EditHowTo({ howtoList, setHowToList }) {
    let { id } = useParams();
    console.log(id, howtoList);
    let howto = howtoList.filter(howto => {
        return howto.id === Number(id);
    });
    console.log(howto, id);
    howto = howto[0];
    let [formValues, setFormValues] = useState(howto);
    let history = useHistory();

    function onChange(event) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:5000/api/howtos/${id}`, formValues)
            .then(res => {
                let newList = howtoList.reduce((acc, howto) => {
                    let retHowTo;
                    if (howto.id === id) {
                        retHowTo = res.data;
                    } else retHowTo = howto
                    return [...acc, retHowTo]
                }, []);
                setHowToList(newList)
                history.push('/');
            }
            )
            .catch(err => console.log(err));

    }
    return (
        <form onSubmit={onSubmit} className="edit-howto-form">
            <input
                name='title'
                type='text'
                value={formValues.title}
                onChange={onChange}
            />
            <input
                name='category'
                type='text'
                value={formValues.category}
                onChange={onChange}
            />
            <input
                name='description'
                type='text'
                value={formValues.description}
                onChange={onChange}
            />
            <input
                name='user_id'
                type='id'
                value={formValues.user_id}
                onChange={onChange}
            />
            <button>submit</button>
        </form>
    )
}