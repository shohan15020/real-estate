import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { Link ,useLocation, useNavigate} from "react-router-dom";

const Login = () => {
    // show password icon
    const [showPass, setShowPass] = useState(false);
    const { signIn , googleLogin, githubLogin} = useContext(AuthContext);

    const location = useLocation()
    console.log('location', location);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        


        signIn(email, password)
            .then(result => {
                
                if(result.user){
                    
                    navigate("/")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }


    // social login
    const handleSocialLogin = (social) =>{
        social()
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : "/")
            
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div className=" min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold">Login now!</h1>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required {...register("email", { required: true })} />

                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className=" relative flex justify-center items-center">
                                <input required type={showPass ? "text" : "password"}

                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                    {...register("password", )}

                                />
                                <span onClick={() => setShowPass(!showPass)} className=" font-bold text-3xl right-3 absolute ">

                                    {
                                        showPass ? <FaEyeSlash /> : <FaRegEye />
                                    }

                                </span>
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                    </form>

                     <div className="px-8 flex justify-between">
                        <p>New here?</p>
                        <Link to="/register" className="text-blue-700 underline">Register Now</Link>
                     </div>

                    <div className="divider">continue with</div>
                    <div className="flex justify-around">
                        <button
                            onClick={() => handleSocialLogin(googleLogin)}
                            className="btn btn-primary btn-sm btn-outline"
                        >
                            Google
                        </button>
                        <button
                            onClick={() => handleSocialLogin(githubLogin)}
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