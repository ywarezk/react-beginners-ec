/**
 * 
 * component with button and on and off
 * 
 */

import { useState } from 'react';

export function Toggle() {
    // stateArrayOnOff => [true, setOnOff(false)]
    const [onOff, setOnOff] = useState( true )
    // const onOff = stateArrayOnOff[0];
    // const setOnOff = stateArrayOnOff[1];

    // anotherArray => [42, setFourtyTwo]
    // const anotherArray = useState( 42 )

    /**
     * switch from on->off or from off->on
     */
    const handleToggle = () => {
        setOnOff(!onOff);
    }

    return (
        <div>
            <h1>                
                { onOff ? 'ON' : 'OFF' }
            </h1>
            <button onClick={ handleToggle }>
                Toggle on/off
            </button>
        </div>
    )
}