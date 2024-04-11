import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
const SinglePropertyDetail = () => {

  const singleProperty = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id)


  const SingleBook = singleProperty.find(job => job.id === idInt)

  console.log(12, SingleBook);



  const { estate_title, image, description, price, status, area, location, facilities, segment_name } = SingleBook;

  console.log(price);

  return (
    <div className="container mx-auto mt-8 mb-12">

      <Helmet>
        <title>SinglePropertyDetail: {id}</title>
      </Helmet>

      <div className="max-w-3xl mx-auto border-2 dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex flex-col ">
        <div className="w-full flex items-center">
          <img src={image} alt={estate_title} className="w-full h-64 object-cover object-center rounded-lg" />
        </div>
        <div className="p-6 flex flex-col justify-between ">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{segment_name}</h2>

            <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-4">{estate_title}</h2>


            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-xl text-gray-800 dark:text-white">{price}</span>
              <span className={`px-3 py-1 ${status === 'rent' ? 'bg-primary text-white' : 'bg-blue-500 text-white'} rounded-full uppercase text-sm font-semibold`}>{status}</span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Area: {area}</p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Location: {location}</p>
          </div>


          <div className="mt-4">
            <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">Facilities:</p>

            <ul className="text-lg text-gray-600 dark:text-gray-400  list-disc  flex gap-4">
              {facilities.map((facility, index) => (
                <li className="px-2 py-1 bg-primary rounded-full text-white text-sm font-semibold" key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SinglePropertyDetail;