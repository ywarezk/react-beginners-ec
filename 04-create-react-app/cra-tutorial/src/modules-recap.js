// App.js

function App() {}

export default App;

export const hello = 'world';

// Foo.js

// no {} javascript know you wnat the export default
import AppRami, { hello } from './App'; 
import { hello } from './App';