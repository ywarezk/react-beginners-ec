/**
 * 
 * Entities / Resources 
 * /questions/1234653
 * 
 * /about?hello=world&foo=bar
 * 
 * search / filter / order / redirect / analytics data, 
 * 
 */

import { Route, Routes } from "react-router-dom";


// /settings
export function SettingsPage() {

    return (
        <div>
            <nav>
                ....
            </nav>

            <Routes>
                <Route path="/settings/user" element={} />
            </Routes>
        </div>
        
    )
}