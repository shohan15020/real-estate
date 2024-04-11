import AllProperty from "../../components/Estate/AllProperty";
import { useLoaderData, } from "react-router-dom";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import Review from "../../components/Review";

const Home = () => {
    const properties = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>My-Home-Estate | Home</title>
            </Helmet>
            <Banner  className=' border border-red-500 '></Banner>
            <AllProperty properties={properties}></AllProperty>
            <Review></Review>
        </div>
    );
};

export default Home;