
import { useSearchParams } from 'react-router-dom';

/**
 * get params
 * @returns 
 */
export function AboutPage() {
    const [params] = useSearchParams()

    return (
        <h1>
            Hello im in the about page {params.getAll('hello')} {params.getAll('foo')}
        </h1>
    )
}