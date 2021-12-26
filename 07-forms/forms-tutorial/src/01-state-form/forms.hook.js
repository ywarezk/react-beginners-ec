/**
 * 
 * take the common things between Login/Register
 * and move them to a 3rd party function
 * which we will do here
 * 
 * hooks
 * custom hooks
 * 
 */

/**
 * 
 * @param {email: '', password: '', } fields 
 */
export function useForm(fields) {
    const [ form, setForm ] = useState(fields)

    /**
     * 
     * @param {*} e - event object that describes the event 
     */
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return [form, handleFormChange];
}