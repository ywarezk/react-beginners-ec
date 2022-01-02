import { store } from '../redux/store';
import { userSlice } from '../redux/user.slice';
import { useDispatch } from 'react-redux';

export function Login() {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(userSlice.actions.setUser({firstName: 'Yariv', lastName: 'Katz'}));
    }

    return (
        <button onClick={handleLogin}>
            click here to change the user
        </button>
    )

}