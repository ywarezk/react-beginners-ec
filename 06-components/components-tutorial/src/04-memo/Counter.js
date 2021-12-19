
import { useMemo } from 'react';

/*

stamFunction(1, 42, 5) => 10000

stamFunctionMemo(1, 42, 5) => 10000

*/

export function Counter() {
    // this will run on every update

    

    // (1+100) (2+99) + (2+98)
    const counter = useMemo(() => {
        let counter = 0;
        for(let i = 0; i<100000; i++) {
            counter+=Math.random();
        }   
        return counter;
    }, [])
    

    console.log('running calculation...')


    return (
        <h1>
            Hello world { counter }
        </h1>
    )
}