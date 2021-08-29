import React, { useContext } from 'react';
import { ItemContext } from '../item-context';
import './DropdownButton.scss';

function DropdownButton(props) {

    const {shown, setShown} = useContext(ItemContext);

    return (
        <div>
            <button onClick={() => setShown(!shown)}>Dropdown button</button>
        </div>
    );
}

export default DropdownButton;