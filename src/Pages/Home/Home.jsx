import AllProperty from "../../components/Estate/AllProperty";
import { useLoaderData, } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
    const properties = useLoaderData();
    
    return (
        <div>
            <Banner  className=' border border-red-500 '></Banner>
            <AllProperty properties={properties}></AllProperty>
        </div>
    );
};

export default Home;