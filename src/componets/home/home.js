import Navar from "../Navbar/Navar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home =()=>{
    return (
        <>
            <Navar></Navar>
            <Banner></Banner>
            <div className="product-card-container">
                <Products></Products>
            </div>
            
        </>
        
    )
};
export default Home;