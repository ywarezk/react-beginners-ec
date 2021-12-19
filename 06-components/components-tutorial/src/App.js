import logo from './logo.svg';
import './App.css';
import { PropsExample } from './01-props/PropsExample';
import { Toggle } from './02-state/Toggle';
import { Hello } from './03-effect/Hello';
import { useState } from 'react';
import { Counter } from './04-memo/Counter';

function App() {
    const sergeiName = 'Mr Sergey';
    const [isComponentShowing, setIsComponentShowing] = useState(true);

    return (
        <div className="App">
            {/* <PropsExample name={ sergeiName } />

            <PropsExample /> */}

            {/* <Toggle /> */}

            {/* {
                isComponentShowing && <Hello name="Yariv Katz" />
            } */}

            <Counter />
        </div>
    );
}

export default App;
