import logo from './logo.svg';
import './App.css';
// react-router - display a component if url is equal to something
import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { Error404Page } from './components/Error404Page';
import { QuestionsPage } from './components/QuestionsPage';
import { YarivPage } from './components/YarivPAge';
import { DaniellePage } from './components/DaniellePage';

function App() {
    const handle = () => {}

    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/questions/123456">
                            question 1-6
                        </Link>
                    </li>
                </ul>    
            </nav>

            {/*  homepage => / */}
            {/*  aboutpage => /about */}
            {/*  ** => 404 */}
            <Routes>
                <Route path="/" element={<HomePage  />} />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/questions" element={ <QuestionsPage /> } />
                <Route path="/questions/:questionNumber" element={ <QuestionsPage /> } />

                {/* /settings/user */}
                {/* settings/dashboard */}
                <Route path="/settings" element={ <QuestionsPage /> } />

                <Route path="/yariv" element={ <YarivPage /> }  />
                <Route path="/danielle" element={ <DaniellePage /> } />

                <Route path="/*" element={<Error404Page />} />
            </Routes>
        </div>
    );
}

export default App;
