import React from 'react';

let Arrow = ({direction}) => {
    return (
        <img className={direction==='right'?'right':'left'} src='/img/arrow.png'/>
    )
}

export default Arrow;