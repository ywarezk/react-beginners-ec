/**
 * 
 * loops - 
 */

export function Navigation() {
    const links = [
        {id: 1, title: 'home', href: 'https://nerdeez.com'},
        {id: 2, title: 'about', href: 'https://nerdeez.com/about'}
    ]; // => [<li></li>]

    const lis = links.map((singleLink) => {
        return (
            <li>
                <a href={singleLink.href}>
                    {singleLink.title}
                </a>
            </li>
        )
    });

    const displayLis = () => {
        const lis = [];
        for(let singleLink of links) {
            lis.push(
                <li>
                    <a href={singleLink.href}>
                        {singleLink.title}
                    </a>
                </li>
            )
        }
        return lis
    }

    return (
        <nav>
            <ul>
                {
                    /*lis*/
                }

                {
                   links.map((singleLink, index) => {
                        return (
                            <li key={singleLink.id}>
                                <a href={singleLink.href}>
                                    {singleLink.title}
                                </a>
                            </li>
                        )
                    }) 
                }

                {
                    /*displayLis()*/
                }
            </ul>    
        </nav>    
    )
}