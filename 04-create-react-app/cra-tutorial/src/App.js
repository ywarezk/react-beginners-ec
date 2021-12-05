
// modules are for javascript - usually
// webpack

import './App.css';
import { Header } from './components/Header/Header';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Header />

      <Button className="danger">
          this should be styled
      </Button>
    </div>
  );
}

export default App;
