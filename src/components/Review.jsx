import { FaStar } from "react-icons/fa";

const Review = () => {
    return (
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Customer reviews</h2>
                <p>Newest Properties Around You</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* review 1 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:divide-gray-300 dark:text-gray-800 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border-2">
                    <div className="p-4 pb-0  ">
                        <div className="mb-3">
                            <img src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?b=1&s=170667a&w=0&k=20&c=lQxEqo4oY2z9-yUVMFdsJPYpMNRgOhi8-sFCz8Wt-cg=" alt="Reviewer's Name" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>

                        <div className=" flex justify-between">
                            <div>
                                <h4 className="font-bold">Jane Smith</h4>
                                <span className="text-xs dark:text-gray-600">1 week ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.8</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm dark:text-gray-600 ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        <button className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Reviewer
                        </button>
                    </div>
                </div>
                {/* review 2 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:divide-gray-300 dark:text-gray-800 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border-2">
                    <div className="p-4 pb-0  ">
                        <div className="mb-3">
                        <img src="https://media.istockphoto.com/id/2032820535/photo/portrait-of-a-happy-young-man-sitting-on-the-sofa-at-home-with-a-laptop-holding-a-credit-card.webp?b=1&s=170667a&w=0&k=20&c=cgu76NXo0BtLloNmVk_a_q8wMv4JqlBKOebTZkZOpvg=" alt="Reviewer's Name" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <h4 className="font-bold">Robert Keyosaki</h4>
                                <span className="text-xs dark:text-gray-600">5 days ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.7</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm dark:text-gray-600 ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        <button className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Reviewer
                        </button>
                    </div>
                </div>
                {/* review 3 */}
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:divide-gray-300 dark:text-gray-800 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border-2">
                    <div className="p-4 pb-0  ">
                        <div className="mb-3">
                        <img src="https://plus.unsplash.com/premium_photo-1685080293447-96ce32897b09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV2aWV3ZXJ8ZW58MHx8MHx8fDA%3D" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>

                        <div className=" flex justify-between">
                            <div>
                                <h4 className="font-bold">John Doe</h4>
                                <span className="text-xs dark:text-gray-600">5 days ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm dark:text-gray-600 ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        <button className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Reviewer
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;