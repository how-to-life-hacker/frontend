import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import HowToCard from "./HowToCard";

function HowTo({ addToSavedHowTos, howtoList, setHowToList }) {
    const [howto, setHowTo] = useState(null);
    const params = useParams();
    const history = useHistory();

    const fetchHowTo = (id) => {
        axios
            .get(`http://localhost:5000/api/howtos/${id}`)
            .then((res) => setHowTo(res.data))
            .catch((err) => console.log(err.response));
    };

    const saveHowTo = () => {
        addToSavedHowTos(howto);
    };

    useEffect(() => {
        fetchHowTo(params.id);
    }, [params.id]);

    function onClick(event) {
        axios.delete(`http://localhost:5000/api/howtos/${params.id}`)
            .then(res => {
                let newList = howtoList.filter(howto => howto.id !== res.data);
                setHowToList(newList);
                history.push('/')
            })
    }

    if (!howto) {
        return <div>Loading howtos...</div>;
    }

    return (
        <div className="save-wrapper">
            <HowToCard howto={howto} />

            <div className="save-button" onClick={saveHowTo}>
                Save
      </div>
            <Link to={`/update-howto/${params.id}`}>
                <button> edit howto</button>
            </Link>
            <button onClick={onClick}> delete</button>
        </div>
    );
}

export default HowTo;
