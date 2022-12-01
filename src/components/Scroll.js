import React from 'react';

const Scroll = (props) => {
    return (
        <div id='scroll' style={{padding: '4px', overflowY: 'scroll', border: '2px solid black', height: props.height - 166}}>
            {props.children}
        </div>
    );
};

export default Scroll;