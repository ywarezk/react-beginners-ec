import logo from './logo.svg';
import './App.css';
import { PropsExample } from './01-props/PropsExample';

function App() {
    const sergeiName = 'Mr Sergey';

    return (
        <div className="App">
            <PropsExample name={ sergeiName } />

            <PropsExample />
        </div>
    );
}

export default App;
