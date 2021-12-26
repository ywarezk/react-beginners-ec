


/**
 * 
 
// inheritance
class A extends B {
    hello() {
        super.hello();

    }
}

class B  {

}

class A extends Hello {
    public b = new B();

    hello() {
        b.howdy();

    }
}


 */

import { useForm } from "./forms.hook";


export function Register() {
    const [form, handleFormChange] = useForm({
        email: '',
        password: '',
        firstName: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={form.email}
                onChange={handleFormChange}
                type="email" 
                name="email" 
                placeholder="Enter your name" 
            />
            <input 
                value={form.password}
                onChange={handleFormChange}
                type="password" 
                name="password" 
                placeholder="Enter your password" 
            />
            <input 
                value={form.firstName}
                onChange={handleFormChange}
                type="text" 
                name="firstName" 
                placeholder="Enter your name" 
            />
            <button type="submit">Login</button>
        </form>
    )
}