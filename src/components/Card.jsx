import './Card.css';
import React from 'react';

const Card = (props) => {

    const getColor = (props) => {
        if(props.red) return "Red";
        if(props.green) return "Green";
        if(props.blue) return "Blue";
        if(props.purple) return "Purple";
        return "";
    };

    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='Header'>
                <span className='Title'>{props.title}</span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    );
};

export default Card;