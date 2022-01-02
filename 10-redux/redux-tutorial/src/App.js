import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Login />

      <Todo />
    </div>
  );
}

export default App;
