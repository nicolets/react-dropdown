import React, { useContext, useEffect } from 'react';
import { ItemContext } from '../item-context';
import './DropdownButton.scss';

function DropdownButton(props) {

    const {shown, setShown} = useContext(ItemContext);
    
    useEffect(() => {
        document.addEventListener('click', () => {
            setShown(false);
        });
    }, []);

    const handleClick = (e) => {
        e.stopPropagation();
        setShown(!shown)
    }

    return (
        <div>
            <button onClick={handleClick}>Dropdown button</button>
        </div>
    );
}

export default DropdownButton;