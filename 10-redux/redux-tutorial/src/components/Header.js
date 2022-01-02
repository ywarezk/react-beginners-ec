import { useSelector } from 'react-redux';

export function Header() {

    const user = useSelector((state) => {
        return state.user;
    })

    return (
        <header>
            <h1>
                Hello { user.firstName } { user.lastName }
            </h1>
        </header>
    )

}