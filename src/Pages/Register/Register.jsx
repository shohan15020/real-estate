import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { Link } from "react-router-dom";

const Register = () => {
    // show password icon
    const [showPass, setShowPass] = useState(false);
    const { createUser } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;


        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className=" min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col ">
                <h1 className="text-5xl font-bold">Resister Now!</h1>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered" required {...register("name", { required: true })} />

                            {errors.name && <span>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required {...register("email", { required: true })} />

                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="input input-bordered" {...register("photo", { required: true })} />

                            {errors.photo && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
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
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                    </form>

                    <div className="px-8 flex justify-between">
                        <p>Already Have Account?</p>
                        <Link to="/login" className="text-blue-700 underline">Login Now</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;