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
export function DaniellePage() {

    return (
        <div>
            <h1>
                banner2
            </h1>
            <Routes>
                <Route path="/danielle/about" element={AboutPage} />
            </Routes>
        </div>
        
    )
}