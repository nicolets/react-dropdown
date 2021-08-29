import React from 'react';
import './DropdownItem.scss';

function DropdownItem(props) {
    return (
        <div className='item'>
            <li>{props.name}</li>
        </div>
    );
}

export default DropdownItem;