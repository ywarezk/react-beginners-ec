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

export function Hello({
    name = 'Yariv'
}) {
    const [initMe, setInitMe] = useState(false);
    const [random, setRandom] = useState(Math.random());

    // BAD REACT CODE!!!!
    // when drawing you cannot do change
    // change can come only from actions or lifecycle
    // fetch(...)
    // setTimeout()
    // setInterval 

    // this function will run once
    // after first render
    /*
    useEffect(() => {
        // you can place here server calls that are called once
        console.log('this');
        setInitMe(true)
    }, []);
    */

    /**
     * run some logic on update
     */
    useEffect(() => {
        console.log('use effect is running')
    }, [
        initMe,
        random,
        name
    ])

    /**
     * can be used for cleanup
     */
    useEffect(() => {
        // this will be called on init
        const intervalId = setInterval(() => {
            console.log('this needs cleaning up...')
        }, 1000)

        return function() {
            // this will be called on destroy
            console.log('cleanup!!!');
            clearInterval(intervalId)
        }

    }, [])

    return (
        <h1>
            hello world
        </h1>
    )
}