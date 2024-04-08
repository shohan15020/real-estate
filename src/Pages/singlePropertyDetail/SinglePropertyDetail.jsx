import { useLoaderData , useParams} from "react-router-dom";
const SinglePropertyDetail = () => {

    const singleProperty = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id)
    

    const SingleBook = singleProperty.find(job => job.id === idInt)

    console.log(12,SingleBook);



    const {  estate_title, image, description, price } = SingleBook;

    console.log(price);

    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h1>{estate_title}</h1>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default SinglePropertyDetail;