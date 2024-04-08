import Property from "./Property";

const AllProperty = ({ properties }) => {
    console.log(properties);

    return (
        <div className="mb-12">
            <h2 className="font-bold my-10">Discover Latest Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    properties.map(property => <Property key={property.id} property={property}></Property>)
                }
            </div>
        </div>
    );
};

export default AllProperty;