import { Link } from "react-router-dom";
import 'animate.css';

const Property = ({ property }) => {
    console.log('hi property', property);

    const {  image , segment_name, facilities, status, price, description, estate_title} = property

    return (
        <div data-aos="fade-up"
        data-aos-duration="3000"  className="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto">
            <img className="w-full h-56 object-cover object-center" src={image} alt="Townhouse Image" />

            <div className="py-4 px-6">
                <h2 className="animate__animated animate__bounce  text-lg font-semibold text-gray-800 dark:text-white mb-2">{segment_name}</h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-gray-800 dark:text-white">{price}</span>
                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full uppercase text-xs font-semibold">{status}</span>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Facilities:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 pl-4">
                        {/* <li>Living Room</li>
                        <li>Kitchen</li>
                        <li>Backyard</li> */}
                        {
                            facilities.map(single => <li className="list-disc" key={single.id}>{single}</li>)
                        }
                    </ul>
                </div>

                <div className="mt-4">
                    <Link to={`singleProperty/${property.id}`} className="font-medium btn w-full text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default Property;


{/* <div className="card  bg-base-100 shadow-xl ">
    <figure><img className="w-full h-1/2 object- rounded-lg" src={image} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
            <Link className="btn btn-neutral btn-sm" to={`singleProperty/${property.id}`}>view</Link>
        </div>
    </div>
</div> */}