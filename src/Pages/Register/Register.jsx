import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Register = () => {
    // show password icon
    const [showPass, setShowPass] = useState(false);
    const { createUser, logout } = useContext(AuthContext);
    const [error, setError] = useState('');

    const location = useLocation()
    console.log('location', location);
    const navigate = useNavigate()



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, } = data;

        if (password.length < 6) {
            return setError('password kom')
        }

        if (!/[a-z]/.test(password)) {
            return setError('lowercase koro')
        }
        if (!/[A-Z]/.test(password)) {
            return setError('uppercase koro')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toast.success("Register successfully!")
                    logout()
                    navigate("/login")
                }

            })
            .catch(error => {
                console.error(error)
            })


    }



    // social login
    // const handleSocialLogin = (social) =>{
    //     social()
    //     .then(result => {
    //         console.log(result.user);
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

    // }

    return (
        <div className="min-h-[50%]  mb-5 bg-cover bg-center " style={{ backgroundImage: `url('https://i.ibb.co/bmS52r0/pexels-alex-staudinger-1732414.jpg ')` }}>

            


            <div className="hero-content flex-col ">
                

                <div className="card shrink-0 w-full  max-w-md shadow-2xl   backdrop-blur-md bg-white/30">
                <h1 className="text-5xl font-bold text-center  mt-4 ">Resister Now!</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                {...register("name", { required: true })}
                            />

                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>

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

                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo" className="input input-bordered"
                                {...register("photo", { required: true })}
                            />

                            {errors.photo && <span className='text-red-500'>This field is required</span>}
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
                            <button type="submit" className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Register</button>
                        </div>

                    </form>

                    <div className="px-8 flex justify-between mb-5">
                        <p>Already Have Account?</p>
                        <Link to="/login" className="text-blue-700 underline">Login Now</Link>
                    </div>


                    {/* <div className="divider">continue with</div>
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
                        
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Register;










// https://i.ibb.co/7WXyC4F/pexels-pixabay-280221.jpg
// https://i.ibb.co/WG98ksL/pexels-curtis-adams-3288104.jpg
// https://i.ibb.co/gzg0XyG/pexels-pixabay-276554.jpg
// https://i.ibb.co/xHqvXK7/pexels-pixabay-280222.jpg
// https://i.ibb.co/ZHbJJnq/pexels-pixabay-208736.jpg
// https://i.ibb.co/frxsRz0/pexels-pixabay-259588.jpg
// https://i.ibb.co/7GkSrbV/pexels-binyamin-mellish-1396122.jpg
// https://i.ibb.co/wLRrh14/pexels-expect-best-323780.jpg
// https://i.ibb.co/rtpQ2Yw/pexels-pixabay-210617.jpg