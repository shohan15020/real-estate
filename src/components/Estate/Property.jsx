import { Link } from "react-router-dom";
import 'animate.css';
import PropTypes from 'prop-types'; 

const Property = ({ property }) => {
    console.log('hi property', property);

    const {  image , segment_name, facilities, status, price, description,} = property

    return (
        <div data-aos="fade-down" className="relative  bg-white  shadow-lg rounded-lg overflow-hidden mx-auto border-2 flex-1">
            <img className=" w-full h-56 object-cover object-center" src={image} alt="Townhouse Image" />

            <span className="absolute px-3 py-1 bg-red-500 text-white rounded-sm uppercase text-xs font-semibold top-0 left-0">{status}</span>

            <div className="py-4 px-6">
                <h2 className="animate__animated animate__bounce  text-lg font-semibold text-gray-800  mb-2">{segment_name}</h2>

                <p className="text-sm text-gray-600  mb-4">{description}</p>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-gray-800 ">{price}</span>
                    
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-600 d">Facilities:</p>
                    <ul className="text-sm text-gray-600  pl-4">
                        
                        {
                            facilities.map((single, idx) => <li className="list-disc" key={idx}>{single}</li>)
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

Property.propTypes = {
    property:PropTypes.object
}
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