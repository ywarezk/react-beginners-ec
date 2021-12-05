import logo from './puppies.jpg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';

export function Header() {
    return (
        <AppBar position="static" className="my-header">
            <Toolbar>
                <img className="logo" src={logo} />
                <h1>
                    I'm the header of the app
                </h1>
            </Toolbar>
        </AppBar>
    )
}