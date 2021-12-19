/**
 * 
 * you grab the input from the user
 * by syncing the component state with the input state
 * @returns 
 * 
 * 
 */


import { useRef } from 'react';

export function NameForm() {

    // { current: null  }
    // { current: InputDOMElement }
    const nameRef = useRef( null );
    const passwordRef = useRef(null);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const inputDOMElement = nameRef.current
        console.log('grab the user input: ' + inputDOMElement.value);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                ref={ nameRef }                
                type="text"
                name="your-name"
                placeholder="Enter your name"
            />
        </form>
    )
}