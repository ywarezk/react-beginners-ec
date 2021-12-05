/**
 * 
 * if example
 * 
 */



function Hello() {
    const somethingRandom = Math.random();

    return (
        <h1>
            {/* if greater than 0.5 then 'yariv' else guest */}
            hello { somethingRandom > 0.5 ? 'Yariv' : 'Guest' }

            {/* if greater than 0.5 then 'yariv' else display nothing */}
            {/* somethingRandom > 0.5 ? 'Yariv' : false */}
            hello { somethingRandom > 0.5 && 'Yariv' }

            {/* if smaller or equal than 0.5 then 'guest' else display nothing */}
            {/* somethingRandom > 0.5 ? true : 'Guest' */}
            hello { somethingRandom > 0.5 || 'Guest' }
        </h1>
    )
}

