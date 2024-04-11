import Property from "./Property";
import 'animate.css';

const AllProperty = ({ properties }) => {
    console.log(properties);

    return (
        <div className=" mt-[200px] md:mt-[150px] mb-24">
            <div className="text-center mb-12">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Discover Latest Properties</h2>
                <p>Newest Properties Around You</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    properties.map(property => <Property  key={property.id} property={property}></Property>)
                }
            </div>

            
        </div>
    );
};

export default AllProperty;