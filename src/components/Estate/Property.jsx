import { Link } from "react-router-dom";

const Property = ({ property }) => {
    console.log('hi property', property);

    const { bookName, image } = property

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <Link className="btn btn-neutral btn-sm" to={`singleProperty/${property.id}`}>view</Link>
                </div>
            </div>
        </div>
    );
};

export default Property;