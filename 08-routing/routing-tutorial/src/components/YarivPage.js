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
import { AboutPage } from "./AboutPage";


// /settings
export function YarivPage() {

    return (

            <div>
                <h1>banner1</h1>
                <Routes>
                    <Route path="/yariv/about" element={<AboutPage />} />
                </Routes>
            </div>
            
        
        
    )
}