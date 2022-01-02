import { store } from '../redux/store';
import { userSlice } from '../redux/user.slice';

export function Login() {

    const handleLogin = () => {
        store.dispatch(userSlice.actions.setUser({firstName: 'Yariv', lastName: 'Katz'}));
    }

    return (
        <button onClick={handleLogin}>
            click here to change the user
        </button>
    )

}