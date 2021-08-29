import React, { useContext, useState } from 'react';
import { ItemContext } from '../item-context';
import DropdownItem from './DropdownItem/DropdownItem';
import './DropdownMenu.scss'

function DropdownMenu(props) {

    const {shown, setShown} = useContext(ItemContext);

    return (
        <div>
            {shown && <div className="menu">
                <DropdownItem name='Action' />
                <DropdownItem name='Another action' />
                <DropdownItem name='Something else' />
            </div>}
        </div>

    );
}

export default DropdownMenu;