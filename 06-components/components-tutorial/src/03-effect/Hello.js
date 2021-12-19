/**
 * 
 * React manage lifecycle for a component
 * Component state can transition in a lifecycle
 * 
 * Component Did Mount - when component is rendered for the first time
 * when initiating from a server
 * 
 * Component Did Update - activate logic after render
 * 
 * Component Will Unmount - used for cleaning
 * 
 */

import { useEffect, useState } from 'react';

export function Hello() {
    const [initMe, setInitMe] = useState(false);

    // BAD REACT CODE!!!!
    // when drawing you cannot do change
    // change can come only from actions or lifecycle
    // fetch(...)
    // setTimeout()
    // setInterval 

    // this function will run once
    // after first render
    useEffect(() => {
        // you can place here server calls that are called once
        console.log('this');
        setInitMe(true)
    }, [])

    return (
        <h1>
            hello world
        </h1>
    )
}