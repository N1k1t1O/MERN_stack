import React from 'react';
import "./stateCard.css"
//import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const StateCard = () => {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <div className="card">
            <h3>title</h3>
            <p>city</p>
            { isAuth && <button> <FontAwesomeIcon icon={faHeart} /> </button> }
    </div>
  );
};

export default StateCard;