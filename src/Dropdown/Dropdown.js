import React from 'react';
import DropdownButton from './DropdownButton/DropdownButton';
import DropdownMenu from './DropdownMenu/DropdownMenu';

function Dropdown(props) {
    return (
        <div>
            <DropdownButton />
            <DropdownMenu />
        </div>
    );
}

export default Dropdown;