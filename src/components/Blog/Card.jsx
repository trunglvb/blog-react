import React, { Fragment } from 'react'
import Cdata from './data'
const Card = () => {
    return (
        <Fragment>
            <div className="card grid top">
                {Cdata.map((value) => (
                    <div className="box" key={value.id}>
                        <div className='img'>
                            <img src={value.cover} alt='Card Images' />
                        </div>
                        <span>{value.category}</span>
                        <h2>{value.title}</h2>
                    </div>  
                ))}
            </div>
        </Fragment>
    )
}

export default Card