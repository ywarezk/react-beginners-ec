/**
 * {} used for dynamic values in my component
 */

export function Hello() {
    const helloInSpan = <span>hello</span>
    return (
        <h1 className={'hello-' + Math.random()}>
            hello world { Math.random() } { null } { true }
            { <span>hello</span> } {helloInSpan}

            { [
                42,
                'stam string',
                false,
                null,
                undefined,
                true,
                <strong>something</strong>,
                
            ] }
        </h1>
    )
}

/**
 * 
 1. between tags - NodeElement
 2. in attribute - className - what the attribute expects to get

you have to place expression in {}

- expression
- statement


const hello = 


if between tags return NodeElement
- string
- number
- falsey
- true
- jsx
- Array of the above

 * 
 */