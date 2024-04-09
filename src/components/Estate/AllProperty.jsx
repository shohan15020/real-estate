import Property from "./Property";
import 'animate.css';

const AllProperty = ({ properties }) => {
    console.log(properties);

    return (
        <div className="mb-12 mt-40">
            <div className="text-center mb-7" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h2 className="font-bold text-4xl mb-3" >Discover Latest Properties</h2>
                <p>Newest Properties Around You</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    properties.map(property => <Property key={property.id} property={property}></Property>)
                }
            </div>
        </div>
    );
};

export default AllProperty;