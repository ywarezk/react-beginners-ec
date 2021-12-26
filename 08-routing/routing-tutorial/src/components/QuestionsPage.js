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

import { useParams } from 'react-router-dom';

export function QuestionsPage() {
    const params = useParams();

    return (
        <h1>
            You are viewing question number: {params['questionNumber']}
        </h1>
    )
}