import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Login = () => {
    // show password icon
    const [showPass, setShowPass] = useState(false);
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    // location
    const location = useLocation()
    console.log('location', location);
    const navigate = useNavigate()

    // form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        
        if (password.length < 6) {
            return setError('password kom')
        }

        if (!/[a-z]/.test(password)) {
            return setError('lowercase koro')
        }
        if (!/[A-Z]/.test(password)) {
            return setError('uppercase koro')
        }

        signIn(email, password)
            .then(result => {

                if (result.user) {
                    toast.success("Login hoice !")
                    navigate(location?.state || "/")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    // social login
    const handleSocialLogin = (social, name) => {
        social()
            .then(result => {
                console.log(result.user);
                toast.success(`Login with ${name}`)
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className=" min-h-[80%] bg-base-200 mb-5">




            <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold">Login Now!</h1>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />

                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>

                       
                        {/* password */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" relative flex justify-center items-center">
                                <input required type={showPass ? "text" : "password"}

                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                    {...register("password", { required: true })}

                                />
                                <span onClick={() => setShowPass(!showPass)} className=" font-bold text-3xl right-3 absolute ">

                                    {
                                        showPass ? <FaEyeSlash /> : <FaRegEye />
                                    }

                                </span>
                            </div>



                            {/* {errors.password && <span className='text-red-500'>This field is required</span>} */}
                            <p className="text-red-500">{error}</p>

                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                    </form>

                    <div className="px-8 flex justify-between">
                        <p>Already Have Account?</p>
                        <Link to="/register" className="text-blue-700 underline">Register Now</Link>
                    </div>


                    <div className="divider">continue with</div>
                    <div className="flex justify-around">
                        <button
                            onClick={() => handleSocialLogin(googleLogin, "google")}
                            className="btn btn-primary btn-sm btn-outline"
                        >
                            Google
                        </button>
                        <button
                            onClick={() => handleSocialLogin(githubLogin , "github")}
                            className="btn btn-secondary btn-sm btn-outline"
                        >
                            Github
                        </button>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;