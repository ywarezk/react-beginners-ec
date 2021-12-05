/**
 * 
 * Events = {}
 * 
 */

export function Login() {
    /**
     * 
     * @param {*} e EventObject
     */
    const handleButtonClick = (e) => {
        console.log('hello world');
    }

    const handleLoginSubmit = (e) => {        
        e.preventDefault();
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <button type="submit">Login</button>
            <button type="submit">Login</button>
            {/* <button type="submit" onClick={handleButtonClick}>Login</button> */}
            {/* <button type="submit" onClick={() => {console.log('hello world')}}>Login</button> */}
        </form>
    )
}