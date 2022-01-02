import { FC, useState } from 'react';


// const myNumber: number

// function Hello() {}
// const Hello: FC = () => {}
// <Hello myName="Yariv" />

/**
 * all the props that this react component
 * can get from the parent
 */
interface HelloProps {
    myName: string;
    age?: number;
}

/**
 * 
 * @param props 
 * @returns 
 */
export const Hello: FC<HelloProps> = ({
    myName, 
    age = 36 // default value
}) => {
    const [counter, setCounter] = useState<number>(0);

    const handleCounterInc = () => {
        // counter = counter + 1
        setCounter(counter + 0.1);
    }

    return (
        <div>
            <h1>
                My name is: {myName}
            </h1>
            <p>
                My age is: {age}
            </p>
            <p>
                { counter }
            </p>
            <button onClick={handleCounterInc}>
                increase counter
            </button>
        </div>
        
    )
}

// Hello.propTypes = {}