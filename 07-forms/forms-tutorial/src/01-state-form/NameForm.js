/**
 * 
 * you grab the input from the user
 * by syncing the component state with the input state
 * @returns 
 * 
 * 
 */

import { useState } from "react";

export function NameForm() {
    const [ name, setName ] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log('grab the user input: ' + name);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                value={name}
                onChange={ handleNameChange }
                type="text"
                name="your-name"
                placeholder="Enter your name"
            />
        </form>
    )
}