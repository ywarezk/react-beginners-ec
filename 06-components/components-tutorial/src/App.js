import logo from './logo.svg';
import './App.css';
import { PropsExample } from './01-props/PropsExample';
import { Toggle } from './02-state/Toggle';

function App() {
    const sergeiName = 'Mr Sergey';

    return (
        <div className="App">
            {/* <PropsExample name={ sergeiName } />

            <PropsExample /> */}

            <Toggle />
        </div>
    );
}

export default App;
