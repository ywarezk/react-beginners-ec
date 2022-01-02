import { useSelector } from 'react-redux';
import { firstNameSelector } from '../redux/user.slice';

export function Header() {

    const firstName = useSelector(firstNameSelector)

    return (
        <header>
            <h1>
                Hello { firstName }
            </h1>
        </header>
    )

}