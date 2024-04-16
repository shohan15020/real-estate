const Stat = () => {
    return (
        <div className="mb-12">
            <div className="text-center mb-12 mx-auto w-3/4 ">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce">Empowering Your Real Estate Journey</h2>
                <p>We are committed to providing exceptional service and achieving outstanding results for our clients.</p>
            </div>

            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div data-aos="fade-right" className="stat bg-white  px-4 py-6 text-center shadow-lg rounded-lg overflow-hidden border-2">
                    <span className="stat-title text-xl font-bold">Homes Sold</span>
                    <span className="stat-value text-3xl font-semibold text-orange-500">31K</span>
                    <span className="stat-desc text-gray-500">Since [Year]</span>
                </div>
                <div data-aos="fade-right" className="stat bg-white  px-4 py-6 text-center shadow-lg rounded-lg overflow-hidden border-2">
                    <span className="stat-title text-xl font-bold">Satisfied Clients</span>
                    <span className="stat-value text-3xl font-semibold text-primary">4,200+</span>
                    <span className="stat-desc text-primary">Growing Network</span>
                </div>
                <div data-aos="fade-right" className="stat bg-white  px-4 py-6 text-center shadow-lg rounded-lg overflow-hidden border-2">
                    <span className="stat-title text-xl font-bold">New Listings</span>
                    <span className="stat-value text-3xl font-semibold text-pink-500">1,200+</span>
                    <span className="stat-desc text-gray-500">Constantly Expanding Inventory</span>
                </div>
            </div>


        </div>
    );
};

export default Stat;