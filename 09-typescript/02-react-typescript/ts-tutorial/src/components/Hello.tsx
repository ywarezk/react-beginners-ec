

import { FC } from 'react'

interface HelloProps {
    name: string;
}

export const Hello: FC<HelloProps> = (props) => {
    return (
        <h1>
            hello {props.name}
        </h1>
    )
}
