import PropTypes from 'prop-types';


// <PropsExample name={'Mr Sergey'} age={23} />
// props => { name: 'Sergey', age: 23}
export function PropsExample(
    /*props*/
    { 
        // parameter name is optional
        // if not passed gets a default value
        name = 'Mr Yariv'
    } // destructuring to grab from object straight to variable
) {
    return (
        <h1>hello { name }</h1>
    )
}

PropsExample.propTypes = {
    // name: PropTypes.string.isRequired
    name: PropTypes.string
}