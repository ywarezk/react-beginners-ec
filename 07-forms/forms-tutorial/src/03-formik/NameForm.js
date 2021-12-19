/**
 * 
 * you grab the input from the user
 * by syncing the component state with the input state
 * @returns 
 * 
 * 
 */


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const nameSchema = yup.object().shape({
    myName: yup.string().required('This field is F%$#^$ required').email('not a valid email you fool')
})

export function NameForm() {

    // { myName: '....'}
    const handleSubmit = ( values ) => {
        console.log('grab the user input: ' + values);
    }

    return (
        <Formik
            initialValues={
                {
                    myName: 'Yariv'
                }
            }
            onSubmit={handleSubmit}
            validationSchema={nameSchema}
        >
            <Form>
                <Field 
                    type="text"
                    name="myName"
                    placeholder="Enter your name"
                />
                <ErrorMessage name='myName' />
            </Form>
        </Formik>
        
    )
}