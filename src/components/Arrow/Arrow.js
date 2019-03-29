import React from 'react';

let Arrow = ({direction}) => {
    return (
        <img alt='arrow' className={direction==='right'?'right':'left'} src='/img/arrow2.png'/>
    )
}

export default Arrow;