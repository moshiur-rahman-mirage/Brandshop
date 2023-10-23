import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {


    const { user, createUser, brand,logout } = useContext(AuthContext)
    const handleSignup = e => {
        e.preventDefault();
console.log('sign up clicked')
        const form = new FormData(e.currentTarget)
        const username = form.get('username')
        const email = form.get('email')
        const password = form.get('password')

        const isLengthValid = password.length >= 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecial = /(?=.*?[!@#\$&*~])/.test(password);


        if (!isLengthValid) {
            toast.error('Password Length Must be 6 character long!');
        }
        if (!hasUpperCase) {
            toast.error('Password must have an upper case character!');
        }
        if (!hasSpecial) {
            toast.error('Password must have a special character!');
        }
        else {

            createUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    toast(' Registration Successful! Log In Now!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    logout();
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                });
        }
    }

        return (
            <div>
                <ToastContainer/>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {brand}
                            </h1>
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 style={{ textAlign: `${user}` ? 'left' : 'right' }} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    {
                                        user ? "Registration Succesful! Login Now!" : "Signup For New Account"
                                    }
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className="flex items-center justify-between">


                                    </div>
                                    <button type="submit" className="w-full text-neutral btn btn-ghost bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>


            </div>
        );
    };

    export default Signup;