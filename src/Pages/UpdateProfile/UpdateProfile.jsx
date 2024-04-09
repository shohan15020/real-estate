// import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../../Firebase/FirebaseProvider';


// const UpdateProfile = () => {
//     const { user, updateUser } = useContext(AuthContext);
//     const [name, setName] = useState('');
//     const [photoURL, setPhotoURL] = useState('');

//     useEffect(() => {
//         // Fetch current user's information and populate the form fields
//         if (user) {
//             setName(user.displayName || '');
//             setPhotoURL(user.photoURL || '');
//         }
//     }, [user]);

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handlePhotoURLChange = (e) => {
//         setPhotoURL(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Call updateUser with the updated information
//         updateUser(name, photoURL);
//     };

//     return (
//         <div>
//             <h2>Update Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" value={name} onChange={handleNameChange} />
//                 </div>
//                 <div>
//                     <label>Photo URL:</label>
//                     <input type="text" value={photoURL} onChange={handlePhotoURLChange} />
//                 </div>
//                 <button type="submit">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// export default UpdateProfile;

import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Firebase/FirebaseProvider';


const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    // const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        // Fetch current user's information and populate the form fields
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
        // setImagePreview(url); // Update image preview
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Call updateUser with the updated information
        updateUser(name, photoURL)
            .then(() => {
                // Profile updated successfully
            })
            .catch((error) => {
                // Handle error
                console.error("Error updating profile: ", error);
            });
        
    };

    return (
        <div className='flex flex-col justify-center items-center'>

            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <h2 className="text-xl font-bold sm:text-2xl text-center my-4">My <span className='text-green-500'>P</span>rofile</h2>
                {/* 
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-24 h-24 mx-auto rounded-full  aspect-square ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" /> */}

                {
                    photoURL && <img src={photoURL} alt="" className="w-24 h-24 mx-auto rounded-full  aspect-square ring-2 ring-offset-4 ring-green-500" />
                }

                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        
                        <form onSubmit={handleSubmit} className='space-y-3'>

                            <div className='flex flex-col justify-center'>

                                <label className='text-left text-lg mb-1 '>
                                    Name:
                                </label>
                                <input type="text" className="input input-bordered input-success border-green-500  w-full " placeholder="Name" value={name} onChange={handleNameChange} />
                            </div>


                            <div className='flex flex-col justify-center'>

                                <label className='text-left  text-lg mb-1 '>
                                    Photo URL:
                                </label>
                                <input type="text" className="input input-bordered input-success border-green-500 w-full " placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
                            </div>


                            {/* {imagePreview && (
                    <div>
                        <label>Photo Preview:</label>
                        <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />
                    </div>
                )} */}
                            <button type="submit" className='btn btn-secondary'>Save Changes</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;

