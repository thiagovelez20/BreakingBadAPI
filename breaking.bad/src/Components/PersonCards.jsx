import React from 'react'
import './Components.css';
const PersonCards = ({img, name, nickname, occupation, birthday}) => {
    return (
        <section className='card info'>
            <img className = 'img' src={img} alt={name} />
            <p>Name:   {name}</p>  
            <p>Nickname: {nickname}</p>
            <p>Birthday: {birthday}</p>
            
        </section>
    )
}

export default PersonCards
