import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {signInUser,user} = useContext(AuthContext)
    console.log(user)

    const handleLogin = e =>{
        e.preventDefault()
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
        }).catch(error=>{
            console.error(error.message)
        })
    }
 
    return (
        <div className="w-full my-20">
        <div className="max-w-6xl mx-auto">

            <div className="md:w-1/2 w-[90%] mx-auto py-20 px-12 bg-gray-200">

                <h1 className="text-center text-3xl font-semibold">Login</h1>
                <form onSubmit={handleLogin}>

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
                        
                            <a className="text-lg text-red-600 cursor-pointer">Forgot password?</a>
                        
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl">Login</button>
                    </div>
                    <p className="text-lg pt-2">You have no account? please <Link to='/register' className="text-blue-600 underline">Register</Link></p>
                </form>

            </div>

        </div>
    </div>
    );
};

export default Login;