import { useForm } from "./forms.hook";


export function Login() {
    const [form, handleFormChange] = useForm({
        email: '',
        password: ''
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
            <button type="submit">Login</button>
        </form>
    )
}