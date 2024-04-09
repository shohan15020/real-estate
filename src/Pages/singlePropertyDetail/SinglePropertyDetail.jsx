import { useLoaderData , useParams} from "react-router-dom";
const SinglePropertyDetail = () => {

    const singleProperty = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id)
    

    const SingleBook = singleProperty.find(job => job.id === idInt)

    console.log(12,SingleBook);



    const {  estate_title, image, description, price , status, area, location, facilities} = SingleBook;

    console.log(price);

    return (
        <div className="container mx-auto mt-8">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={estate_title} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{estate_title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg text-gray-800 dark:text-white">{price}</span>
                <span className={`px-3 py-1 ${status === 'rent' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'} rounded-full uppercase text-xs font-semibold`}>{status}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Area: {area}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Location: {location}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Facilities:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 pl-4">
                  {facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SinglePropertyDetail;