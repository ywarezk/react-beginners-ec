/**
 * place your code here
 */

function Footer() {
    return (
        <footer className="footer">
            <h1>
                I'm the footer
            </h1>
        </footer>
    )
}

function Login() {
    return (
        <form>
            <div>
                <input 
                    type="email"
                    name="email"
                    placeholder="Enter your mail"
                />
            </div>    
            <div>
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
            </div>
            <div>
                <button type="submit">
                    Login
                </button>
            </div>
        </form>
    )
}


function Header() {
    // React.createElement
    return (
        <header className="header">
            <h1>
                Hello this is the header
            </h1>
        </header>
    )
}

function App() {
    return (
        <div className="wrapper">
            <Header />

            <Login />

            <Footer />
        </div>
    )
}


// where in the existing dom do i want to place react
const container = document.getElementById('root');

ReactDOM.render(
    <App />,
    container
)