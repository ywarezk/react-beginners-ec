
// /layout1/layout2/layout3/todo/list

// navigate('/about');

// /about

// /layout/about

/**
 * 
 * 
  
<Route path="/about" element={ <AboutPage /> } />
<Route path="/about" element={ <AboutPAge /> } />


 */

import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const navigate = useNavigate()

    /**
     * we want to navigate the user to the about page
     */
    const handleTransition = () => {
        // ERROR!
        // useNavigate()

        navigate('/about?hello=world&foo=bar');
    }

    return (
        <div>
            <h1>
                Hello im in the homepage
            </h1>
            <button onClick={handleTransition}>
                Click to navigate to about
            </button>
        </div>
        
    )
}