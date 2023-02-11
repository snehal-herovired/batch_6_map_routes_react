import React from 'react';
import {Link} from "react-router-dom"
const Landing = () => {
    return (
        <div>
            Welcome to react router dom concept 

            Want to go to Login page ?
            <Link to="/login">
            <button>click me</button>
            </Link>
        </div>
    );
}

export default Landing;
