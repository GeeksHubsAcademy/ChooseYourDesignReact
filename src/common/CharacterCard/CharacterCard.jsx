
import React from 'react';

import "./CharacterCard.css";

export const CharacterCard = ({picture, name, status}) => {

    return (
        <div className="characterCardDesign">
            <div>{name}</div>
            <img src={picture} alt={name}/>
            <div>{status}</div>
        </div>
    )


}