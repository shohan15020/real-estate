
import Marquee from "react-fast-marquee";

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Firebase/FirebaseProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { RiAlertFill } from "react-icons/ri";


const UpdateProfile = () => {
    
    const { user, updateUser } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');


    useEffect(() => {
        
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        const url = e.target.value;
        setPhotoURL(url);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault()


        updateUser(name, photoURL)
            .then(() => {

                window.location.reload();

            })
            .catch((error) => {
                
                console.error(error);
            });

        toast.success("Profile updated successfully!")
        

    };

    return (
        <div data-aos="fade-down" className='flex flex-col justify-center items-center mb-12 '>

            <Helmet>
                <title>My-Home-Estate | UpdateProfile</title>
            </Helmet>
            <div className="flex flex-col justify-center border-2 p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">


                <Marquee className="border-2 text-white bg-primary ">
                    <RiAlertFill className="ml-4 mr-2 text-red-500"/>
                    <p>Refresh the page after update... </p>
                </Marquee>

                <h2 className="text-xl  font-bold sm:text-2xl text-center my-4">My Profile</h2>
                {/* 
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-24 h-24 mx-auto rounded-full  aspect-square ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" /> */}

                {
                    photoURL && <img src={photoURL} alt="" className="w-24 h-24 mx-auto rounded-full  aspect-square ring-2 ring-offset-4 ring-green-500" />
                }

                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">

                        <form onSubmit={handleSubmit} className='space-y-3'>

                            <h2 className='text-center text-xl my-5 border-dotted border-primary border-b-2 py-3'>{user.email}</h2>

                            <div className='flex flex-col justify-center'>

                                <label className='text-left text-lg mb-1 font-bold'>
                                    Name:
                                </label>
                                <input type="text" className="input input-bordered border-2 w-full " placeholder="Name" value={name} onChange={handleNameChange} />
                            </div>


                            <div className='flex flex-col justify-center'>

                                <label className='text-left  text-lg mb-1 font-bold'>
                                    Photo URL:
                                </label>
                                <input type="text" className="input input-bordered   w-full border-2" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
                            </div>

                            <button type="submit" className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Save Changes</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;

