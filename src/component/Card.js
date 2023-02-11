import React from 'react';

const Card = ({ele}) => {
    return (
        <div>
            {ele.id} 
            {ele.title}
        </div>
    );
}

export default Card;
