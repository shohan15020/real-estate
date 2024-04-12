import { Helmet } from "react-helmet-async";

const OurTeam = () => {
    return (
        <section className="">
            <Helmet>
                <title>My-Home-Estate | Contact</title>
            </Helmet>
            <div className="container p-4 mx-auto space-y-16 sm:p-10">

                <div className="text-center mb-12 mx-auto w-3/4">
                    <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Meet our Estate Properties team</h2>

                    <p>Discover the experts behind our real estate properties. Our team is dedicated to providing you with the best services and solutions in the real estate market.</p>
                </div>
                

                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                    <div data-aos="fade-up" className="space-y-4">
                        <div className="h-52 w-full">
                            <img alt="" className="h-full w-full object-cover  mx-auto mb-4 bg-center rounded-sm " src="https://i.ibb.co/tZVksrZ/pexels-yasin-gdu-2709563.jpg" />
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">John Doe</h4>
                            <p className="text-sm ">Real Estate Broker</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="space-y-4">

                        <div className="h-52 w-full">
                            <img alt="" className="h-full w-full object-cover  mx-auto mb-4 bg-center rounded-sm " src="https://i.ibb.co/tK1f3bh/pexels-tima-miroshnichenko-7567310.jpg" />
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Jane Smith</h4>
                            <p className="text-sm ">Real Estate Agent</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="space-y-4">
                        <div className="h-52 w-full">
                            <img alt="" className="h-full w-full object-cover  mx-auto mb-4 bg-center rounded-sm " src="https://i.ibb.co/vBvg2F3/pexels-andrea-piacquadio-789822.jpg" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Michael Brown</h4>
                            <p className="text-sm ">Real Estate Consultant</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="space-y-4">
                        <div className="h-52 w-full">
                            <img alt="" className="h-full w-full object-cover  mx-auto mb-4 bg-center rounded-sm " src="https://i.ibb.co/JQcqcx8/pexels-karolina-grabowska-4467687.jpg" />
                        </div>

                        <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">Emily White</h4>
                            <p className="text-sm">Real Estate Analyst</p>
                            <div className="flex mt-2 space-x-2">
                                <a rel="noopener noreferrer" href="#" title="Twitter" className="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a rel="noopener noreferrer" href="#" title="GitHub" className="">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default OurTeam;