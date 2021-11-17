import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/')
    }
    return (
        <div className="notFound">
            <button onClick={handleRedirect} className="notFoundButton">Home</button>
        </div>
    );
};

export default NotFound;