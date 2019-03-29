import React from 'react';

let Arrow = ({direction}) => {
    return (
        <img alt='arrow' className={direction==='right'?'right':'left'} src='/img/arrow.png'/>
    )
}

export default Arrow;