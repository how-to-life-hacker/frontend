import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

let initialFormValues = {
    title: '',
    category: '',
    description: '',
}

export default function AddHowTo({ howtoList, setHowToList }) {
    let [formValues, setFormValues] = useState(initialFormValues);
    let history = useHistory();

    function onChange(event) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();
        let newHowTo = { ...formValues };
        axios.post("http://localhost:5000/api/howtos", newHowTo)
            .then(res => {
                console.log(res.data);
                setHowToList(res.data);
                history.push('/');
            })
            .catch(err => console.log(err));
    }
    return (
        <form onSubmit={onSubmit} className="add-howto-form">
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

            <button>submit</button>
        </form>
    )
}