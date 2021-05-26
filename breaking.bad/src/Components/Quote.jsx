import React from 'react'

const Quote = ({quote}) => {
    return (
        <div>
            <h1 className='parrafo'>
                    {quote.text}<br />
                    <span>{quote.author} </span>
                    <img>{quote.img}</img>
                </h1>
        </div>
    )
}

export default Quote
