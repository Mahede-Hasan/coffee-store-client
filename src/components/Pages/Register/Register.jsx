import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const createdAt = result?.user?.metadata?.creationTime;
                const user = { email, createdAt }
                console.log(user)
                fetch('https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        // reset form
                        form.email.value = ''
                        form.password.value = ''
                        if (data) {
                            navigate('/')
                        }
                    })
            }).catch(error => {
                console.log(error.message)
                alert(`${error.message}`)
            })
    }
    return (
        <div className="w-full my-20">
            <div className="max-w-6xl mx-auto">

                <div className="md:w-1/2 w-[90%] mx-auto py-20 px-12 bg-gray-200">

                    <h1 className="text-center text-3xl font-semibold">Register</h1>
                    <form onSubmit={handleRegister}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-xl" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-xl" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-xl">Register</button>
                        </div>

                        <p className="text-lg pt-2">Already have an account? please <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Register;